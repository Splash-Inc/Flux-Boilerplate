var React = require('react');

var GroupsBox = require('./Groups.react');
var MessagesBox = require('./Messages.react');

var MessagesSection = React.createClass({
  render: function() {
    return (
      <div className="col-sm-8">
        <GroupsBox />
        <MessagesBox messages="Message 1" />
      </div>
    );
  }
});

module.exports = MessagesSection;
