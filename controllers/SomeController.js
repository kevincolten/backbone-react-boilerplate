var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
require('backbone.controller');
var SomeListComponent = require('../components/SomeListComponent');
var SomeCollection = require('../collections/SomeCollection');
var SomeModel = require('../models/SomeModel');

module.exports = Backbone.Controller.extend({
  routes: {
    '': 'index',
    '/': 'index'
  },

  initialize: function() {
    this.collection = new SomeCollection();
  },

  index: function() {
    this.collection.add(new SomeModel());
    React.render(<SomeListComponent collection={this.collection} />, $('#content')[0]);
  }
});
