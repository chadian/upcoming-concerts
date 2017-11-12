import Ember from 'ember';

const API_BASE_URL = 'https://rest.bandsintown.com';
const apiArtistPath = (artist) => `/artists/${artist}`;
const apiEventsPath = (artist) => `/artists/${artist}/events`;

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  artist: 'July Talk',

  model() {
    const ajax = this.get('ajax');
    const ajaxOptions = {
      method: 'GET',
      data: { app_id: 'asdf' }
    };

    const artist = this.get('artist');
    return Ember.RSVP.Promise.all([
      ajax.request(API_BASE_URL + apiArtistPath(artist), ajaxOptions),
      ajax.request(API_BASE_URL + apiEventsPath(artist), ajaxOptions)
    ]).then(([artist, events]) => ({artist, events}));
  },

  actions: {
    getNewArtist(artist) {
      this.set('artist', artist);
      this.refresh();
    }
  }
});
