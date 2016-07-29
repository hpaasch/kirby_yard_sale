var React = require('react');
var CategoryCollection = require('../models/category').CategoryCollection;


var CategoryComponent = React.createClass({
  getInitialState: function(){
    return {
      listOfCategories: []
    }
  },
  componentWillMount: function(){
    var listOfCategories = new CategoryCollection();

    listOfCategories.fetch().done(() => {
      this.setState({
        'listOfCategories': listOfCategories
      });
    });

  },
  render: function(){
    var categories = this.state.listOfCategories;

    var categoriesList = categories.map(function(category, index){
      return(
        <option key={index} name="category" value={category.get('category')}>{category.get('category')}</option>
      );
    });
    return(
      <div>
          <select name="category" id="category" className="browser-default col s10 offset-s1 col l3 offset-l4">
            <option value="">Choose your category</option>
            {categoriesList}
          </select>
      </div>
    )
  }
});

module.exports = CategoryComponent;
