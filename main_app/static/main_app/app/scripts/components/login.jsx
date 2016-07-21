var React = require('react');
var router = require('../router');
var ProfileCollection = require('../models/profile').ProfileCollection;


var LoginComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Log In</h3>
          <form className="col s8 offset-s2" action="/login/?next=/#profile/" method="post">
             <div className="row">
                <div className="input-field col s6">
                   <input name="username" id="name" type="text" />
                   <label htmlFor="username">Username</label>
                </div>
                <div className="input-field col s6">
                   <label htmlFor="password">Password</label>
                   <input id="password" name="password" type="password" />
                </div>
             </div>
            <button className="waves-effect waves-light btn #7cb342 light-green darken-1">Submit</button>
          </form>
      </div>
    )
  }
});

module.exports = LoginComponent;
