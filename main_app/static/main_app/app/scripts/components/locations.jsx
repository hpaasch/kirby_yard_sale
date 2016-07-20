var React = require('react');
var LocationCollection = require('../models/location').LocationCollection;


var LocationComponent = React.createClass({
  getInitialState: function(){
    return {
      listOfLocations: []
    }
  },
  componentWillMount: function(){
    var listOfLocations = new LocationCollection();

    listOfLocations.fetch().done(() => {
      this.setState({
        'listOfLocations': listOfLocations
      });
    });

  },
  render: function(){
    var locations = this.state.listOfLocations;

    var locationList = locations.map(function(location, index){
      console.log("IS THIS HAPPENING?")
      return(
        <option key={index} value={location.get('city')}>{location.get('city')}</option>
      );
    });
    return(
      <div>
        <label>City</label>
          <select className="browser-default">
            <option value="">Choose your city</option>
            {locationList}
          </select>
      </div>
    )
  }
});

module.exports = LocationComponent;
