var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx');
var CategoryComponent = require('../components/categories.jsx');
var Listing = require('../models/listing').Listing;
var User = require('../models/user').User;





var CreateComponent = React.createClass({
  getInitialState: function(){
    return {
      'item': '',
       'description': '',
       'price': '',
       'photo': ''
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var item = this.state.item;
    var description = this.state.description;
    var price = this.state.price;
    var photo = this.state.photo;



    var newItem = new Listing();
    newItem.make(item, description, price, photo, function(){
      self.props.router.navigate('#sales/', {trigger: true});
    });
  },
  handleItemChange: function(e){
    e.preventDefault();
    this.setState({
      'item': e.target.value
    });
  },
  handleDescriptionChange: function(e){
    e.preventDefault();
    this.setState({
      'description': e.target.value
    });
  },
  handlePriceChange: function(e){
    e.preventDefault();
    this.setState({
      'price': e.target.value
    });
  },
  handlePhotoChange: function(e){
    e.preventDefault();
    this.setState({
      'photo': e.target.value
    });
  },
  render: function(){
    var me = this.state.me;
    console.warn(this.state.me)

    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">create listing</h3>
          <form className="col s8 offset-s2" onSubmit={this.handleSubmit}>
             <div className="row">
                <div className="input-field col s6">
                   <input
                     name="item"
                     id="item"
                     value={this.state.item}
                     onChange={this.handleItemChange}
                     type="text" />
                   <label htmlFor="item">Item Name</label>
                </div>
                <div className="input-field col s6">
                   <input
                     name="description"
                     id="description"
                     value={this.state.description}
                     onChange={this.handleDescriptionChange}
                     type="text" />
                   <label htmlFor="description">Description</label>
                </div>
                <div className="input-field col s6">
                   <input
                     name="price"
                     id="price"
                     value={this.state.price}
                     onChange={this.handlePriceChange}
                     type="text" />
                   <label htmlFor="price">Price</label>
                </div>
                <div className="input-field col s6">
                  <label htmlFor="photo">Photo</label><br />
                  <br />
                   <input
                     name="photo"
                     id="photo"
                     value={this.state.photo}
                     onChange={this.handlePhotoChange}
                     type="file" />
                </div>
              </div>
             <button className="waves-effect waves-light btn #7cb342 light-green darken-1">Submit</button>
          </form>
      </div>
    )
  }
});

module.exports = CreateComponent;
