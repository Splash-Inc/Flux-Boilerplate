var React = require('react');

var UserItem = React.createClass({
  render: function() {
    return (
      <a href="#" onClick={this.props.clickUser} className="list-group-item /*list-group-item-warning*/">
        <span className="badge">0</span>
        {this.props.name}
      </a>
    );
  }
});

module.exports = UserItem;
