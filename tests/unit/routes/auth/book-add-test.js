import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | auth/book-add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:auth/book-add');
    assert.ok(route);
  });
});
