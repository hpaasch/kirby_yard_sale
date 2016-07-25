var React = require('react');
var router = require('../router');
var User = require('../models/user').User;



var LoginComponent = React.createClass({
  getInitialState: function(){
    return {
      'username': '',
       'password': ''
     }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var email_address = this.state.username;
    var password = this.state.password;

    var activeUser = new User();
    activeUser.login(email_address, password, function(){
      self.props.router.navigate('#login/', {trigger: true});
    });
  },
  handleNameChange: function(e){
    e.preventDefault();
    this.setState({
      'username': e.target.value
    });
  },
  handlePasswordChange: function(e){
    e.preventDefault();
    this.setState({
      'password': e.target.value
    });
  },
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className="white-text card-panel col s8 offset-s2">Log In</h3>
         <form className="col s8 offset-s2" onSubmit={this.handleSubmit}>
            <div className="row">
               <div className="input-field col s6">
                 <label htmlFor="name">Username</label>
                  <input
                    id="name"
                    value={this.state.username}
                    onChange={this.handleNameChange}
                    name="username"
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
            </div>
            <button id="submitbtn" className="waves-effect waves-light btn" type="submit">Log In</button>
         </form>
       </div>
    )
  }
});

module.exports = LoginComponent;
