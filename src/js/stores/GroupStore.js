var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _groups = {};

var addGroup = function(groupName) {
  var timestamp = Date.now();

  var group = {
    id: 'm_'+ timestamp,
    groupName: groupName
  };

  _groups[group.id] = group;
}

var GroupStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll: function(){
    var groupArray = [];

    for(var id in _groups) {
      groupArray.push(_groups[id]);
    }

    return groupArray;
  },
});

GroupStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.ADD_GROUP:
      addGroup(action.groupName);
      GroupStore.emit(CHANGE_EVENT);
      break;
  }
});

module.exports = GroupStore;
