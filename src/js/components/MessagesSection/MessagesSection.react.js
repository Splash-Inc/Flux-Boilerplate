var React = require('react');

var GroupList = require('./GroupList.react');
var MessageList = require('./MessageList.react');

var MessagesSection = React.createClass({
  render: function() {
    return (
      <div className="col-sm-8">
        <GroupList />
        <MessageList />
      </div>
    );
  }
});

module.exports = MessagesSection;
