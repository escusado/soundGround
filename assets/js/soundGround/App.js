window.soundGround = {
    start : function(){
        //get ID

        var app = new Controller({
            trackData : window.dummy
        });

        app.render($('.wrapper'));
    }
};