var React = require('react');

var GroupItem = React.createClass({
  render: function() {
    return (
      <li role="presentation" className="active">
        <a href="#">{this.props.name}</a>
      </li>
    );
  }
});

module.exports = GroupItem;
