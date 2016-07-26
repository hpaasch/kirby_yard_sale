var Backbone = require('backbone');

var Listing = Backbone.Model.extend({
  make: function(item, description, price, callback){
    jQuery.post('/api/listings/',
      {item: item, category: item, description: description, price: price}).done(callback);
  }
});

var ListingCollection = Backbone.Collection.extend({
  model: Listing,
  url: '/api/listings/'
});

module.exports = {
  'Listing': Listing,
  'ListingCollection': ListingCollection
};
