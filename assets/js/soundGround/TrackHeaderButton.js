Class('TrackHeaderButton').inherits(Widget)({

    ELEMENT_CLASS : 'button',

    HTML : '<div>\
                <i class="icon"></i>\
            </div>',

    prototype : {

        init : function(config) {
            Widget.prototype.init.call(this, { config : config });

            this.element.addClass( this.config.class );
            this.element.find('.icon').addClass(this.config.icon);

        }

    }

});