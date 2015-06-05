import React from 'react';
import GroupItem from './Group.react';
import GroupStore from '../../stores/GroupStore';
import AppActions from '../../actions/AppActions';

var GroupsBox = React.createClass({
  getInitialState: function() {
    return {
      groups: GroupStore.getAll()
    }
  },

  componentDidMount: function() {
    GroupStore.addChangeListener(this.onGroupsChange);
  },

  componentWillUnmount: function() {
    GroupStore.removeChangeListener(this.onGroupsChange);
  },

  onGroupsChange: function() {
    this.setState({
      groups: GroupStore.getAll()
    });
  },

  render: function() {
    var groupListItems = this.state.groups.map(function(group) {
      return (
        <GroupItem key={group.id} group={group} clickGroup={this.clickGroup} activeGroup={GroupStore.getCurrentID()} />
      );
    }, this);

    return (
      <ul className="nav nav-tabs nav-justified">
        {groupListItems}
        <li><a href="#" onClick={this._addGroup}><i className="glyphicon glyphicon-plus"></i> Grup ekle</a></li>
      </ul>
    );
  },

  _addGroup: function(event) {
    event.preventDefault();
    var groupName = prompt('Group Name:');
    if(groupName)
      AppActions.addGroup(groupName);
  }
});

module.exports = GroupsBox;
