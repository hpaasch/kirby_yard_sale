var React = require('react');
var router = require('../router');

var SignUpComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Sign Up</h3>
         <form className="col s8 offset-s2" action="/api/register/" method="post">
            <div className="row">
               <div className="input-field col s6">
                  <input id="name" name="username" type="text" />
                  <label htmlFor="name">Username</label>
               </div>
               <div className="input-field col s6">
                  <input id="email" name="email" type="text" />
                  <label htmlFor="name">Email</label>
               </div>
               <div className="input-field col s6">
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" type="password" />
               </div>
            </div>
            <input type="submit" value="submit"/>
         </form>
       </div>
    )
  }
});

module.exports = SignUpComponent;
