import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.findRecord('music-book', params.id);
    },
    actions: {
        saveBook(book) {
            book.save();
            this.transitionTo('auth.book-list');
        },

        deleteBook(book) {
            book.destroyRecord().then(() => {
                this.transitionTo('auth.book-list');
            })
        }
    }
});
