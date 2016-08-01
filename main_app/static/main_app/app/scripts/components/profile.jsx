var React = require('react');
var router = require('../router');
var $ = require('jquery');
var User = require('../models/user').User;
var ListingCollection = require('../models/listing').ListingCollection;
var SpecialListingCollection = require('../models/speciallisting').SpecialListingCollection;



var DetailComponent = React.createClass({
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
  handleFakeBuy: function(e){
    e.preventDefault();
    this.props.router.navigate('#cart/', {trigger: true});
  },
  render: function(){
    var self = this;
    var listings = this.state.listings;


    var listingItem = listings.map(function(listing, index){
      var id = listing.id;
      if(id == self.props.id){

      return (
          <div key={index} >
            <div className="imgwrapper4">
              <img src={listing.get('photo')} />
            </div>
            <dl>
              <dd>{listing.get('item') + ' '}</dd>
              <dd>{'$' + listing.get('price') + ' '}</dd>
              <dd>{listing.get('description') + ' '}</dd>
            </dl>
          </div>
        )
      }
    });

    return(
      <div className="detail row">
        <div className="leftside col s12 col l6">
          <h5>Your Item</h5>
          <div className="ydsalehuge card-panel">{listingItem}</div>
        </div>
        <div className="rightside col s12 col m9 offset-m2 col l4 offset-l1">
          <button onClick={this.handleFakeBuy} id="submitbtn2" className="waves-effect waves-light btn">BUY</button>
        </div>
      </div>
    )
  }
});

var SpecialDetailComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var listings = new SpecialListingCollection();

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
  handleFakeBuy: function(e){
    e.preventDefault();
    this.props.router.navigate('#cart/', {trigger: true});
  },
  render: function(){
    var self = this;
    var listings = this.state.listings;


    var listingItem = listings.map(function(listing, index){
      var id = listing.id;
      if(id == self.props.id){

      return (
          <div key={index} >
            <div className="imgwrapper4">
              <img src={listing.get('photo')} />
            </div>
            <dl>
              <dd>{listing.get('item') + ' '}</dd>
              <dd>{'$' + listing.get('price') + ' '}</dd>
              <dd>{listing.get('description') + ' '}</dd>
            </dl>
          </div>
        )
      }
    });

    return(
      <div className="detail row">
        <div className="leftside col s12 col l6">
          <h5>Your Item</h5>
          <div className="ydsalehuge card-panel">{listingItem}</div>
        </div>
        <div className="rightside col s12 col m9 offset-m2 col l4 offset-l1">
          <button onClick={this.handleFakeBuy} id="submitbtn2" className="waves-effect waves-light btn">BUY</button>
        </div>
      </div>
    )
  }
});

var CauseComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var listings = new SpecialListingCollection();

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
    var me = this.state.me;
    console.warn('hey: ', this.state.listings.get())
    var listingList = listings.map(function(listing, index){
      return (
          <dd key={index} className="col s12 col m6 col l4">
                <div className="ydsalebig card-panel">
                  {listing.get('special_sale_name') + ' '}
                </div>
          </dd>
        );
      });
    return(
      <div className="row">
        <div className="salemain col s12 col m12 col l10">
          {listingList}
        </div>
      </div>
    )
  }
});

var SpecialListingComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var listings = new SpecialListingCollection();

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
    var me = this.state.me;
    var listingList = listings.map(function(listing, index){
      return (
          <dd key={index} className="col s12 col m6 col l4">
                <div className="ydsalebig card-panel">
                  <div className="imgwrapper3">
                    <img src={listing.get('photo')} />
                  </div>
                  <a href={"#special/" + listing.get('id') + '/'}>{listing.get('item') + ' '}</a>
                  {listing.get('seller') + ' '}
                  {'$' + listing.get('price') + ' '}
                  {listing.get('description') + ' '}
                </div>
          </dd>
        );
      });
    return(
      <div className="row">
        <div className="salenav card-panel col s2">
          <h6>Sort by category: </h6>
          <dl>
            <dd>Shirts</dd>
            <dd>Pants</dd>
            <dd>Jackets</dd>
            <dd>Dresses</dd>
            <dd>Shoes</dd>
            <dd>Sweaters</dd>
            <dd>Hats</dd>
            <dd>Tank Tops</dd>
          </dl>
        </div>
        <div className="salemain col s12 col m12 col l10">
          <h3>{me.get('first_name') + 's' + ' ' + 'YardSale'}</h3>
            <dl>{listingList}</dl>
        </div>
      </div>
    )
  }
});




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
    var me = this.state.me;
    var listingList = listings.map(function(listing, index){

      return (
          <dd key={index} className="col s12 col m6 col l4">
                <div className="ydsalebig card-panel">
                  <div className="imgwrapper3">
                    <img src={listing.get('photo')} />
                  </div>
                  <a href={"#detail/" + listing.get('id') + '/'}>{listing.get('item') + ' '}</a>
                  {listing.get('seller') + ' '}
                  {'$' + listing.get('price') + ' '}
                  {listing.get('description') + ' '}
                </div>
          </dd>
        );
      });
    return(
      <div className="row">
        <div className="salenav card-panel col s2">
          <h6>Sort by category: </h6>
          <dl>
            <dd>Shirts</dd>
            <dd>Pants</dd>
            <dd>Jackets</dd>
            <dd>Dresses</dd>
            <dd>Shoes</dd>
            <dd>Sweaters</dd>
            <dd>Hats</dd>
            <dd>Tank Tops</dd>
          </dl>
        </div>
        <div className="salemain col s12 col m12 col l10">
          <h3>{me.get('first_name') + 's' + ' ' + 'YardSale'}</h3>
            <dl>{listingList}</dl>
        </div>
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
          <div key={index} className="col s12 col m6 col l3">
                <div className="ydsale card-panel">
                  <div className="imgwrapper2">
                    <img src={listing.get('photo')} />
                  </div>
                  {listing.get('item')}
                </div>
          </div>
        );
      });
    return(
      <div className="row">
        <h3 id="title" className="white-text card-panel col s12">Hello, {me.get('first_name')}</h3>

          <div id="side-nav" className="col s12 col m3 col l3">
            <div id="list2" className="idphoto col s8 offset-s2 col m1 col l8 offset-l2"><img src={me.get('photo')}></img></div>
            <div id="list" className="col s8 offset-s2 col m8 offset-m4 col l8 offset-l2">{me.get('first_name') + ' ' + me.get('last_name')}</div>
            <div id="list1" className="col s8 offset-s2 col m8 offset-m4 col l8 offset-l2">{me.get('email_address')}</div>
              <div id="list1" className="col s8 offset-s2 col m8 offset-m4 col l8 offset-l2">{me.get('location')}</div>


            <dl className="profilelinks col s8 offset-s2 col m2 col l8 offset-l2">
              <dd><button id="submitbtn2" className="col m6 waves-effect waves-light btn" onClick={this.handleCreateProfile}>Create Yardsale</button></dd>
            </dl>
          </div>

          <div id="main" className="col s12 col m9 col l9">
            <div className="row">

            <div className="yardsale">
              <a href="#listing/"><h6>Your Personal YardSale</h6></a>
                <dl>{listingList}</dl>
            </div>

            <SpecialProfileComponent />

            <div className="sales">
              <a href="#sales/"><h6>Your Sales</h6></a>
              <div className="ydsale card-panel col-md-3">
                <div className="imgwrapper2">
                  <img src="https://images.unsplash.com/photo-1453087460409-fd3ca2ad06be?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=af0a15369f0c95e58a666d7163959b34" />
                </div>
              </div>
              <div className="ydsale card-panel col-md-3">
                <div className="imgwrapper2">
                  <img src="https://images.unsplash.com/photo-1449614115178-cb924f730780?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=11d98e91b325b99cddf45d99c466f8cf" />
                </div>
              </div>
              <div className="ydsale card-panel col-md-3">
                <div className="imgwrapper2">
                  <img src="https://images.unsplash.com/photo-1445282804813-123ac28fe498?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=a817ae26dd615f95920ee10d3418ef2c" />
                </div>
              </div>
              </div>
            </div>

            <div className="cart">
              <a href="#cart/"><h6>Your cart</h6></a>
                <div className="ydsale card-panel col-md-3">
                  <div className="imgwrapper2">
                  <img src="https://images.unsplash.com/photo-1464170400324-dda9eb57e9ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5dc4afee90cfa3dbc365ef2b7de8e635" />
                </div>
              </div>
              <div className="ydsale card-panel col-md-3">
                <div className="imgwrapper2">
                  <img src="https://images.unsplash.com/photo-1433643667043-663b34a5c052?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ccd0c9320f2180c75f944b2843000ce9" />
                </div>
              </div>
              <div className="ydsale card-panel col-md-3">
                <div className="imgwrapper2">
                  <img src="https://images.unsplash.com/photo-1442366783285-838b5f033cc8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=8e4ab6815a009df3621293adcdfd27d7" />
                </div>
              </div>
              </div>
              </div>
            </div>
    )
  }
});

var SpecialProfileComponent = React.createClass({
  getInitialState: function(){
    return {
      'listings': [],
      'me': new User()
    }
  },
  componentWillMount: function(){
    var self = this;
    var me = new User();
    var listings = new SpecialListingCollection();

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
    var me = this.state.me;
    var listings = this.state.listings;
    var listingList = listings.map(function(listing, index){
      return (
          <div key={index} className="col s12 col m6 col l3">
                <div className="ydsale card-panel">
                  <div className="imgwrapper2">
                    <img src={listing.get('photo')} />
                  </div>
                  {listing.get('item')}
                </div>
          </div>
        );
      });
    return(
      <div className="yardsale">
        <a href="#speciallisting/"><h6>Your YardSale for a Cause</h6></a>
          <dl>{listingList}</dl>
      </div>
    )
  }
});






module.exports = {
  'ListingComponent': ListingComponent,
  'ProfileComponent':ProfileComponent,
  'DetailComponent': DetailComponent,
  'SpecialDetailComponent': SpecialDetailComponent,
  'SpecialListingComponent': SpecialListingComponent
};
