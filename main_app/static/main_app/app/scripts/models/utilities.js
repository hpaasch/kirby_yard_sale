var Backbone = require('backbone');

var SaveMethod = Backbone.Model.extend({
  save: function(attributes, options){
    options = options || {};
    attributes = attributes || {};

    options.data = this.toJSON();
    options.emulateJSON = true;

    return Backbone.Model.prototype.save.call(this, attributes, options);
  }
});

module.exports = SaveMethod;
