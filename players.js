// ============================================================
//  GoalHer Wordle
//  Formato: { word: "COGNOME", nationality: "Nome Nazione", club: "Nome Club" }
// ============================================================

const PLAYERS = [

    // ── Australia ─────────────────────────────────────────────
  { word: "CARPENTER",   nationality: "Australia",    club: "Chelsea" },
  { word: "CATLEY",      nationality: "Australia",    club: "Arsenal" },
  { word: "COONEYCROSS", nationality: "Australia",    club: "Arsenal" },
  { word: "FOORD",       nationality: "Australia",    club: "Arsenal" },
  { word: "FOWLER",      nationality: "Australia",    club: "Manchester City" },
  { word: "KERR",        nationality: "Australia",    club: "Chelsea" },

    // ── Belgio ────────────────────────────────────────────────
  { word: "MISSIPO",     nationality: "Belgio",       club: "Sassuolo"},
  { word: "WULLAERT",    nationality: "Belgio",       club: "Inter"},

   // ── Brasile ───────────────────────────────────────────────
  { word: "KEROLIN",     nationality: "Brasile",      club: "Manchester City" },
  { word: "MARTA",       nationality: "Brasile",      club: "Leggenda"},

    // ── Cile   ───────────────────────────────────────────────
  { word: "ENDLER",      nationality: "Cile",         club: "Lione" },

    // ── Canada ───────────────────────────────────────────────
  { word: "BUCHANAN",    nationality: "Canada",       club: "Chelsea" },
  { word: "GILLES",      nationality: "Canada",       club: "Bayern Monaco" },
  { word: "HUITEMA",     nationality: "Canada",       club: "Chicago Stars FC" },
  { word: "SMITH",       nationality: "Canada",       club: "Arsenal" },
  { word: "VIENS",       nationality: "Canada",       club: "Roma" },

    // ── Colombia ────────────────────────────────────────────────
  { word: "CAICEDO",     nationality: "Colombia",     club: "Real Madrid" },
  { word: "RAMIREZ",     nationality: "Colombia",     club: "Chelsea" },

    // ── Danimarca ─────────────────────────────────────────────
  { word: "HARDER",      nationality: "Danimarca",    club: "Bayern Monaco" },
  { word: "KUHL",        nationality: "Danimarca",    club: "Atletico Madrid" },
  { word: "SVAVA",       nationality: "Danimarca",    club: "Lione" },
  { word: "THOGERSEN",   nationality: "Danimarca",    club: "Roma" },
  { word: "VANGSSGAARD", nationality: "Danimarca",    club: "Juventus" },

    // ── Francia ───────────────────────────────────────────────
  { word: "BACHA",       nationality: "Francia",      club: "Lione" },
  { word: "BALTIMORE",   nationality: "Francia",      club: "Chelsea" },
  { word: "CASCARINO",   nationality: "Francia",      club: "London City Lionesses" },
  { word: "DIANI",       nationality: "Francia",      club: "Lione" },
  { word: "GEYORO",      nationality: "Francia",      club: "London City Lionesses" },
  { word: "HENRY",       nationality: "Francia",      club: "Lione" },
  { word: "KARCHAOUI",   nationality: "Francia",      club: "Paris Saint-Germain " },
  { word: "KATOTO",      nationality: "Francia",      club: "Lione" },
  { word: "RENARD",      nationality: "Francia",      club: "Lione" },
  { word: "TOLETTI",     nationality: "Francia",      club: "Real Madrid" },

    // ── Germania ──────────────────────────────────────────────
  { word: "BERGER",      nationality: "Germania",     club: "NJ/NY Gotham FC" },
  { word: "BRAND",       nationality: "Germania",     club: "Lione" },
  { word: "DALLMANN",    nationality: "Germania",     club: "Bayern Monaco" },
  { word: "FREIGANG",    nationality: "Germania",     club: "Eintracht Frankfurt" },
  { word: "GWINN",       nationality: "Germania",     club: "Bayern Monaco" },
  { word: "MAGULL",      nationality: "Germania",     club: "Inter" },
  { word: "NUSKEN",      nationality: "Germania",     club: "Chelsea" },
  { word: "OBERDORF",    nationality: "Germania",     club: "Wolfsburg" },
  { word: "POPP",        nationality: "Germania",     club: "Wolfsburg" },
  { word: "SCHULLER",    nationality: "Germania",     club: "Manchester United" },

  // ──   Giappone ────────────────────────────────────────────────
  { word: "HAMANO",      nationality: "Giappone",     club: "Tottenham" },
  { word: "HASEGAWA",    nationality: "Giappone",     club: "Manchester City" },
  { word: "KUMAGAI",     nationality: "Giappone",     club: "London City Lionesses" },
  { word: "MIYAZAWA",    nationality: "Giappone",     club: "Manchester United" },
  { word: "MINAMI",      nationality: "Giappone",     club: "Brighton" },

  // ──   Haiti ?   ────────────────────────────────────────────────
  { word: "DUMORNAY",    nationality: "Haiti",        club: "Lione" },

  // ──   Inghilterra ───────────────────────────────────────────
  { word: "BRIGHT",      nationality: "Inghilterra",  club: "Chelsea" },
  { word: "BRONZE",      nationality: "Inghilterra",  club: "Chelsea" },
  { word: "CARTER",      nationality: "Inghilterra",  club: "NJ/NY Gotham FC" },
  { word: "GREENWOOD",   nationality: "Inghilterra",  club: "Manchester City"},
  { word: "HAMPTON",     nationality: "Inghilterra",  club: "Chelsea" },
  { word: "HEMP",        nationality: "Inghilterra",  club: "Manchester City" },
  { word: "JAMES",       nationality: "Inghilterra",  club: "Chelsea"},
  { word: "KELLY",       nationality: "Inghilterra",  club: "Arsenal"},
  { word: "KIRBY",       nationality: "Inghilterra",  club: "Brighton" },
  { word: "MEAD",        nationality: "Inghilterra",  club: "Arsenal"},
  { word: "ROEBUCK",     nationality: "Inghilterra",  club: "Aston Villa" },
  { word: "RUSSO",       nationality: "Inghilterra",  club: "Arsenal"},
  { word: "STANWAY",     nationality: "Inghilterra",  club: "Bayern Monaco" },
  { word: "TOONE",       nationality: "Inghilterra",  club: "Manchester United"},
  { word: "WALSH",       nationality: "Inghilterra",  club: "Chelsea" },
  { word: "WHITE",       nationality: "Inghilterra",  club: "Chelsea" },
  { word: "WILLIAMSON",  nationality: "Inghilterra",  club: "Arsenal"},

  // ──   Irlanda ────────────────────────────────────────────────
  { word: "MCCABE",      nationality: "Irlanda",      club: "Arsenal" },

  // ──   Italia ────────────────────────────────────────────────
  { word: "BARTOLI",     nationality: "Italia",       club: "Inter" },
  { word: "BECCARI",     nationality: "Italia",       club: "Juventus" },
  { word: "BERGAMASCHI", nationality: "Italia",       club: "Roma" },
  { word: "BOATTIN",     nationality: "Italia",       club: "Juventus" },
  { word: "BONANSEA",    nationality: "Italia",       club: "Juventus" },
  { word: "BONFANTINI",  nationality: "Italia",       club: "Fiorentina" },
  { word: "CAMBIAGHI",   nationality: "Italia",       club: "Juventus" },
  { word: "CANTORE",     nationality: "Italia",       club: "Washington Spirit" },
  { word: "CARUSO",      nationality: "Italia",       club: "Bayern Monaco" },
  { word: "DIGUGLIELMO", nationality: "Italia",       club: "Washington Spirit" },
  { word: "DRAGONI",     nationality: "Italia",       club: "Roma" },
  { word: "DURANTE",     nationality: "Italia",       club: "Lazio" },
  { word: "FILANGERI",   nationality: "Italia",       club: "Sampdoria" },
  { word: "GALLI",       nationality: "Italia",       club: "Everton" },
  { word: "GOLDONI",     nationality: "Italia",       club: "Lazio" },
  { word: "GIACINTI",    nationality: "Italia",       club: "Como" },
  { word: "GIRELLI",     nationality: "Italia",       club: "Bay FC" },
  { word: "GIUGLIANO",   nationality: "Italia",       club: "Roma" },
  { word: "GIULIANI",    nationality: "Italia",       club: "Milan" },
  { word: "GLIONNA",     nationality: "Italia",       club: "Inter" },
  { word: "GREGGI",      nationality: "Italia",       club: "Roma" },
  { word: "LENZINI",     nationality: "Italia",       club: "Juventus" },
  { word: "LINARI",      nationality: "Italia",       club: "London City Lionesses" },
  { word: "PIEMONTE",    nationality: "Italia",       club: "Lazio" },
  { word: "ROSUCCI",     nationality: "Italia",       club: "Juventus" },
  { word: "SALVAI",      nationality: "Italia",       club: "Juventus" },
  { word: "SCHATZER",    nationality: "Italia",       club: "Juventus" },
  { word: "SERTURINI",   nationality: "Italia",       club: "Inter" },
  { word: "SEVERINI",    nationality: "Italia",       club: "Fiorentina" },
  { word: "SOFFIA",      nationality: "Italia",       club: "Milan" },

  // ──   Malawi   ──────────────────────────────────────────────
  { word: "CHAWINGA",    nationality: "Malawi",       club: "Lione" },

  // ──   Norvegia ──────────────────────────────────────────────
  { word: "ENGEN",       nationality: "Norvegia",     club: "Lione" },
  { word: "HAAVI",       nationality: "Norvegia",     club: "Roma" },
  { word: "HANSEN",      nationality: "Norvegia",     club: "Barcellona" },
  { word: "HEGERBERG",   nationality: "Norvegia",     club: "Lione" },
  { word: "MAANUM",      nationality: "Norvegia",     club: "Arsenal" },
  { word: "REITEN",      nationality: "Norvegia",     club: "NJ/NY Gotham FC" },
  { word: "TERLAND",     nationality: "Norvegia",     club: "Manchester United" },

    // ── Olanda ────────────────────────────────────────────────
  { word: "BEERENSTEYN", nationality: "Olanda",       club: "Wolfsburg" },
  { word: "BRUGTS",      nationality: "Olanda",       club: "Barcellona" },
  { word: "CASPARIJ",    nationality: "Olanda",       club: "Manchester City" },
  { word: "EGURROLA",    nationality: "Olanda",       club: "Lione"},
  { word: "GROENEN",     nationality: "Olanda",       club: "Paris Saint-Germain"},
  { word: "KAPTEIN",     nationality: "Olanda",       club: "Chelsea" },
  { word: "LEUCHTER",    nationality: "Olanda",       club: "Paris Saint-Germain" },
  { word: "MARTENS",     nationality: "Olanda",       club: "Real Madrid" },
  { word: "MIEDEMA",     nationality: "Olanda",       club: "Manchester City" },
  { word: "ROORD",       nationality: "Olanda",       club: "Manchester City" },
  { word: "VANDEDONK",   nationality: "Olanda",       club: "London City Lionesses" },

  // ──   Portogallo ────────────────────────────────────────────────
  { word: "KIKA",       nationality: "Portogallo",    club: "Barcellona" },
  { word: "PAULETA",    nationality: "Portogallo",    club: "Benfica"},

  // ──   Scozia  ────────────────────────────────────────────────
  { word: "CUTHBERT",    nationality: "Scozia",       club: "Chelsea" },
  { word: "LITTLE",      nationality: "Scozia",       club: "Arsenal"},

  // ──   Spagna ────────────────────────────────────────────────
  { word: "AITANA",      nationality: "Spagna",       club: "Barcellona" },
  { word: "ALEXIA",      nationality: "Spagna",       club: "Barcellona" },
  { word: "BATTLE",      nationality: "Spagna",       club: "Barcellona" },
  { word: "BOQUETE",     nationality: "Spagna",       club: "Fiorentina" },
  { word: "MARIONA",     nationality: "Spagna",       club: "Arsenal" },
  { word: "OLGA",        nationality: "Spagna",       club: "Paris Saint-Germain" },
  { word: "PARALLUELO",  nationality: "Spagna",       club: "Barcellona" },
  { word: "PAREDES",     nationality: "Spagna",       club: "Barcellona" },
  { word: "PATRI",       nationality: "Spagna",       club: "Barcellona" },
  { word: "PINA",        nationality: "Spagna",       club: "Barcellona" },

  // ──  Stati Uniti ───────────────────────────────────────────
  { word: "DUNN",        nationality: "Stati Uniti",  club: "Portland Thorns FC" },
  { word: "FOX",         nationality: "Stati Uniti",  club: "Arsenal" },
  { word: "GIRMA",       nationality: "Stati Uniti",  club: "Chelsea" },
  { word: "HEAPS",       nationality: "Stati Uniti",  club: "Denver Summit FC" },
  { word: "LAVELLE",     nationality: "Stati Uniti",  club: "NJ/NY Gotham FC" },
  { word: "MORGAN",      nationality: "Stati Uniti",  club: "Leggenda" },
  { word: "RAPINOE",     nationality: "Stati Uniti",  club: "Leggenda" },
  { word: "RODMAN",      nationality: "Stati Uniti",  club: "Washington Spirit" },
  { word: "THOMPSON",    nationality: "Stati Uniti",  club: "Chelsea" },
  { word: "YOHANNES",    nationality: "Stati Uniti",  club: "Lione" },

    // ── Svezia ────────────────────────────────────────────────
  { word: "ANGELDAHL",   nationality: "Svezia",       club: "Real Madrid" },
  { word: "ASLLANI",     nationality: "Svezia",       club: "London City Lionesses" },
  { word: "BLACKSTENIUS",nationality: "Svezia",       club: "Arsenal" },
  { word: "BLOMQVIST",   nationality: "Svezia",       club: "Eintracht Frankfurt" },
  { word: "ERIKSSON",    nationality: "Svezia",       club: "Bayern Monaco" },
  { word: "HURTIG",      nationality: "Svezia",       club: "Fiorentina" },
  { word: "KAFAJI",      nationality: "Svezia",       club: "Brighton"},
  { word: "KANERYD",     nationality: "Svezia",       club: "Chelsea" },
  { word: "KULLBERG",    nationality: "Svezia",       club: "Juventus" },
  { word: "ROLFO",       nationality: "Svezia",       club: "Manchester United" },
  { word: "SEMBRANT",    nationality: "Stati Uniti",  club: "AIK" },

  // ──   Svizzera ───────────────────────────────────────────────
  { word: "CALLIGARIS",  nationality: "Svizzera",      club: "Juventus" },
  { word: "LEHMANN",     nationality: "Svizzera",      club: "Leicester City" },
  { word: "PILGRIM",     nationality: "Svizzera",      club: "Roma" },
  { word: "REUTELER",    nationality: "Svizzera",      club: "Eintracht Frankfurt" },
  { word: "SCHERTENLEIB",nationality: "Svizzera",      club: "Barcellona" },
  { word: "WALTI",       nationality: "Svizzera",      club: "Juventus" },


];
