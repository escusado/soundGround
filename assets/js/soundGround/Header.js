Class('Header').inherits(Widget)({

    ELEMENT_CLASS : 'header-wrapper',

    HTML : '<div> </div>',

    prototype : {

        init : function() {
            Widget.prototype.init.call(this);

            console.log('Init header!');

        }

    }

});