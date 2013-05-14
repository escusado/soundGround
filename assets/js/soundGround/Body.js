Class('Body').inherits(Widget)({

    ELEMENT_CLASS : 'body-wrapper',

    HTML : '<div> </div>',

    prototype : {

        init : function(config) {
            Widget.prototype.init.call(this, { config : config });

            this.tracklist = new Tracklist( this.config.trackData );

            this.tracklist.render(this.element);
        }

    }

});