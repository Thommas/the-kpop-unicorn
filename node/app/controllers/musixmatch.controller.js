/**
 * The Kpop Unicorn
 *
 * Controllers - Musixmatch
 *
 * @module controllers/musixmatch
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const musixmatchService = require('../services/musixmatch.service.js');

exports.setup = (app) => {
  const searchArtist = (req, res) => {
    res.promise(musixmatchService.searchArtist(req.query.q));
  };
  app.get('/api/musixmatch/search-artist', searchArtist);
}
