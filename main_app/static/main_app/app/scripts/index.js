var Backbone = require('backbone');
var $ = require('jquery');
var router = require('./router');

$(function(){
  Backbone.history.start();
  var $csrf = $('input[name=csrfmiddlewaretoken]');
  $('form').prepend($csrf);
});


var $ = window.jQuery = require('jquery');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}



$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            console.log("PATCHED!");
            xhr.setRequestHeader("X-CSRFToken", $("input[name=csrfmiddlewaretoken]").val());
        }
        else { console.log("getting close");}
    }


});
