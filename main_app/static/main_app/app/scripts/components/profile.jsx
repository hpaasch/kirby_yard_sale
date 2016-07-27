var React = require('react');
var router = require('../router');
var $ = require('jquery');
var User = require('../models/user').User;



var ProfileComponent = React.createClass({
  componentWillMount: function(){
    var me = new User();
    me.fetch().done(function(){
      $('#title').html('Hello, ' + me.get('first_name'));
      $('#list').html(me.get('first_name') + ' ' +  me.get('last_name'));
      $('#list1').html(me.get('email_address'));
      $('#list2').html('<img src="https://images.unsplash.com/photo-1414202251636-d05ac44c0182?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=95dd8c65b835464f99ae974dafe90b24" />');

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
  handleCart: function(e){
    e.preventDefault();
    this.props.router.navigate('#cart/', {trigger: true});
  },
  handleCreateYardSale: function(e){
    e.preventDefault();
    this.props.router.navigate('#create/', {trigger: true});
  },
  handlePDP: function(e){
    e.preventDefault();
    this.props.router.navigate('#hope/', {trigger: true});
  },
  handleGoHome: function(e){
    e.preventDefault();
    this.props.router.navigate('', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel col s12">Your Profile</h3>

          <div id="side-nav" className="col s3">
            <div id="list2" className="idphoto col s8 offset-s2"></div>
            <div id="list" className="col s8 offset-s2"></div>
            <div id="list1" className="col s8 offset-s2"></div>

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
              <h6>Your YardSale</h6>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=1dfe368493cb533a078a551d4e7ecd62" />
                </div>
              </div>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c0ade235c23e621dfd8069ea62e27120" />
                </div>
              </div>
              <div className="item col s3">
                <div className="imgwrapper">
                  <img src="https://images.unsplash.com/photo-1453134765485-7f9a71a803d5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=fd8978ce0f51d46d7aaf1b76ff7cfab6" />
                </div>
              </div>
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


module.exports = ProfileComponent;
