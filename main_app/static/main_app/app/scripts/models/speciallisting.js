var Backbone = require('backbone');
var SaveMethod = require('../models/utilities');

var SpecialListing = SaveMethod.extend({
  urlRoot: '/api/special/',
  // make: function(item, description, price, photo, callback){
  //   jQuery.post('/api/listings/',
  //     {item: item, description: description, price: price, photo: photo}).done(callback);
  // }
});

var SpecialListingCollection = Backbone.Collection.extend({
  model: SpecialListing,
  url: '/api/special/'
});

module.exports = {
  'SpecialListing': SpecialListing,
  'SpecialListingCollection': SpecialListingCollection
};
