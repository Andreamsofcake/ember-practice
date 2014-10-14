'use strict'
var App = Ember.Application.create({
  LOG_TRANSISITION: true
});

App.Router.map(function() {
  this.route('about')
  this.route('insult')
});

var newInsult = 'stinky monkey'

App.InsultController = Ember.Controller.extend({
  insultContent: newInsult
});

// App.IndexContoller = Ember.Controller.extend({
//   siteName: 'The Bomb'
// });


