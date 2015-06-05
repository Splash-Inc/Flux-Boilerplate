import React from 'react';
import AppActions from '../../actions/AppActions';
import GroupStore from '../../stores/GroupStore';

var FormSection = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },

  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  handleKeyDown: function(event) {
    if( event.keyCode == 13 ) {
      this._sendMessage();
    }
  },

  handleOnClick: function(event) {
    this._sendMessage();
  },

  render: function() {
    return (
      <div className="col-sm-12 chat__form">
        <div className="input-group">
          <input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} className="form-control" placeholder="Mesaj" />
          <span className="input-group-btn">
            <button onClick={this._sendMessage} className="btn btn-default" type="button">Send</button>
          </span>
        </div>
      </div>
    );
  },

  _sendMessage: function() {
    if(this.state.value) {
      AppActions.addMessage({
        text: this.state.value,
        groupID: GroupStore.getCurrentID(),
        authorID: this.props.user
      });

      this.setState({
        value: ''
      });
    }
  }
});

module.exports = FormSection;
