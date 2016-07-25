var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: 'id',
  login: function(email_address, password, callback){
    this.urlRoot = '/api/login/'
    this.set({'password': password, 'email_address': email_address});

    this.save().done(callback);
  },
  register: function(email_address, password, callback){
    this.urlRoot = '/api/register/'
    this.set({'password': password, 'email_address': email_address});
    this.save().done(callback);
  },
  currentuser: function(){
    this.urlRoot = '/api/currentuser/'
    this.fetch();
  }
});

module.exports = {
  'User': User
};
