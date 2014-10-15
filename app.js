'use strict'
var App = window.App = Ember.Application.create({
  LOG_TRANSISITION: true
});

App.Router.map(function() {
  this.route('about')
  this.route('insult')
});

var arrayOfInsults = ['stinky monkey','bad speller', 'vermicious knid', 'bad coder'];

App.InsultController = Ember.Controller.extend({
  randomInsult: function() {
    var insult = arrayOfInsults[Math.floor(Math.random()*arrayOfInsults.length)]
    return insult
  }.property()
});


App.Controller = Ember.Controller.extend({
  logo: 'monkey.png'
});
