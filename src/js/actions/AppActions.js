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

  addGroup: function(group) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_GROUP,
      message: group
    });
  },
  removeGroup: function(index) {
    AppDispatcher.handleAction({
      actionType: AppConstants.REMOVE_GROUP,
      index: index
    });
  },

  addUser: function(user) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_USER,
      message: user
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
