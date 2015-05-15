var React = require('react');

var MessageItem = require('./Message.react');
var MessageStore = require('../../stores/MessageStore');

var MessageList = React.createClass({
  getInitialState: function() {
    return {
      messages: MessageStore.getAll()
    }
  },

  componentDidMount: function() {
    MessageStore.addChangeListener(this.onMessagesChange);
  },

  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this.onMessagesChange);
  },

  onMessagesChange: function() {
    this.setState({
      messages: MessageStore.getAll()
    })
  },

  render: function() {
    var messageListItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} user={message.authorName} message={message.text} />
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
