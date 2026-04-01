(function ($) {

    'use strict';
  
    var LOGIN_URL   = '/login';
    var POPUP_ID    = 'gh-login-overlay';
    var ERROR_CLASS = 'gh-visible';
  
    var POPUP_HTML = [
      '<div id="gh-login-overlay">',
        '<div id="gh-login-card">',
          '<div id="gh-login-header">',
            '<button id="gh-login-close" aria-label="Chiudi">',
              '<i class="material-icons">close</i>',
            '</button>',
            '<div id="gh-login-logo">',
              '<span class="gh-pop-goal">Goal</span>',
              '<span class="gh-pop-her">Her</span>',
            '</div>',
            '<div id="gh-login-subtitle">Accedi alla community</div>',
          '</div>',
          '<div id="gh-login-body">',
  
            '<div id="gh-login-error" role="alert"></div>',
  
            '<form id="gh-login-form" action="/login" method="post" name="form_login">',
              '<div class="gh-login-field">',
                '<label for="gh-username">Nome utente</label>',
                '<input type="text" id="gh-username" name="username"',
                  ' placeholder="Il tuo nome utente"',
                  ' maxlength="40" autocomplete="username" required />',
              '</div>',
              '<div class="gh-login-field">',
                '<label for="gh-password">Password</label>',
                '<input type="password" id="gh-password" name="password"',
                  ' placeholder="La tua password"',
                  ' maxlength="64" autocomplete="current-password" required />',
              '</div>',
              '<label id="gh-login-autologin-wrap">',
                '<input type="checkbox" name="autologin" checked />',
                '<span>Resta connesso</span>',
              '</label>',
              '<input type="hidden" name="redirect" value="" />',
              '<input type="hidden" name="query"    value="" />',
              '<button type="submit" id="gh-login-submit">',
                '<div class="gh-spinner"></div>',
                '<i class="material-icons gh-btn-icon">login</i>',
                '<span class="gh-btn-label">Accedi</span>',
              '</button>',
  
            '</form>',
  
          '</div>',
          '<div id="gh-login-footer">',
            '<a href="/register">Non hai un account? Registrati</a>',
            '<div class="gh-divider"></div>',
            '<a href="/profile?mode=sendpassword">Ho dimenticato la password</a>',
          '</div>',
  
        '</div>',
      '</div>'
    ].join('');
  
    var $overlay   = null;
    var isOpen     = false;
    var redirectTo = '';
  
    function init() {
      if ($('#' + POPUP_ID).length === 0) {
        $('body').append(POPUP_HTML);
      }
  
      $overlay = $('#' + POPUP_ID);
  
      bindEvents();
      interceptLoginLinks();
    }
  
    function bindEvents() {
      $overlay.on('click', '#gh-login-close', function () {
        closePopup();
      });
  
      $overlay.on('click', function (e) {
        if ($(e.target).is($overlay)) {
          closePopup();
        }
      });
  
      $(document).on('keydown.ghLoginPopup', function (e) {
        if (isOpen && e.key === 'Escape') {
          closePopup();
        }
      });
  
      $overlay.on('click', '.gh-eye-toggle', function () {
        var $input = $(this).siblings('input');
        var $icon  = $(this).find('i');
        if ($input.attr('type') === 'password') {
          $input.attr('type', 'text');
          $icon.text('visibility_off');
        } else {
          $input.attr('type', 'password');
          $icon.text('visibility');
        }
      });
  
      $overlay.on('submit', '#gh-login-form', function (e) {
        e.preventDefault();
        handleSubmit();
      });
    }
  
    function interceptLoginLinks() {
      $(document).on('click.ghLoginPopup', 'a[href^="/login"]', function (e) {
        var href = $(this).attr('href') || '';
        if (href.indexOf('logout') !== -1) {
          return true;
        }
  
        e.preventDefault();
  
        redirectTo = extractRedirect(href);
  
        openPopup();
      });
    }
  
    function closeForumMenu() {
      $('#main-menu, #main-user-menu, #notif-menu').addClass('hidden');
      $('#dimmer').addClass('hidden');
      $('body').removeClass('menu-open');
    }
  
  
    function openPopup() {
      closeForumMenu();
  
      $overlay.find('input[name="redirect"]').val(redirectTo);
  
      $overlay.find('#gh-login-form')[0].reset();
      $overlay.find('input[name="redirect"]').val(redirectTo);
      hideError();
      setLoading(false);
  
      $overlay.addClass(ERROR_CLASS);
      isOpen = true;
  
      setTimeout(function () {
        $overlay.find('#gh-username').focus();
      }, 300);
  
      $('body').css('overflow', 'hidden');
    }
  
    function closePopup() {
      $overlay.removeClass(ERROR_CLASS);
      isOpen     = false;
      redirectTo = '';
  
      $('body').css('overflow', '');
    }
  
    function handleSubmit() {
  
      var $form = $overlay.find('#gh-login-form');
      var data  = $form.serialize();
  
      hideError();
      setLoading(true);
  
      fetch(LOGIN_URL, {
        method      : 'POST',
        headers     : { 'Content-Type': 'application/x-www-form-urlencoded' },
        body        : data,
        redirect    : 'follow',
        credentials : 'same-origin'
      })
      .then(function (response) {
  
          
        var finalUrl = response.url || '';
  
        return response.text().then(function (html) {
          return { finalUrl: finalUrl, html: html };
        });
      })
      .then(function (result) {
  
        setLoading(false);
  
        var isLoginPage = result.finalUrl.indexOf('/login') !== -1 &&
                          result.finalUrl.indexOf('logout') === -1;
  
        if (isLoginPage) {
          var errorMsg = extractErrorMessage(result.html);
          showError(errorMsg);
        } else {
          closePopup();
          window.location.href = result.finalUrl || redirectTo || '/';
        }
      })
      .catch(function () {
        setLoading(false);
        showError('Si è verificato un errore di rete. Riprova.');
      });
    }
  
  
    function extractErrorMessage(html) {
  
      try {
        var parser = new DOMParser();
        var doc    = parser.parseFromString(html, 'text/html');
  
        var blocks = doc.querySelectorAll('#wrap .block .block-content');
  
        for (var i = 0; i < blocks.length; i++) {
          var block     = blocks[i];
          var parentDiv = block.parentElement;
  
          if (parentDiv && parentDiv.classList.contains('block-login')) {
            continue;
          }
  
          var clone = block.cloneNode(true);
          clone.querySelectorAll('a').forEach(function (a) { a.remove(); });
          var cleanText = clone.textContent.trim();
  
          if (cleanText.length > 0 && cleanText.length < 300) {
            return cleanText;
          }
        }
  
        var errEl = doc.querySelector('.block-content-error');
        if (errEl) {
          return errEl.textContent.trim();
        }
  
      } catch (e) {
      }
  
      return 'Nome utente o password non corretti. Riprova.';
    }
  
    function showError(msg) {
      var $err = $overlay.find('#gh-login-error');
      $err.text(msg).addClass(ERROR_CLASS);
    }
  
    function hideError() {
      $overlay.find('#gh-login-error').removeClass(ERROR_CLASS).text('');
    }
  
    function setLoading(state) {
      var $btn = $overlay.find('#gh-login-submit');
      if (state) {
        $btn.addClass('gh-loading');
      } else {
        $btn.removeClass('gh-loading');
      }
    }
  
    function extractRedirect(href) {
      try {
        var absolute = href.indexOf('http') === 0
          ? href
          : window.location.origin + href;
        var params = new URLSearchParams(new URL(absolute).search);
        return params.get('redirect') || '';
      } catch (e) {
        return '';
      }
    }
  
    $(document).ready(function () {
      init();
    });
  
  }(jQuery));