Class('SgTrack')({
  _HTML : '<li class="unit columns on-3 same-height track">\
              <div class="fixed column sync-gutter">\
                <input type="checkbox" class="sync-check">\
              </div>\
              <div class="fixed column cover-art" style="background-image : url(\'<%= track.artwork_url %>\')"></div>\
              <div class="elastic column data-wrapper">\
                <div class="data">\
                  <input type="text" class="artist-name" value="<%= track.user.username %>" >\
                  <div class="unit columns on-2">\
                    <div class="elastic column">\
                      <input type="text" class="track-name" value="<%= track.title %>" >\
                    </div>\
                    <div class="fixed column genre-input">\
                      <input type="text" class="track-genre" value="<%= track.genre %>" >\
                    </div>\
                  </div>\
                </div>\
              </div>\
          </li>',

    prototype: {
      init: function(trackData) {
        var defaults;

        this.element = $( _.template(this.constructor._HTML, {track: trackData}) );

        // element collection
        console.log(trackData);

        this.bindEvents();

        return this;
      },

      bindEvents: function() {
        var BsModal = this;


      },

      show : function(){

      },

      destroy : function(){

      }
    }
  });