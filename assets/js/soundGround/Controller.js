Class('Controller').inherits(Widget)({

    ELEMENT_CLASS : 'app-wrapper',

    HTML : '<div> </div>',

    prototype : {

        init : function(config) {
            Widget.prototype.init.call(this, { config : config });

        }

    }

});