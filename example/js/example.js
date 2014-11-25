$(function() {
   jsxc.init({
      loginForm: {
         form: '#form',
         jid: '#username',
         pass: '#password'
      },
      logoutElement: $('#logout'),
      checkFlash: false,
      rosterAppend: 'body',
      root: '/jsxc/',
      turnCredentialsPath: 'ajax/getturncredentials.json',
      displayRosterMinimized: function() {
         return true;
      },
      otr: {
         debug: true,
         SEND_WHITESPACE_TAG: true,
         WHITESPACE_START_AKE: true
      },
      loadSettings: function(username, password) {
         return {
            xmpp: {
              url: 'https://sechat.org/http-bind',
               domain: 'sechat.org',
               resource: 'example',
               overwrite: true,
               onlogin: true
            }
         };
      }
   });
});
