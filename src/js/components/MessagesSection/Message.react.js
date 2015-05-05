var React = require('react');

var MessageItem = React.createClass({
  render: function() {
    return (
      <li href="#" className="list-group-item">
        <h5 className="list-group-item-heading">{this.props.user}:</h5>
        <p className="list-group-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          cumque dolorum iure reiciendis sapiente laborum nostrum veritatis
          saepe totam, non molestias ducimus quidem qui dolore enim fugiat
          accusamus excepturi pariatur!
        </p>
      </li>
    );
  }
});

module.exports = MessageItem;
