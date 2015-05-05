var React = require('react');

var UserItem = require('./User.react');

var UsersSection = React.createClass({
  render: function() {
    return (
      <div className="col-sm-4">
        <div className="panel panel-default chat__users">
          <div className="panel-heading">
            <h3 className="panel-title">Kullanıcılar:</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <UserItem />
              <UserItem />
              <UserItem />
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UsersSection;
