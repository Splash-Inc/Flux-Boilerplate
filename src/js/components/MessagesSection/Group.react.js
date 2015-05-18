var React = require('react');
var AppActions = require('../../actions/AppActions');

var GroupItem = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    this.props.clickGroup(this.key);
  },

  clickGroup: function(event) {
    event.preventDefault();
    AppActions.clickGroup(this.props.group.id);
  },

  render: function() {
    var active = this.props.activeGroup==this.props.group.id ? 'active' : '';

    return (
      <li className={active}>
        <a href="#" onClick={this.clickGroup}>{this.props.group.groupName}</a>
      </li>
    );
  }
});

module.exports = GroupItem;
