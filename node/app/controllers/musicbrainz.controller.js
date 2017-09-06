/**
 * The Kpop Unicorn
 *
 * Controllers - Musicbrainz
 *
 * @module controllers/musicbrainz
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const musicbrainzService = require('../services/musicbrainz.service.js');

exports.setup = (app) => {
  const searchArtist = (req, res) => {
    res.promise(musicbrainzService.searchArtist(req.query.q));
  };
  app.get('/api/musicbrainz/search-artist', searchArtist);
}
