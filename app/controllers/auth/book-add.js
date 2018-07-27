import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createNewBook() {
            let title = this.get('title');
            // let author = this.get('author');
            let price = this.get('price');
            let imgUrl = this.get('imgUrl');
            let newBook = this.store.createRecord('music-book', {title, price, imgUrl});
            newBook.save();
            this.set('title', '')
            // this.set('author', '')
            this.set('price', '')
            this.transitionToRoute('auth.book-list');
        }
    }
});
