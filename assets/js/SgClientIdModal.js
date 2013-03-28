Class('SgClientIdModal')({
  _HTML : '<div class="client-id modal hide fade">\
            <div class="modal-header">\
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
              <h3>Sup!, paste your soundcloud client ID</h3>\
            </div>\
            <div class="modal-body">\
              <form>\
                <input class="client-id" type="text" placeholder="72c6ae4a............b48ee9e20">\
              </form>\
            </div>\
            <div class="modal-footer">\
              <span class="pull-left">Get it <a href="http://soundcloud.com/you/apps">here.</a> </span>\
              <a href="#" class="btn btn-primary">Ok cool, let\'s do this!</a>\
            </div>\
          </div>',

    prototype: {
      init: function(options) {
        var defaults;

        this.element = $(this.constructor._HTML);

        // element collection
        this.clientIdInput   = this.element.find('input.client-id');
        this.button = this.element.find('.modal-footer .btn-primary');

        this.bindEvents();

      },

      bindEvents: function() {
        var SgClientIdModal = this;

        this.button.click(function(){
          SgClientIdModal.element.trigger('modal:button:click', SgClientIdModal.clientIdInput.val());
          SgClientIdModal.destroy();
        });

      },

      show : function(){
        this.element.appendTo( $('body') );
        this.element.modal('show');
      },

      destroy : function(){
        var SgClientIdModal = this;

        this.element.on('hidden', function(){
          SgClientIdModal.element.remove();
        });

        this.element.modal('hide');
      }
    }
  });