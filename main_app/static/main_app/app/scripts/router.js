var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var HomeComponent = require('./components/home.jsx');
var LocationComponent = require('./components/locations.jsx');
var SignUpComponent = require('./components/signup.jsx');
var LoginComponent = require('./components/login.jsx');
var ProfileComponent = require('./components/profile.jsx');
var YardSaleComponent = require('./components/sale.jsx');
var SalesComponent = require('./components/sales.jsx');
var CartComponent = require('./components/cart.jsx');
var HopeComponent = require('./components/hope.jsx');
var CreateComponent = require('./components/create.jsx');



var TheAppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'locations/': 'locations',
    'login/': 'login',
    'signup/': 'signup',
    'profile/': 'profile',
    'yardsale/': 'yardsale',
    'sales/': 'sales',
    'cart/': 'cart',
    'createprofile/': 'createprofile',
    'hope/': 'hope'
  },
index: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(HomeComponent, {router: self}),
    document.getElementById('container')
  );
},
locations: function(){
  ReactDOM.render(
    React.createElement(LocationComponent),
    document.getElementById('container')
  );
},
login: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(LoginComponent, {router: self}),
    document.getElementById('container')
  );
},
signup: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(SignUpComponent, {router: self}),
    document.getElementById('container')
  );
},
profile: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(ProfileComponent, {router: self}),
    document.getElementById('container')
  );
},
yardsale: function(){
  ReactDOM.render(
    React.createElement(YardSaleComponent),
    document.getElementById('container')
  );
},
sales: function(){
  ReactDOM.render(
    React.createElement(SalesComponent),
    document.getElementById('container')
  );
},
cart: function(){
  ReactDOM.render(
    React.createElement(CartComponent),
    document.getElementById('container')
  );
},
createprofile: function(){
  ReactDOM.render(
    React.createElement(CreateComponent),
    document.getElementById('container')
  );
},
hope: function(){
  ReactDOM.render(
    React.createElement(HopeComponent),
    document.getElementById('container')
  );
}
});

var router = new TheAppRouter();

module.exports = router;