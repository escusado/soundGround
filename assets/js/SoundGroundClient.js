SGC = Class('SoundGroundClient')({
  _v : 'a',
  setup : function (ev) {
    //get client ID
    this.clientIdModal = new BsModal();
    this.clientIdModal.show();

    this.bindEvents();
  },

  bindEvents : function(){
    var SoundGroundClient = this;

    this.clientIdModal.bind('button:click', function(e, data){
      SoundGroundClient.tryToLogin( SoundGroundClient.clientIdModal.getClientId() );
    });
  },

  tryToLogin : function(clientId){
    var disaplyedUrl = window.location.href.split("/"),
        url          = disaplyedUrl[0] + "//" + disaplyedUrl[2];

    console.log('>', clientId);

    // SC.initialize({
    //   client_id: "72c6ae4ae439d253d88a81db48ee9e20",
    //   redirect_uri: url +"/callback.html"
    // });

    // SC.connect(function() {
    //   SC.get('/me', function(me) {
    //     alert('Hello, ' + me.username);
    //   });

    // }); 
  }
});