Class('TrackInfo').inherits(Widget)({

    ELEMENT_CLASS : 'unit columns on-3 same-height track',

    HTML : '<div>\
              <div class="fixed column cover-art-wrapper">\
                <div class="cover-art"></div>\
                <div class="cover-art-bezel"></div>\
              </div>\
              <div class="elastic column info-wrapper">\
                <div class="track-artist">Artist Name</div>\
                <div class="track-name">Track Name</div>\
              </div>\
              <div class="fixed column track-controls"></div>\
    </div>',

    prototype : {

        init : function(config) {
            Widget.prototype.init.call(this, { config : config });

            this.coverArt      = this.element.find('.cover-art');
            this.trackName     = this.element.find('.track-name');
            this.trackArtist   = this.element.find('.track-artist');
            this.trackControls = this.element.find('.track-controls');

            this.queueButton = new TrackHeaderButton({
                class : 'queue',
                icon  : 'icon-cloud-download'
            });

            this.unfoldButton = new TrackHeaderButton({
                class : 'unfold-editor',
                icon  : 'icon-pencil'
            });

            this.queueButton.render(this.trackControls);
            this.unfoldButton.render(this.trackControls);
        }

    }

});