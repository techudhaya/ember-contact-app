import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('route1', { path:'/route1'}, function() {
    this.route('edit',{ path:'/edit/:id'});
  });
  this.route('route2', function() {
    this.route('view',{ path:'/view/:id' });
  });
});
