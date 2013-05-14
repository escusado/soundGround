Class('TrackMain').inherits(Widget)({

    ELEMENT_CLASS : '',

    HTML : '<li> </li>',

    prototype : {

        init : function(trackData) {
            Widget.prototype.init.call(this, { trackData : trackData });

            this.trackInfo = new TrackInfo( this.trackData );

            this.trackInfo.render(this.element);

        }

    }

});