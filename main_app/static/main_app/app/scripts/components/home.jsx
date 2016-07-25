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
          <div className="logo col s4 offset-s4">
            <img src="static/main_app/app/images/word-white-sail.png" />
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
        <section className="col s12">
          <div className="overlay col s4">
            <img src="https://images.unsplash.com/photo-1444097315577-49429a8b6224?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=cd4071412be65af0108621705680c7b9" />
          </div>
          <div className="overlay col s4">
            <img src="https://images.unsplash.com/photo-1458681708599-e0be9ce54707?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=248e7b69dc2dd8885738e48f40285753" />
          </div>
          <div className="overlay col s4">
            <img src="https://images.unsplash.com/photo-1450297549355-bfa4ef391427?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=175eecaa2093177c7325964d359fe7ca" />
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
