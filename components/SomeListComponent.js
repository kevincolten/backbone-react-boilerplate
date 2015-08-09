var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var SomeItemComponent = require('./SomeItemComponent');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function() {
    var someItemComponents = this.state.collection.map(function(someItem) {
      return <SomeItemComponent model={someItem} />
    });

    return (
      <div>
        {someItemComponents}
      </div>
    );
  }
});
