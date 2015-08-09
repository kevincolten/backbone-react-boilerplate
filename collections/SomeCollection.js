var Backbone = require('backbone');
var SomeModel = require('../models/SomeModel');

module.exports = Backbone.Collection.extend({
  model: SomeModel
});
