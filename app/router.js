import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth', {path: '/'}, function() {
    this.route('book-list');
    this.route('book-edit');
    this.route('author-list');
    this.route('author-edit');
    this.route('purchase-list');
    this.route('purchase-new');  
  });
});

export default Router;
