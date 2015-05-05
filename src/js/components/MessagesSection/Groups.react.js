var React = require('react');

var GroupItem = require('./Group.react');

var GroupsBox = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-tabs nav-justified">
        <GroupItem name="grup 1" />
        <li role="presentation"><a href="#"><i className="glyphicon glyphicon-plus"></i> Grup ekle</a></li>
      </ul>
    );
  }
});

module.exports = GroupsBox;
