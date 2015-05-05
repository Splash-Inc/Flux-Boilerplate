var React = require('react');

var UserItem = React.createClass({
  render: function() {
    return (
      <a href="#" className="list-group-item /*list-group-item-warning*/">
        <span className="badge">{~~(Math.random() * 100)}</span>
        User {~~(Math.random() * 10)}
      </a>
    );
  }
});

module.exports = UserItem;
