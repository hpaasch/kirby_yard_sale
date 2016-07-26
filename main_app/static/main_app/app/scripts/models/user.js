var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: '/api/currentuser/',
  login: function(email_address, password, callback){
    jQuery.post('login/',
      {username: email_address, password: password}).done(callback);
  },
  register: function(email_address, password, first_name, last_name, username, callback){
    var userData = {
      email_address: email_address,
      username: email_address,
      password: password,
      last_name: last_name,
      first_name: first_name
    };

    jQuery.post('/api/register/', userData).done(callback);
  }
});

var me = new User();
me.fetch().done(function functionName() {

});
module.exports = {
  'User': User
};
