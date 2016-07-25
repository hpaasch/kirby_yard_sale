var Backbone = require('backbone');

var Listing = Backbone.Model.extend({

});

var ListingCollection = Backbone.Model.extend({
  model: Listing,
  url: '/api/listings/'
});

module.export = {
  'Listing': Listing,
  'ListingCollection': ListingCollection
};
