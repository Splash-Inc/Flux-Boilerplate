var React = require('react');

var MessagesSection = require('./MessagesSection/MessagesSection.react');
var UsersSection = require('./UsersSection/UsersSection.react');
var FormSection = require('./FormSection/FormSection.react');
var AppActions = require('../actions/AppActions');

var UserStore = require('../stores/UserStore');


var Chat = React.createClass({
  componentWillMount: function() {
    var userName = prompt('User name:');
    AppActions.addUser(userName);
  },

  render: function() {
    return (
      <div className="container chat">
        <div className="row">
          <MessagesSection />
          <UsersSection />
          <FormSection user={UserStore.getCurrentID()} />
        </div>
      </div>
    );
  }
});

module.exports = Chat;
