/**
 * The Kpop Unicorn
 *
 * Services - MusixMatch
 *
 * @module services/musixmatch
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const axios = require('axios');

const MUSIXMATCH_API_URL = 'http://api.musixmatch.com/ws/1.1';

function insertApiKey(url)
{
  return `${url}&apikey=${process.env.MUSIXMATCH_API_KEY}`;
}

/**
 * Search artist by name
 */
exports.searchArtist = (search) => {
  const url = `${MUSIXMATCH_API_URL}/track.search?q_artist=${search}&page_size=10&page=1&s_track_rating=desc`;
  return axios.get(insertApiKey(url))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      // TODO: Log error somewhere
    });
}
