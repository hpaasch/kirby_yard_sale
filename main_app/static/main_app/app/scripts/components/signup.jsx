var React = require('react');
var router = require('../router');


var SignUpComponent = React.createClass({
  handleSignUp: function(e){
    e.preventDefault();
    this.props.router.navigate('#login/', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <h1>Sign Up</h1>
          <form className="col s8 offset-s2">
            First Name:
            <input type='text' name='first_name' id="first_name" />
            Last Name:
            <input type='text' name='last_name' id="last_name" />
            UserName:
            <input type='text' name='username' id="username" />
            Password:
            <input type='text' name='password' id="password" />
            <button onClick={this.handleSignUp} className="waves-effect waves-light btn">Submit</button>
          </form>
      </div>
    )
  }
});

module.exports = SignUpComponent;
