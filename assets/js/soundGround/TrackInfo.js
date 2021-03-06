Class('TrackInfo').inherits(Widget)({

    ELEMENT_CLASS : 'unit columns on-3 same-height track',

    HTML : '<div>\
              <div class="fixed column cover-art-wrapper">\
                <div class="cover-art"></div>\
                <div class="cover-art-bezel"></div>\
              </div>\
              <div class="elastic column info-wrapper">\
                <input type="text" class="full-width track-artist">\
                <input type="text" class="full-width track-name">\
              </div>\
              <div class="fixed column track-controls"></div>\
    </div>',

    prototype : {

        init : function(trackData) {
            Widget.prototype.init.call(this, { trackData : trackData });

            this.coverArt      = this.element.find('.cover-art');
            this.trackArtist   = this.element.find('.track-artist');
            this.trackName     = this.element.find('.track-name');
            this.trackControls = this.element.find('.track-controls');

            this.queueButton = new TrackHeaderButton({
                class : 'queue',
                icon  : 'icon-cloud-download'
            });

            this.unfoldButton = new TrackHeaderButton({
                class : 'unfold-editor',
                icon  : 'icon-pencil'
            });

            // render info
            this.setData({
                trackName     : this.trackData.user.username,
                trackArtist   : this.trackData.title,
                trackCoverArt : this.trackData.artwork_url
            });

            // render controls
            this.queueButton.render( this.trackControls );
            this.unfoldButton.render( this.trackControls );
        },

        setData : function( data ){
            this.trackArtist.val( data.trackArtist );
            this.trackName.val( data.trackName );
            this.coverArt.css({
                backgroundImage : 'url('+data.trackCoverArt+')'
            });
        }

    }

});