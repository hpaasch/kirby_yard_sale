var React = require('react');


var CartComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Cart</h3>
      </div>
    )
  }
});

module.exports = CartComponent;
