require.config({
  paths: {
    jquery: '../bower_components/jquery2/jquery.min',
    bootstrap: 'vendor/bootstrap',
    underscore: '../bower_components/underscore/underscore-min',
    domReady: '../bower_components/requirejs-domready/domReady',
    backbone: '../bower_components/backbone-amd/backbone-min',
    react: '../bower_components/react/react.min'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'backbone'
    }
  }
});