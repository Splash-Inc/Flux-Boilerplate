var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');


var AppActions = {
  addMessage: function(message) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_MESSAGE,
      message: message
    });
  },

  removeMessage: function(index) {
    AppDispatcher.handleAction({
      actionType: AppConstants.REMOVE_MESSAGE,
      index: index
    });
  },

  addGroup: function(groupName) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_GROUP,
      groupName: groupName
    });
  },

  removeGroup: function(index) {
    AppDispatcher.handleAction({
      actionType: AppConstants.REMOVE_GROUP,
      index: index
    });
  },

  clickGroup: function(groupId) {
    AppDispatcher.handleAction({
      actionType: AppConstants.CLICK_GROUP,
      groupId: groupId
    });
  },

  addUser: function(userName) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_USER,
      userName: userName
    });
  },

  removeUser: function(index) {
    AppDispatcher.handleAction({
      actionType: AppConstants.REMOVE_USER,
      index: index
    });
  }
};

module.exports = AppActions;
