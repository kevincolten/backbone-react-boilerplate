'use strict';

var Backbone = require('backbone');
var SomeController = require('./controllers/SomeController');

var Application = Backbone.Router.extend({
  controllers: {},

  initialize: function() {
    this.controllers.SomeController = new SomeController({router: this});
    Backbone.history.start();
  }
});

window.app = new Application();
