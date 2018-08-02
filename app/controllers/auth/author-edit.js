import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        saveAuthor(author) {
            author.save()
            .then(() => {
                this.transitionToRoute('auth.author-list');
            })
        },
        destroyAuthor(author) {
            author.destroyRecord()
            .then(() => {
                this.transitionToRoute('auth.author-list');
            })
        }
    }
});
