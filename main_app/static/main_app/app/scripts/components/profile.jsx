var React = require('react');
var router = require('../router');


var ProfileComponent = React.createClass({
  handleYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#yardsale/', {trigger: true});
  },
  handleSales: function(e){
    e.preventDefault();
    this.props.router.navigate('#sales/', {trigger: true});
  },
  handleCart: function(e){
    e.preventDefault();
    this.props.router.navigate('#cart/', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <h1>Profile</h1>
        <button className="waves-effect waves-light btn" onClick={this.handleYardSale}>YardSale</button>
        <button className="waves-effect waves-light btn" onClick={this.handleSales}>Your Sales</button>
        <button className="waves-effect waves-light btn" onClick={this.handleCart}>Your Cart</button>
      </div>
    )
  }
});

module.exports = ProfileComponent;
