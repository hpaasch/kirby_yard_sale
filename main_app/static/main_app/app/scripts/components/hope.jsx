var React = require('react');
var router = require('../router');


var HopeComponent = React.createClass({
  render: function(){
    return(
      <div className="row">
        <div className="col s12">
          <img className="hopeheader" src="static/main_app/app/images/flag.gif" />
        </div>
        <div className="nav col s12">
        <h5>Choose Your Guest <i className="material-icons">play_arrow</i></h5>
        </div>
      </div>
    )
  }
});

module.exports = HopeComponent;
