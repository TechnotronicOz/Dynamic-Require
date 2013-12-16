define(
  ['underscore', 'jquery'],
  function(_, $){
    var module = {};

    function loadModule(domElement) {
      console.log('loadModule', domElement);
      var element = $(domElement),
        moduleName = element.data('features');

      require([moduleName.module], function(module) {
        if ( module && typeof module.init === 'function' ) {
          return module.init(element);
        }
      });
    }

    module.execute = function(element) {
      var element = element || $('html'),
        dataModules = $('[data-features]', element);
      _.each(dataModules, loadModule);
    };

    return module;
  }
);