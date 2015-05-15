var React = require('react');

var FormSection = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },

  render: function() {
    return (
      <div className="col-sm-12 chat__form">
        <div className="input-group">
          <input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} className="form-control" placeholder="Mesaj" />
          <span className="input-group-btn">
            <button onClick={this.send} className="btn btn-default" type="button">Gönder</button>
          </span>
        </div>
      </div>
    );
  },

  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  handleKeyDown: function(event) {
    if( event.keyCode == 13 ) {
      this.send();
    }
  },

  handleOnClick: function(event) {
    this.send();
  },

  send: function() {
    if(this.state.value) {
      this.props.addMessage(this.state.value);

      this.setState({
        value: ''
      });
    }
  }
});

module.exports = FormSection;
