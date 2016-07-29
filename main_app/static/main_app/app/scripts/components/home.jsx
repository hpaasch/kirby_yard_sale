var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx').LocationComponent;
var CategoryComponent = require('../components/categories.jsx');

var HomeComponent = React.createClass({
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
          <div className="logo col s6 offset-s3">
            <h1>YARDSALE</h1>
          </div>
        </header>
        <div className="nav col s12">
          <dl className="col s4 offset-s4 navbar">
            <dd><button id="submit" className="waves-effect waves-light btn" onClick={this.handleSignUp}>Sign Up</button></dd>
            <dd><button  id="submit" className="waves-effect waves-light btn" onClick={this.handleLogin}>Login</button></dd>
          </dl>
        </div>
        <section className="home2">
          <p className="col s6 offset-s3" id="white">Search for what youre looking for by category or by location: </p>
          <div>
            <CategoryComponent />
            <button id="submit2" className="waves-effect waves-light btn">Search</button>
          </div>
          <div>
            <LocationComponent />
            <button id="submit3" className="waves-effect waves-light btn">Search</button>
          </div>
        </section>
        
        <section className="col s12 footer valign-wrapper">
          <p className="col s4">Copyright IronYard 2016</p>
          <dd className="social col s4">
            <dl className="social"><img className="icon" src="static/main_app/app/images/twitter.png" /></dl>
            <dl className="social"><img className="icon" src="static/main_app/app/images/face.png" /></dl>
            <dl className="social"><img className="icon" src="static/main_app/app/images/pin.png" /></dl>
          </dd>
          <p className="col s4">Kirby Munson / Front End Student</p>
        </section>
      </div>
    )
  }
});

module.exports = HomeComponent;
