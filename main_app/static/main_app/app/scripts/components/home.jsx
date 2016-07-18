var React = require('react');
var router = require('../router');


var HomeComponent = React.createClass({
  handleLocation: function(){
    this.props.router.navigate('#locations/', {trigger: true});
  },
  handleSignUp: function(){
    this.props.router.navigate('#signup/', {trigger: true});
  },
  handleLogin: function(){
    this.props.router.navigate('#login/', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <header className="head">
          <div className="col s8 offset-s3"><h2>yardsale</h2>
          </div>
        </header>
        <div className="nav col s12">
          <dl className="col s5 offset-s3 navbar">
            <dd><button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleLocation}>Locations</button></dd>
            <dd><button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleSignUp}>Sign Up</button></dd>
            <dd><button className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleLogin}>Login</button></dd>
          </dl>
        </div>
      </div>
    )
  }
});

module.exports = HomeComponent;
