var React = require('react');

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
          <FormSection />
        </div>
      </div>
    );
  }
});

module.exports = Chat;
