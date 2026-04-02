/* GoalHer — Login Popup | goalher-login-popup.js */

(function ($) {

    'use strict';
  
    var POPUP_ID = 'gh-login-overlay';
    var VISIBLE  = 'gh-visible';
  
    var POPUP_HTML = [
      '<div id="gh-login-overlay">',
        '<div id="gh-login-card">',
          '<div id="gh-login-header">',
            '<button id="gh-login-close" type="button" aria-label="Chiudi">',
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
              '<input type="hidden" name="login"    value="Accedi" />',
              '<button type="submit" id="gh-login-submit">',
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
  
    var $overlay = null;
    var isOpen   = false;
  
    function init() {
      if (typeof _userdata !== 'undefined' && _userdata['session_logged_in']) {
        return;
      }
  
      if ($('#' + POPUP_ID).length === 0) {
        $('body').append(POPUP_HTML);
      }
  
      $overlay = $('#' + POPUP_ID);
  
      bindEvents();
      interceptLoginLinks();
      checkLoginError();
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
  
      $overlay.on('submit', '#gh-login-form', function () {
        $('#gh-login-submit').addClass('gh-loading');
      });
    }
  
    function interceptLoginLinks() {
      $(document).on('click.ghLoginPopup', 'a[href^="/login"], .button[href^="/login"]', function (e) {
        var href = $(this).attr('href') || '';
  
        if (href.indexOf('logout') !== -1) {
          return true;
        }
  
        e.preventDefault();
        $overlay.find('input[name="redirect"]').val(extractRedirect(href));
        openPopup();
      });
    }
  
    function checkLoginError() {
      if (window.location.pathname !== '/login') {
        return;
      }
  
      var errorMsg = extractErrorFromPage();
  
      if (errorMsg) {
        var redirectVal = $('form[name="form_login"] input[name="redirect"]').val() || '';
        $overlay.find('input[name="redirect"]').val(redirectVal);
        openPopup();
        showError(errorMsg);
      }
    }
  
    function extractErrorFromPage() {
      var errorMsg = '';
  
      $('#wrap .block').each(function () {
        if ($(this).hasClass('block-login')) {
          return true;
        }
  
        var $content = $(this).find('.block-content');
        if ($content.length === 0) {
          return true;
        }
  
        var $clone = $content.clone();
        $clone.find('a').remove();
        var text = $clone.text().trim();
  
        if (text.length > 0 && text.length < 300) {
          errorMsg = text;
          return false;
        }
      });
  
      return errorMsg;
    }
  
    function openPopup() {
      closeForumMenu();
  
      var redirectVal = $overlay.find('input[name="redirect"]').val();
      $overlay.find('#gh-login-form')[0].reset();
      $overlay.find('input[name="redirect"]').val(redirectVal);
      $overlay.find('input[name="login"]').val('Accedi');
      $overlay.find('#gh-login-submit').removeClass('gh-loading');
      hideError();
  
      $overlay.addClass(VISIBLE);
      isOpen = true;
  
      setTimeout(function () {
        $overlay.find('#gh-username').focus();
      }, 300);
  
      $('body').css('overflow', 'hidden');
    }
  
    function closePopup() {
      $overlay.removeClass(VISIBLE);
      hideError();
      isOpen = false;
      $('body').css('overflow', '');
    }
  
    function closeForumMenu() {
      $('#main-menu, #main-user-menu, #notif-menu').addClass('hidden');
      $('#dimmer').addClass('hidden');
      $('body').removeClass('menu-open');
    }
  
    function showError(msg) {
      $overlay.find('#gh-login-error').text(msg).addClass(VISIBLE);
    }
  
    function hideError() {
      $overlay.find('#gh-login-error').removeClass(VISIBLE).text('');
    }
  
    function extractRedirect(href) {
      try {
        var absolute = href.indexOf('http') === 0
          ? href
          : window.location.origin + href;
        var params   = new URLSearchParams(new URL(absolute).search);
        var redirect = params.get('redirect') || '';
  
        if (redirect) {
          var txt = document.createElement('textarea');
          txt.innerHTML = redirect;
          redirect = txt.value;
        }
  
        return redirect;
      } catch (e) {
        return '';
      }
    }
  
    $(document).ready(function () {
      init();
    });
  
  }(jQuery));