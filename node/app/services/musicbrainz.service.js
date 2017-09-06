/**
 * The Kpop Unicorn
 *
 * Services - Musicbrainz
 *
 * @module services/musicbrainz
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const axios = require('axios');

const MUSICBRAINZ_API_URL = 'https://musicbrainz.org/ws/2';

/**
 * Search artist by name
 */
exports.searchArtist = (search) => {
  const url = `${MUSICBRAINZ_API_URL}/artist?query=${search}&limit=10&fmt=json`;
  return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      // TODO: Log error somewhere
    });
}
