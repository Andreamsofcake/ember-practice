'use strict'
var App = window.App = Ember.Application.create({
  LOG_TRANSISITION: true
});

App.Router.map(function() {
  this.route('about')
  this.route('insult')
  this.resource('listOfInsults')
});

var arrayOfInsults = ['stinky monkey','bad speller', 'vermicious knid', 'bad coder'];
var newArray = ['your mom', 'a bad apple', 'substitute chemistry teacher'];

App.ListOfInsultsRoute = Ember.Route.extend({
  module: function(){
    return newArray
  }.property()
});

App.InsultController = Ember.Controller.extend({
  randomInsult: function() {
    var insult = arrayOfInsults[Math.floor(Math.random()*arrayOfInsults.length)]
    return insult
  }.property()
});

App.Controller = Ember.Controller.extend({
  logo: 'monkey.png',
  name:''
});
