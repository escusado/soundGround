Class('SgTrack')({
  _HTML : '<li class="unit columns on-3 same-height track">\
              <div class="fixed column sync-gutter">\
                <input type="checkbox" class="sync-check">\
              </div>\
              <div class="fixed column cover-art" style="background-image : url(\'<%= track.artwork_url %>\')"></div>\
              <div class="elastic column data-wrapper">\
                <div class="data">\
                  <input type="text" class="artist-name" value="Glafouk" >\
                  <input type="text" class="track-name" value="Glafouk - SID errance - FunkiBlopMisque" >\
                </div>\
              </div>\
          </li>',

    prototype: {
      init: function(trackData) {
        var defaults;

        this.element = $( _.template(this.constructor._HTML, {track: trackData}) );

        // element collection

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