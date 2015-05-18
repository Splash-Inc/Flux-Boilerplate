var React = require('react');
var MessageItem = require('./Message.react');
var GroupStore = require('../../stores/GroupStore');
var MessageStore = require('../../stores/MessageStore');
var UserStore = require('../../stores/UserStore');

var MessageList = React.createClass({
  getInitialState: function() {
    return {
      messages: MessageStore.getAllForCurrentGroup()
    }
  },

  componentDidMount: function() {
    MessageStore.addChangeListener(this.onMessagesChange);
    GroupStore.addChangeListener(this.onGroupsChange);
  },

  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this.onMessagesChange);
    GroupStore.removeChangeListener(this.onGroupsChange);
  },

  onMessagesChange: function() {
    this.setState({
      messages: MessageStore.getAllForCurrentGroup()
    });
  },

  onGroupsChange: function() {
    this.setState({
      messages: MessageStore.getAllForCurrentGroup()
    });
  },

  render: function() {
    var messageListItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} user={UserStore.getForOne(message.authorID).userName} message={message.text} />
      );
    });

    return (
      <div className="chat__messages">
        <ul className="list-group">
          {messageListItems}
        </ul>
      </div>
    );
  }
});

module.exports = MessageList;
