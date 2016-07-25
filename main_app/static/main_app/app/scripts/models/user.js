var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: 'id',
  login: function(email_address, password, callback){
    // this.urlRoot = 'accounts/login/'
    // this.set({'password': password, 'email_address': email_address, 'username': email_address});
    // console.log(this);
    // this.save().done(callback);
    jQuery.post('login/',
      {username: email_address, password: password}).done(callback);
  },
  register: function(email_address, password, first_name, last_name, username, callback){
    // this.urlRoot = '/api/register/'
    // this.set({'password': password,
    //           'email_address': email_address,
    //           'last_name': last_name,
    //           'first_name': first_name
    //         });
    // this.save().done(callback);
    jQuery.post('/api/register/',
      {email_address: email_address, username: email_address, password: password, last_name: last_name, first_name: first_name}).done(callback);
  },
  currentuser: function(){
    this.urlRoot = '/api/currentuser/'
    this.fetch();
  }
});

module.exports = {
  'User': User
};
