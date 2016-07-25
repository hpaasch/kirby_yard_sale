var React = require('react');
var router = require('../router');
var ProfileCollection = require('../models/profile').ProfileCollection;



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
        <div className="col s8 offset-s2">
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCreateProfile}>Update Profile</button>
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCreateYardSale}>Create YardSale</button>
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleYardSale}>YardSale</button>
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleSales}>Your Sales</button>
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCart}>Your Cart</button>
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handlePDP}>PDP</button>

        </div>
        <div className="col s8 offset-s2">
          <ProfileList />
        </div>
        <div className="col s8 offset-s2">
          <button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleGoHome}>Home</button>
        </div>
      </div>
    )
  }
});

var ProfileList = React.createClass({
  getInitialState: function(){
    console.log("IS THIS HAPPENING?")

    return {
      listOfProfiles: []
    }
  },
  componentWillMount: function(){
    console.log("IS THIS HAPPENING?")
    var listOfProfiles = new ProfileCollection();

    listOfProfiles.fetch().done(() => {
      this.setState({
        'listOfProfiles': listOfProfiles
      });
    });

  },
  render: function(){
    var profiles = this.state.listOfProfiles;
console.log("IS THIS HAPPENING?")
    var profileList = profiles.map(function(profile, index){
      console.log("IS THIS HAPPENING?")
      return(
        <li key={index}>{profile.get('first_name') + ' '}{profile.get('last_name')}</li>
      );
    });
    return(
      <div>
        <ul>
          {profileList}
        </ul>
      </div>
    )
  }
});

module.exports = ProfileComponent;
