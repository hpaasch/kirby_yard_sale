var React = require('react');
var router = require('../router');
var User = require('../models/user').User;
var LocationComponent2 = require('../components/locations.jsx').LocationComponent2;
var LocationCollection = require('../models/location').LocationCollection;



var SignUpComponent = React.createClass({
  getInitialState: function(){
    return {
      'email_address': '',
       'password': '',
       'username': '',
       'first_name': '',
       'last_name': '',
       'photo': '',
       'location': '',
       listOfLocations: []
     }
  },
  componentWillMount: function(){
    var listOfLocations = new LocationCollection();

    listOfLocations.fetch().done(() => {
      this.setState({
        'listOfLocations': listOfLocations
      });
    });

  },
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var email_address = this.state.email_address;
    var username = this.state.email_address;
    var password = this.state.password;
    var first_name = this.state.first_name;
    var last_name = this.state.last_name;
    var photo = this.state.photo;
    var location = this.state.location;


    var newUser = new User();
    newUser.set({
      'email_address': email_address,
      'password': password,
      'first_name': first_name,
      'last_name': last_name,
      'photo': photo,
      'username': username,
      'location': location
    });

    newUser.register().done(function(){
      self.props.router.navigate('#login/', {trigger: true});
    });
  },
  handleNameChange: function(e){
    e.preventDefault();
    this.setState({
      'email_address': e.target.value
    });
  },
  handlePasswordChange: function(e){
    e.preventDefault();
    this.setState({
      'password': e.target.value
    });
  },
  handleFirstNameChange: function(e){
    e.preventDefault();
    this.setState({
      'first_name': e.target.value
    });
  },
  handleLastNameChange: function(e){
    e.preventDefault();
    this.setState({
      'last_name': e.target.value
    });
  },
  handlePhotoChange: function(e){
    this.setState({
      'photo': e.target.files[0]
    });
  },
  handleLocationChange: function(e){
    e.preventDefault();
    this.setState({
      'location': e.target.value
    });
  },
  render: function(){

    var locations = this.state.listOfLocations;
    var self = this;
    var locationList = locations.map(function(location, index){
      return(
        <option key={index} value={self.state.location}>{location.get('city')}</option>
      );
    });
    return(
      <div className="row">
        <h3 id="title" className="bluepageheader white-text card-panel col s8 offset-s2">Sign Up</h3>
         <form className="col s8 offset-s2" onSubmit={this.handleSubmit}>
            <div className="row">
               <div className="input-field col s6">
                 <label htmlFor="email_address">Email</label>
                  <input
                    id="email_address"
                    value={this.state.email_address}
                    onChange={this.handleNameChange}
                    name="email_address"
                    type="text" />
               </div>
               <div className="input-field col s6">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    name="password"
                    type="password" />
               </div>
               <div className="input-field col s6">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    id="first_name"
                    value={this.state.first_name}
                    onChange={this.handleFirstNameChange}
                    name="first_name"
                    type="text" />
               </div>
               <div className="input-field col s6">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    id="last_name"
                    value={this.state.last_name}
                    onChange={this.handleLastNameChange}
                    name="last_name"
                    type="text" />
               </div>
               <div className="input-field col s6">
                 <select name="city" onChange={self.handleLocationChange} className="browser-default col s3 offset-s4">
                   <option id="location" value="">Choose your city</option>
                   {locationList}
                 </select>
               </div>
               <div className="input-field col s6">
                 <label htmlFor="photo">Photo</label><br />
                 <br />
                  <input
                    name="photo"
                    id="photo"
                    onChange={this.handlePhotoChange}
                    type="file" />
               </div>
            </div>
            <button id="submitbtn" className="waves-effect waves-light btn" type="submit">Sign Up</button>
         </form>
       </div>
    )
  }
});

module.exports = SignUpComponent;
