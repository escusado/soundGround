SGC = Class('SoundGroundClient')({
  _v : 'a',
  
  setup : function (ev) {

    var disaplyedUrl = window.location.href.split("/"),
        url          = disaplyedUrl[0] + "//" + disaplyedUrl[2];

    console.log('>', url +"/callback.html");

    SC.initialize({
      client_id: "72c6ae4ae439d253d88a81db48ee9e20",
      redirect_uri: url +"/callback.html"
    });

    SC.connect(function() {
      
      SC.get('/me', function(me) {
        alert('Hello, ' + me.username);
      });

    });

  }
});