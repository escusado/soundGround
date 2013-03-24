Class('BsModal').includes(CustomEventSupport)({
  _HTML : '<div class="client-id modal hide fade">\
            <div class="modal-header">\
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
              <h3></h3>\
            </div>\
            <div class="modal-body">\
            </div>\
            <div class="modal-footer">\
              <a href="#" class="btn btn-primary"></a>\
            </div>\
          </div>',

    prototype: {
      init: function(options) {
        var defaults;

        this.element = $(this.constructor._HTML);

        // element collection
        this.header = this.element.find('.modal-header h3');
        this.body   = this.element.find('.modal-body');
        this.button = this.element.find('.modal-footer .btn-primary');

        //defaults
        defaults = {
          content : {
            header : 'Modal Header',
            body   : '<form>\
                        <label>sondCloud Client ID</label>\
                          <input class="client-id" type="text" placeholder="72c6ae4ae439d253d88a81db48ee9e20">\
                      </form>',
            button : 'Ok'
          }
        };

        if(typeof options === 'undefined'){
          options = $.extend(defaults, options);
        }else{
          options = defaults;
        }

        //setup
        this.setContent(options.content);
        this.bindEvents();

      },

      bindEvents: function() {
        var BsModal = this;

        this.button.click(function(){
          BsModal.dispatch('button:click');
        });

      },

      setContent : function(content){
        this.header.html(content.header);
        this.body.html(content.body);
        this.button.html(content.button);
      },

      show : function(){
        this.element.appendTo( $('body') );
        this.element.modal('show');
      },

      getClientId : function(){
        var value = this.body.find('input.client-id').val();
        this.destroy();
        return value;
      },

      destroy : function(){
        var BsModal = this;
        
        this.element.on('hidden', function(){
          BsModal.element.remove();
        });

        this.element.modal('hide');
      }
    }
  });