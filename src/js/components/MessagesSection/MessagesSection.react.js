var React = require('react');

var GroupsBox = require('./Groups.react');
var MessageList = require('./MessageList.react');

var MessagesSection = React.createClass({
  render: function() {
    return (
      <div className="col-sm-8">
        <GroupsBox />
        <MessageList messages={this.props.messages} />
      </div>
    );
  }
});

module.exports = MessagesSection;
