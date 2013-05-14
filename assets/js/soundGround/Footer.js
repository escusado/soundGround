Class('Footer').inherits(Widget)({

    ELEMENT_CLASS : 'footer-wrapper',

    HTML : '<div> </div>',

    prototype : {

        init : function() {
            Widget.prototype.init.call(this);

            console.log('Init footer!');

        }

    }

});