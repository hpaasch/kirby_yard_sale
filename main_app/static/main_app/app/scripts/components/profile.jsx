var React = require('react');
var router = require('../router');
var $ = require('jquery');



var ProfileComponent = React.createClass({
  // componentWillMount: function(){
  //   var newUser = new User();
  //
  //   // this.setState({
  //   //   'me': newUser.currentuser()
  //   // });
  // },
  handleYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#yardsale/', {trigger: true});
  },
  handleCreateProfile: function(e){
    e.preventDefault();
    this.props.router.navigate('#createprofile/', {trigger: true});
  },
  handleSales: function(e){
    e.preventDefault();
    this.props.router.navigate('#sales/', {trigger: true});
  },
  handleCart: function(e){
    e.preventDefault();
    this.props.router.navigate('#cart/', {trigger: true});
  },
  handleCreateYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#create/', {trigger: true});
  },
  handlePDP: function(e){
    e.preventDefault();
    this.props.router.navigate('#hope/', {trigger: true});
  },
  handleGoHome: function(e){
    e.preventDefault();
    this.props.router.navigate('', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel col s8 offset-s2">Your Profile</h3>
        <dl className="col s8 offset-s2">
          <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCreateProfile}>Update Profile</button></dd>
          <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCreateYardSale}>Create YardSale</button></dd>
          <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleYardSale}>YardSale</button></dd>
          <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleSales}>Your Sales</button></dd>
          <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCart}>Your Cart</button></dd>
        </dl>
        <div className="col s8 offset-s2">
        </div>
        <div className="col s8 offset-s2">
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleGoHome}>Home</button>
        </div>
      </div>
    )
  }
});


module.exports = ProfileComponent;
