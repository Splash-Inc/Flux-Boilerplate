var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var GroupStore = require('./GroupStore');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _messages = {};

var addMessage = function(msg) {
  var timestamp = Date.now();

  var message = {
    id: 'm_'+ timestamp,
    authorID: msg.authorID,
    date: new Date(timestamp),
    text: msg.text,
    groupID: msg.groupID
  };

  _messages[message.id] = message;
}

var MessageStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllForGroup: function(groupID) {
    var groupMessages = [];

    for(var id in _messages) {
      if(_messages[id].groupID == groupID) {
        groupMessages.push(_messages[id]);
      }
    }

    return groupMessages;
  },

  getAllForCurrentGroup: function() {
    return this.getAllForGroup(GroupStore.getCurrentID());
  },

  getAll: function(){
    var messageArray = [];

    for(var id in _messages) {
      messageArray.push(_messages[id]);
    }

    return messageArray;
  },
});

MessageStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.ADD_MESSAGE:
      var message = action.message;
      addMessage(message);
      MessageStore.emit(CHANGE_EVENT);
      break;
  }
});

module.exports = MessageStore;
