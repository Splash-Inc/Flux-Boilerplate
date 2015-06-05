import React from 'react';
import MessagesSection from './MessagesSection/MessagesSection.react';
import UsersSection from './UsersSection/UsersSection.react';
import FormSection from './FormSection/FormSection.react';
import AppActions from '../actions/AppActions';
import UserStore from '../stores/UserStore';

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
