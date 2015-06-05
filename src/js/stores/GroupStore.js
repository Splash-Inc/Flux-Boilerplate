import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

var _groups = {
  0: {
    id: 'default',
    groupName: 'First Group'
  }
};
var _currentID = 'default';

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

  get: function(id) {
    return _groups[id];
  },

  getAll: function() {
    var groupArray = [];

    for(var id in _groups) {
      groupArray.push(_groups[id]);
    }

    return groupArray;
  },

  getCurrentID: function() {
    return _currentID;
  },

  getCurrent: function() {
    return this.get(this.getCurrentID());
  }
});

GroupStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    case AppConstants.ADD_GROUP:
      addGroup(action.groupName);
      GroupStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.CLICK_GROUP:
      _currentID = action.groupId;
      GroupStore.emit(CHANGE_EVENT);
      break;

  }
});

module.exports = GroupStore;
