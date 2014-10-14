var App = Ember.Application.create({
  LOG_TRANSISITION: true
});

App.Router.map(function() {
  this.route('about')
  this.route('insult')
}); 

App.InsultController = Ember.Controller.extend({
  insultContent: 'snot nosed wombat'
});

App.IndexContoller = Ember.Controller.extend({
  siteName: 'The Bomb'
});
