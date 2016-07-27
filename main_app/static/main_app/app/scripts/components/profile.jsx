var React = require('react');
var router = require('../router');
var $ = require('jquery');
var User = require('../models/user').User;
var ListingCollection = require('../models/listing').ListingCollection;





var ListingComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var listings = new ListingCollection();

    listings.fetch().done(function(){
      self.setState({
        'listings': listings
      });
    });

    me.fetch().done(function(){
      self.setState({
        'me': me
      });
    });
  },
  render: function(){
    var listings = this.state.listings;
    var listingList = listings.map(function(listing, index){
      return (
          <dd key={index} className="col-md-3">
                <div className="ydsale card-panel">
                  <img src={listing.get('photo')} />
                  {listing.get('item') + ' '}
                  {'$' + listing.get('price') + ' '}
                  {listing.get('description') + ' '}
                </div>
          </dd>
        );
      });
    return(
      <div>
        <h6>Your YardSale</h6>
          <dl>{listingList}</dl>
      </div>
    )
  }
});




var ProfileComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var listings = new ListingCollection();

    listings.fetch().done(function(){
      self.setState({
        'listings': listings
      });
    });

    me.fetch().done(function(){
      self.setState({
        'me': me
      });
    });
  },
  handleYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#yardsale/', {trigger: true});
  },
  handleCreateProfile: function(e){
    e.preventDefault();
    this.props.router.navigate('#createprofile/', {trigger: true});
  },
  handleSales: function(e){
    e.preventDefault();
    this.props.router.navigate('#sales/', {trigger: true});
  },
  handleCreateYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#create/', {trigger: true});
  },
  handleGoHome: function(e){
    e.preventDefault();
    this.props.router.navigate('', {trigger: true});
  },
  render: function(){
    var me = this.state.me;
    var listings = this.state.listings;
    var listingList = listings.map(function(listing, index){
      return (
          <dd key={index} className="col-md-3">
                <div className="ydsale card-panel">{listing.get('item')}</div>
          </dd>
        );
      });
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel col s12">Hello, {me.get('first_name')}</h3>

          <div id="side-nav" className="col s3">
            <div id="list2" className="idphoto col s8 offset-s2"><img src={me.get('photo')}></img></div>
            <div id="list" className="col s8 offset-s2">{me.get('first_name') + ' ' + me.get('last_name')}</div>
            <div id="list1" className="col s8 offset-s2">{me.get('email_address')}</div>
              <div id="list1" className="col s8 offset-s2">{me.get('street_address')}</div>


            <dl className="profilelinks col s8 offset-s2">
              <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCreateProfile}>Create Yardsale</button></dd>
              <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleYardSale}>YardSale</button></dd>
              <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleSales}>Your Sales</button></dd>
              <dd><button id="submitbtn" className="waves-effect waves-light btn" onClick={this.handleCart}>Your Cart</button></dd>
            </dl>
          </div>

          <div id="main" className="col s9">
            <div className="row">

            <div className="yardsale">
              <a href="#listing/"><h6>Your YardSale</h6></a>
                <dl>{listingList}</dl>
            </div>

            <div className="sales">
              <h6>Your Sales</h6>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1453087460409-fd3ca2ad06be?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=af0a15369f0c95e58a666d7163959b34" />
                </div>
              </div>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1449614115178-cb924f730780?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=11d98e91b325b99cddf45d99c466f8cf" />
                </div>
              </div>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1445282804813-123ac28fe498?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=a817ae26dd615f95920ee10d3418ef2c" />
                </div>
              </div>
              </div>
            </div>

            <div className="cart">
              <h6>Your Cart</h6>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1464170400324-dda9eb57e9ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5dc4afee90cfa3dbc365ef2b7de8e635" />
                </div>
              </div>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1433643667043-663b34a5c052?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ccd0c9320f2180c75f944b2843000ce9" />
                </div>
              </div>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1442366783285-838b5f033cc8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8e4ab6815a009df3621293adcdfd27d7" />
                </div>
              </div>
              </div>
              </div>
            </div>
    )
  }
});





module.exports = {
  'ListingComponent': ListingComponent,
  'ProfileComponent':ProfileComponent
};
