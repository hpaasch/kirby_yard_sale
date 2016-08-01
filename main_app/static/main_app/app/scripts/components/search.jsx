var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx').LocationComponent;
var CategoryComponent = require('../components/categories.jsx'). CategoryComponent;
var ListingCollection = require('../models/listing').ListingCollection;


var SearchLocation = React.createClass({
  getInitialState: function(){
    return {
      'listings': []
    }
  },
  componentWillMount: function(){
    var self = this;
    var listings = new ListingCollection();
    var hereListings = listings.where({location: 22});
    console.log(hereListings);

    listings.fetch().done(function(){
      self.setState({
        'listings': hereListings
      });
    });
  },
  render: function(){
    var listings = this.state.listings;
    var listingList = listings.map(function(listing, index){

      return (
          <dd key={index} className="col s12 col m6 col l4">
            <div className="ydsalebig card-panel">
              <div className="imgwrapper3">
                <img src={listing.get('photo')} />
              </div>
              <a href={"#detail/" + listing.get('id') + '/'}>{listing.get('item') + ' '}</a>
              {listing.get('seller') + ' '}
              {'$' + listing.get('price') + ' '}
              {listing.get('description') + ' '}
            </div>
          </dd>
        );
      });
    return(
      <div className="row">
        <div className="salenav card-panel col s2">
        </div>
        <div className="salemain col s12 col m12 col l10">
            <dl>{listingList}</dl>
        </div>
      </div>
    )
  }
});

module.exports = {
  'SearchLocation': SearchLocation
};
