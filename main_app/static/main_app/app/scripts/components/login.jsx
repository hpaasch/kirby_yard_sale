var React = require('react');
var router = require('../router');


var LoginComponent = React.createClass({
  handleLogin: function(e){
    e.preventDefault();
    this.props.router.navigate('#profile/', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <h1>Log In</h1>
          <form className="col s8 offset-s2">
            UserName:
            <input type='text' name='username' id="username" />
            Password:
            <input type='text' name='password' id="password" />
            <button onClick={this.handleLogin} className="waves-effect waves-light btn">Submit</button>
          </form>
      </div>
    )
  }
});

module.exports = LoginComponent;
