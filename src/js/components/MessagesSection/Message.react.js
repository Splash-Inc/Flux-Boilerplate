var React = require('react');

var MessageItem = React.createClass({
  render: function() {
    return (
      <li href="#" className="list-group-item">
        <h5 className="list-group-item-heading">{this.props.user}:</h5>
        <p className="list-group-item-text">
          {this.props.message}
        </p>
      </li>
    );
  }
});

module.exports = MessageItem;
