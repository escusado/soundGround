Class('Controller').inherits(Widget)({

    ELEMENT_CLASS : 'app-wrapper',

    HTML : '<div> </div>',

    prototype : {

        init : function(config) {
            Widget.prototype.init.call(this, { config : config });

            this.header = new Header();
            this.body   = new Body( this.config );
            this.footer = new Footer();

            this.header.render(this.element);
            this.body.render(this.element);
            this.footer.render(this.element);

            Elastic.refresh();
        }

    }

});