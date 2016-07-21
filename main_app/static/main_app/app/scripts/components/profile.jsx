var React = require('react');
var router = require('../router');
var ProfileCollection = require('../models/profile').ProfileCollection;



var ProfileComponent = React.createClass({
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
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Your Profile</h3>
        <div className="col s8 offset-s2">
          <button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleCreateProfile}>Create Profile</button>
          <button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleCreateYardSale}>Create YardSale</button>
          <button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleYardSale}>YardSale</button>
          <button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleSales}>Your Sales</button>
          <button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleCart}>Your Cart</button>
        </div>
        <div className="col s8 offset-s2">
          <ProfileList />
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
        <li key={index}>{profile.get('first_name')}</li>
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
