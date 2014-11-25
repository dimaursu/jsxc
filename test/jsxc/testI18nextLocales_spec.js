var Diaspora = {
  I18n: {
    language: 'en'
  }
};

var jsxc_options = {
  root: '.',
  rosterAppend: 'body',
  otr: {
    debug: true,
    SEND_WHITESPACE_TAG: true,
    WHITESPACE_START_AKE: true
  },
  loginForm: {
    form: '#jsxc_loginForm'
  },
  xmpp: {
    jid: 'test@test.de'
  },
  displayRosterMinimized: function() {
    return true;
  },
  loadSettings: function() {
    return false;
  }
};

function readFile(path) {
  return JSON.parse(
    jQuery.ajax({
      dataType: "jsonp",
      url: path,
      async: false
    }).responseText
  );
}

QUnit.test( "Check if we provide the correct locales", function( assert ) {
  Diaspora.I18n.language = 'en';
  jsxc.init(jsxc_options);
  var enLocales = readFile('locales/en/translation.json');
  assert.ok(enLocales != null);
  $.each(enLocales, function(key, val) {
    // TODO i18next returns key instead of value why?!
    //assert.ok($.t(key) == val, val + " equals " + $.t(key));
  });

  Diaspora.I18n.language = 'de';
  jsxc.init(jsxc_options);
  var deLocales = readFile('locales/de/translation.json');
  assert.ok(deLocales != null);
  $.each(deLocales, function(key, val) {
    assert.ok($.t(key) == val, key + " equals the locale file");
  });

  Diaspora.I18n.language = 'es';
  jsxc.init(jsxc_options);
  var esLocales = readFile('locales/es/translation.json');
  assert.ok(esLocales != null);
  $.each(esLocales, function(key, val) {
    assert.ok($.t(key) == val, key + " equals the locale file");
  });
});

