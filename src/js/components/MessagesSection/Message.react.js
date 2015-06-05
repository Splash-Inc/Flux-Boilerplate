import React from 'react';

var MessageItem = React.createClass({
  getInitialState: function() {
    return {
      message: this.props.message
    }
  },
  render: function() {
    return (
      <li href="#" className="list-group-item">
        <h5 className="list-group-item-heading">{this.props.user}:</h5>
        <p onClick={this.props.onEdit.bind(null, this)} className="list-group-item-text">
          {this.state.message}
        </p>
      </li>
    );
  }
});

module.exports = MessageItem;
