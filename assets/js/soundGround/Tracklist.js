Class('Tracklist').inherits(Widget)({

    ELEMENT_CLASS : 'track-list',

    HTML : '<ul> </ul>',

    prototype : {

        init : function(tracksData) {
            var trackList = this;

            Widget.prototype.init.call(this, { tracksData : tracksData });

            this.tracks = [];

            this.tracksData.forEach(function(trackData){
                trackList.tracks.push( new TrackMain(trackData).render(trackList.element) );
            });
        }

    }

});