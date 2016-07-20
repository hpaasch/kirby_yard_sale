var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx');



var CreateComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Create YardSale</h3>
          <form className="col s8 offset-s2">
             <div className="row">
                <div className="input-field col s6">
                   <input id="name" type="text" />
                   <label htmlFor="name">Cause</label>
                </div>
                <div className="input-field col s6">
                   <label htmlFor="password">Items</label>
                   <input id="password" type="password" />
                </div>
             </div>
             <div className="row">
                <div className="input-field col s12">
                   <input id="email" type="email" className="validate" />
                   <label htmlFor="email">Email</label>
                </div>
             </div>
             <div className="row">
                <div className="input-field col s12">
                   <textarea id="address" className="materialize-textarea"></textarea>
                   <label htmlFor="address">Address</label>
                </div>
             </div>
             <LocationComponent />
             <button onClick={this.handleSignUp} className="waves-effect waves-light btn #7cb342 light-green darken-1">Submit</button>
          </form>
      </div>
    )
  }
});

module.exports = CreateComponent;
