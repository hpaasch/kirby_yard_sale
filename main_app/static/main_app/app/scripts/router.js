var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var csrf = require('./csrf');

var HomeComponent = require('./components/home.jsx');
var LocationComponent = require('./components/locations.jsx');
var SignUpComponent = require('./components/signup.jsx');
var LoginComponent = require('./components/login.jsx');
var ProfileComponent = require('./components/profile.jsx').ProfileComponent;
var ListingComponent = require('./components/profile.jsx').ListingComponent;
var YardSaleComponent = require('./components/sale.jsx');
var SalesComponent = require('./components/sales.jsx');
var CartComponent = require('./components/cart.jsx');
var HopeComponent = require('./components/hope.jsx');
var CreateComponent = require('./components/create.jsx');
var SpecialCategoryComponent = require('./components/specialcategory.jsx');
var DetailComponent = require('./components/profile.jsx').DetailComponent;
var SpecialDetailComponent = require('./components/profile.jsx').SpecialDetailComponent;
var SpecialListingComponent = require('./components/profile.jsx').SpecialListingComponent;






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
    'listing/': 'listing',
    'detail/:id/': 'detail',
    'special/:id/': 'special',
    'speciallisting/': 'speciallisting'
  },
  initialize: function(){
    var csrftoken = csrf.getCookie('csrftoken');
    console.log('csrftoken', csrftoken);

    $.ajaxSetup({
      beforeSend: function(xhr, settings) {
        if (!csrf.csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader("X-CSRFToken", csrftoken);
        } else {
          console.warn("CSRF Token Not Set!");
          console.log('safe method', !csrf.csrfSafeMethod(settings.type));
          console.log('cross domain', !this.crossDomain);
        }
      }
    });
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
      React.createElement(YardSaleComponent, {router: self}),
      document.getElementById('container')
    );
  },
  sales: function(){
    ReactDOM.render(
      React.createElement(SalesComponent, {router: self}),
      document.getElementById('container')
    );
  },
  cart: function(){
    ReactDOM.render(
      React.createElement(CartComponent, {router: self}),
      document.getElementById('container')
    );
  },
  createprofile: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(CreateComponent, {router: self}),
      document.getElementById('container')
    );
  },
  listing: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(ListingComponent, {router: self}),
      document.getElementById('container')
    );
  },
  speciallisting: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(SpecialListingComponent, {router: self}),
      document.getElementById('container')
    );
  },
  special: function(id){
    var self = this;
    ReactDOM.render(
      React.createElement(SpecialDetailComponent, {id: id, router: self}),
      document.getElementById('container')
    );
  },
  detail: function(id){
    var self = this;
    ReactDOM.render(
      React.createElement(DetailComponent, {id: id, router: self}),
      document.getElementById('container')
    );
  }
});

var router = new TheAppRouter();

module.exports = router;
