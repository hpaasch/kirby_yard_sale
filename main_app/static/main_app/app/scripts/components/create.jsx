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
      <div className="row">
        <h3 id="title" className="form head white-text card-panel col s12">Create YardSale</h3>
        <h5 className="subtitle">What type of yardsale will you be creating today? </h5>
        <button id="submitbtn" type="button" className="waves-effect waves-light btn col s10 offset-s1 col l2 offset-l4" onClick={this.handleACause}>For A Cause</button>
        <button id="submitbtn" type="button" className="waves-effect waves-light btn col s10 offset-s1 col l2 offset-l4" onClick={this.handlePersonal}>Personal</button>
        <SpecialComponent router={this.props.router} displaySpecialForm={this.state.displaySpecialForm}/>
        <NormalComponent router={this.props.router} displayNormalForm={this.state.displayNormalForm}/>
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
    newItem.save();

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
    this.setState({
      'photo': e.target.files[0]
    });
  },
  handleFinishChange: function(){
    this.props.router.navigate('#profile/', {trigger: true});
  },
  render: function(){
    if(!this.props.displayNormalForm){
     return <div />
   }
    return(
      <div className="row">
          <form id="form" className="col s12 col l8 offset-l2" onSubmit={this.handleSubmit}>
             <div className="row">
                <div className="input-field col s12 col l6">
                   <input
                     name="item"
                     id="item"
                     value={this.state.item}
                     onChange={this.handleItemChange}
                     type="text" />
                   <label htmlFor="item">Item Name</label>
                </div>
                <div className="input-field col s12 col l6">
                   <input
                     name="description"
                     id="description"
                     value={this.state.description}
                     onChange={this.handleDescriptionChange}
                     type="text" />
                   <label htmlFor="description">Description</label>
                </div>
                <div className="input-field col s12 col l6">
                   <input
                     name="price"
                     id="price"
                     value={this.state.price}
                     onChange={this.handlePriceChange}
                     type="text" />
                   <label htmlFor="price">Price</label>
                </div>
                <div className="input-field col s12 col l6">
                  <label htmlFor="photo">Photo</label><br />
                  <br />
                   <input
                     name="photo"
                     id="photo"
                     onChange={this.handlePhotoChange}
                     type="file" />
                </div>
             </div>
             <button id="add" className="waves-effect waves-light btn">Add Item</button>
          </form>
          <div className="col s8 offset-s2">
            <button id="finish" onClick={this.handleFinishChange} className="col s6 col l2 waves-effect waves-light btn">Finish</button>
          </div>
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
       'photo': '',
       'special_sale_name': '',
       'special_sale_description': '',
       'special_sale_category': ''
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
    newItem.set({
      'item': item,
      'description': description,
      'price': price,
      'photo': photo,
      'special_sale_description': special_sale_description,
      'special_sale_name': special_sale_name,
      'special_sale_category': special_sale_category
    });
    newItem.save();
      // self.props.router.navigate('#createprofile/', {trigger: true});


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
    this.setState({
      'photo': e.target.files[0]
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
  handleSpecialNameChange: function(e){
    e.preventDefault();
    this.setState({
      'special_sale_name': e.target.value
    });
  },
  handleFinishChange: function(){
    this.props.router.navigate('#profile/', {trigger: true});
  },
  render: function(){
    if(!this.props.displaySpecialForm){
     return <div />
   }
    return(
      <div className="row">
          <form id="form" className="col s12 col l8 offset-l2" onSubmit={this.handleSubmit}>
             <div className="row">
               <div className="stays col s12">
               <div className="input-field col s10">
                  <input
                    name="special_sale_name"
                    id="special_sale_name"
                    value={this.state.special_sale_name}
                    onChange={this.handleSpecialNameChange}
                    type="text" />
                  <label htmlFor="special_sale_name">Sale Name</label>
               </div>
               <div className="input-field col s8">
                 <select className="browser-default" onChange={this.handleSpecialCategoryChange} name='special_sale_category'>
                   <option value="">Choose a Cause</option>
                   <option value="Extra fun">Extra fun</option>
                   <option value="Personal need">Personal need</option>
                   <option value="Big trip">Big trip</option>
                   <option value="Help others">Help others</option>
                   <option value="Other">Other</option>
                 </select>
               </div>
               <div className="input-field col s10">
                  <input
                    name="special_sale_description"
                    id="special_sale_description"
                    value={this.state.special_sale_description}
                    onChange={this.handleSpecialDescriptionChange}
                    type="text" />
                  <label htmlFor="special_sale_description">Sale Description</label>
               </div>
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
                <div className="input-field col s12 col l6">
                   <input
                     name="description"
                     id="description"
                     value={this.state.description}
                     onChange={this.handleDescriptionChange}
                     type="text" />
                   <label htmlFor="description">Description</label>
                </div>
                <div className="input-field col s12 col l6">
                   <input
                     name="price"
                     id="price"
                     value={this.state.price}
                     onChange={this.handlePriceChange}
                     type="text" />
                   <label htmlFor="price">Price</label>
                </div>
                <div className="input-field col s12 col l6">
                  <label htmlFor="photo">Photo</label><br />
                  <br />
                   <input
                     name="photo"
                     id="photo"
                     onChange={this.handlePhotoChange}
                     type="file" />
                </div>
             </div>
             <button id="add" className="waves-effect waves-light btn">Add Another Item</button>
          </form>
          <div className="col s8 offset-s2">
            <button onClick={this.handleFinishChange} id="finish" className="col s6 col l2 waves-effect waves-light btn">Finish</button>
          </div>

      </div>
    )
  }
});

module.exports = CreateComponent;
