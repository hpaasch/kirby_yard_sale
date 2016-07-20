var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: '_id',

});

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: '/api/register/'
});

module.exports = {
  'User': User,
  'UserCollection': UserCollection
};
