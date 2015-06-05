import React from 'react';
import MessageItem from './Message.react';
import GroupStore from '../../stores/GroupStore';
import MessageStore from '../../stores/MessageStore';
import UserStore from '../../stores/UserStore';

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

  handleEdit: function(childElement) {
    childElement.setState({
      message: "TESTING"
    })
  },

  render: function() {
    var messageListItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} user={UserStore.getForOne(message.authorID).userName} onEdit={this.handleEdit} message={message.text} />
      );
    }, this);

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
