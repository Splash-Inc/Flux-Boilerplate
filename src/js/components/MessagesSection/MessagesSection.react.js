import React from 'react';
import GroupList from './GroupList.react';
import MessageList from './MessageList.react';

var MessagesSection = React.createClass({
  render: function() {
    return (
      <div className="col-sm-8">
        <GroupList />
        <MessageList />
      </div>
    );
  }
});

module.exports = MessagesSection;
