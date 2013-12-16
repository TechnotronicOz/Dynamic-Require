define(
  ['react', 'helpers/events'],
  function(React, Events) {

    'use strict';

    function Func(el) {
      this.$el = el;
    }

    Func.prototype = {
      initialize: function() {
        this.$el.addClass('poop');

        Events.on('window:resize', function(size) {
          console.log('Events on window:resize', size);
        });

        //console.log('React', React);
      }
    };

    return {
      init: function(el) {
        var module = new Func(el);
        module.initialize();
      }
    };
  }
);