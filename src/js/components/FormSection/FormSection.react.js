var React = require('react');

var FormSection = React.createClass({
  render: function() {
    return (
      <div className="col-sm-12 chat__form">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Mesaj" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Gönder</button>
          </span>
        </div>
      </div>
    );
  }
});

module.exports = FormSection;
