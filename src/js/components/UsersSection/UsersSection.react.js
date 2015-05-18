var React = require('react');
var UserItem = require('./User.react');
var UserStore = require('../../stores/UserStore');

var UsersSection = React.createClass({
  getInitialState: function() {
    return {
      users: UserStore.getAll()
    }
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this.onUsersChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this.onUsersChange);
  },

  onUsersChange: function() {
    this.setState({
      users: UserStore.getAll()
    })
  },

  render: function() {
    var userListItems = this.state.users.map(function(user) {
      return (
        <UserItem key={user.id} name={user.userName} />
      );
    });

    return (
      <div className="col-sm-4">
        <div className="panel panel-default chat__users">
          <div className="panel-heading">
            <h3 className="panel-title">Kullanıcılar:</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {userListItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UsersSection;
