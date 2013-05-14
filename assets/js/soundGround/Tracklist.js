Class('Tracklist').inherits(Widget)({

    ELEMENT_CLASS : 'track-list',

    HTML : '<ul> </ul>',

    prototype : {

        init : function(trackList) {
            Widget.prototype.init.call(this, { trackList : trackList });

            this.track = new TrackMain(this.trackList[0]);
            this.track.render(this.element);
        }

    }

});