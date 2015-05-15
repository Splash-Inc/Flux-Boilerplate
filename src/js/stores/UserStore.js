var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _users = {};

var addUser = function(userName) {
  var timestamp = Date.now();

  var user = {
    id: 'm_'+ timestamp,
    userName: userName,
  };

  _users[user.id] = user;
}

var UserStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll: function(){
    var userArray = [];

    for(var id in _users) {
      userArray.push(_users[id]);
    }

    return userArray;
  },
});

UserStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.ADD_USER:
      addUser(action.userName);
      UserStore.emit(CHANGE_EVENT);
      break;
  }
});

module.exports = UserStore;
