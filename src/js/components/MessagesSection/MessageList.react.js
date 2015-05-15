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
    MessageStore.addChangeListener(this._onMessagesChange);
  },

  componentWillUnmount: function() {
    MessageStore.removeChangeListener(this._onMessagesChange);
  },

  getInitialStates: function() {
    return {
      messages: this.props.messages
    }
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
  },

  _onMessagesChange: function() {
    this.setState({
      messages: MessageStore.getAll()
    })
  }
});

module.exports = MessageList;
