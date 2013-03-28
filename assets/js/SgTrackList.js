Class('SgTrackList')({
  setup: function(tracklist) {

   this.trackPool = [];
   
   this.element = $('.tracklist');

   this.buildTracklist(tracklist);

  },

  buildTracklist : function(tracklist){
    var SgTrackList = this;

    _.each(tracklist, function(el, i){
      SgTrackList.addTrack( new SgTrack(el) );
    });

    Elastic.refresh();
  },

  addTrack : function(trackInstance){
    this.trackPool.push(trackInstance);
    this.element.append(trackInstance.element);
  }
});