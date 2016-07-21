var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx');



var CreateComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Update Profile</h3>
          <form className="col s8 offset-s2" action="/api/profile/{id}" method="post">
             <div className="row">
                <div className="input-field col s6">
                   <input name="first_name" id="name" type="text" />
                   <label htmlFor="name">First Name</label>
                </div>
              </div>
             <LocationComponent />
             <button className="waves-effect waves-light btn #7cb342 light-green darken-1">Submit</button>
          </form>
      </div>
    )
  }
});

module.exports = CreateComponent;
