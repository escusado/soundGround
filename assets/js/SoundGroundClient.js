SGC = Class('SoundGroundClient')({
  _c : '72c6ae4ae439d253d88a81db48ee9e20',
  setup : function (ev) {
    //get client ID
    this.clientIdModal = new BsModal();
    // this.clientIdModal.show();

    this.bindEvents();
  },

  bindEvents : function(){
    var SoundGroundClient = this;

    this.clientIdModal.element.on('modal:button:click', function(e, clientId){
      SoundGroundClient.tryToLogin( clientId );
    });
  },

  tryToLogin : function(clientId){
    var disaplyedUrl = window.location.href.split("/"),
        url          = disaplyedUrl[0] + "//" + disaplyedUrl[2];

    SC.initialize({
      client_id: clientId,
      redirect_uri: url +"/callback.html"
    });

    SC.connect(function() {
      SC.get('/me', function(me) {
        alert('Hello, ' + me.username);
      });
    });

  }
});