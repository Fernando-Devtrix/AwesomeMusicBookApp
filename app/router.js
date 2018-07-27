import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth', {path: '/'}, function() {
    this.route('book-list');
    this.route('book-edit', {path: 'book-edit/:id'});
    this.route('author-list');
    this.route('author-edit');
    this.route('purchase-list');
    this.route('purchase-new');
    this.route('detail');
    this.route('book-add');
  });
});

export default Router;
