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
        <li key={index}>{location.get('city')}</li>
      );
    });
    return(
      <div>
        <h1>Locations</h1>
        <ul>
          {locationList}
        </ul>
      </div>
    )
  }
});

module.exports = LocationComponent;
