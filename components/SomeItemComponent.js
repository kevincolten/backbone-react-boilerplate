var Backbone = require('backbone')
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function () {
    return (
      <div>
        <h1>{this.props.model.text}</h1>
      </div>
    );
  }
});