var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _messages = {};

var addMessage = function(text) {
  var timestamp = Date.now();

  var message = {
    id: 'm_'+ timestamp,
    authorName: 'Gork', // Hardcode for now
    date: new Date(timestamp),
    text: text
  };

  _messages[message.id] = message;
}

var MessageStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
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
      addMessage(action.message);
      MessageStore.emit(CHANGE_EVENT);
      break;
  }
});

module.exports = MessageStore;
