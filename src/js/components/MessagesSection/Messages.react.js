var React = require('react');

var MessageItem = require('./Message.react');

var MessagesBox = React.createClass({
  getInitialStates: function() {
    return {
      message: this.props.message
    }
  },
  render: function() {
    return (
      <div className="chat__messages">
        <ul className="list-group">
          <MessageItem user="user 1" />
          <MessageItem user="user 2" />
        </ul>
      </div>
    );
  }
});

module.exports = MessagesBox;
