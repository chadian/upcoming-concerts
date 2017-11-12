import Ember from 'ember';

export default Ember.Controller.extend({
  inputText: Ember.computed.reads('model.artist.name'),
  actions: {
    submitArtist(value) {
      this.send('getNewArtist', this.get('inputText'));
    }
  }
});
