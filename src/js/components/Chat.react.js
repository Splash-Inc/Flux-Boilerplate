var React = require('react');

var AppActions = require('../actions/AppActions');

var MessagesSection = require('./MessagesSection/MessagesSection.react');
var UsersSection = require('./UsersSection/UsersSection.react');
var FormSection = require('./FormSection/FormSection.react');

var Chat = React.createClass({

  render: function() {
    return (
      <div className="container chat">
        <div className="row">
          <MessagesSection />
          <UsersSection />
          <FormSection addMessage={this._addMessage}/>
        </div>
      </div>
    );
  },

  _addMessage: function(message) {
    AppActions.addMessage(message);
  }
});

module.exports = Chat;
