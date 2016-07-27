var React = require('react');
var router = require('../router');
var LocationComponent = require('../components/locations.jsx');
var CategoryComponent = require('../components/categories.jsx');
var Listing = require('../models/listing').Listing;
var SpecialListing = require('../models/speciallisting').SpecialListing;

var $ = require('jquery');


var CreateComponent = React.createClass({
  getInitialState: function(){
    return{
      'displaySpecialForm': false,
      'displayNormalForm': false
    }
  },
  handleACause: function(e){
    e.preventDefault();
    this.setState({'displaySpecialForm': !this.state.displaySpecialForm});
  },
  handlePersonal: function(e){
    e.preventDefault();
    this.setState({'displayNormalForm': !this.state.displayNormalForm});
  },
  render: function(){
    return(
      <div>
        <h1>Please choose type of Yardsale to create: </h1>
        <button type="button" className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handleACause}>A Cause</button>
        <button type="button" className="waves-effect waves-light btn #7cb342 light-green darken-1" onClick={this.handlePersonal}>Personal</button>
        <SpecialComponent displaySpecialForm={this.state.displaySpecialForm}/>
        <NormalComponent displayNormalForm={this.state.displayNormalForm}/>
      </div>
    )
  }
});

var NormalComponent = React.createClass({
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
    newItem.set({
      'item': item,
      'description': description,
      'price': price,
      'photo': photo
    });
    newItem.save().done(function(){
      self.props.router.navigate('#createprofile/', {trigger: true});
    });

    this.setState({
      'item': '',
       'description': '',
       'price': '',
       'photo': ''
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
    if(!this.props.displayNormalForm){
     return <div />
   }
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Create Normal Listing</h3>
          <form id="form" className="col s8 offset-s2" encType="multipart/form-data" onSubmit={this.handleSubmit}>
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

var SpecialComponent = React.createClass({
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
    var special_sale_description = this.state.special_sale_description;
    var special_sale_name = this.state.special_sale_name;
    var special_sale_category = this.state.special_sale_category;



    var newItem = new SpecialListing();
    console.log(newItem);
    newItem.set({
      'item': item,
      'description': description,
      'price': price,
      'photo': photo,
      'special_sale_description': special_sale_description,
      'special_sale_name': special_sale_name,
      'special_sale_category': special_sale_category
    });
    newItem.save().done(function(){
      self.props.router.navigate('#createprofile/', {trigger: true});
    });

    this.setState({
      'item': '',
       'description': '',
       'price': '',
       'photo': '',
       'special_sale_description': this.state.special_sale_description,
       'special_sale_category': this.state.special_sale_category,
       'special_sale_name': this.state.special_sale_name
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
  handleSpecialDescriptionChange: function(e){
    e.preventDefault();
    this.setState({
      'special_sale_description': e.target.value
    });
  },
  handleSpecialCategoryChange: function(e){
    e.preventDefault();
    this.setState({
      'special_sale_category': e.target.value
    });
  },
  handleSpecialNameChange: function(e){
    e.preventDefault();
    this.setState({
      'special_sale_name': e.target.value
    });
  },
  render: function(){
    if(!this.props.displaySpecialForm){
     return <div />
   }
    return(
      <div className="row">
        <h3 id="title" className=" white-text card-panel light-green darken-1 col s8 offset-s2">Create Special Listing</h3>
          <form id="form" className="col s8 offset-s2" encType="multipart/form-data" onSubmit={this.handleSubmit}>
             <div className="row">
               <div className="input-field col s12">
                  <input
                    name="special_sale_name"
                    id="special_sale_name"
                    value={this.state.special_sale_name}
                    onChange={this.handleSpecialNameChange}
                    type="text" />
                  <label htmlFor="special_sale_name">Sale Name</label>
               </div>
               <div className="input-field col s12">
                  <input
                    name="special_sale_category"
                    id="special_sale_category"
                    value={this.state.special_sale_category}
                    onChange={this.handleSpecialCategoryChange}
                    type="text" />
                  <label htmlFor="special_sale_category">Sale Category</label>
               </div>
               <div className="input-field col s12 stays">
                  <input
                    name="special_sale_description"
                    id="special_sale_description"
                    value={this.state.special_sale_description}
                    onChange={this.handleSpecialDescriptionChange}
                    type="text" />
                  <label htmlFor="special_sale_description">Sale Description</label>
               </div>
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
