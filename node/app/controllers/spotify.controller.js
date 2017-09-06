/**
 * The Kpop Unicorn
 *
 * Controllers - Spotify
 *
 * @module controllers/spotify
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const spotifyService = require('../services/spotify.service.js');

exports.setup = (app) => {
  const getArtist = (req, res) => {
    res.promise(spotifyService.getArtist(req.query.q));
  };
  app.get('/api/spotify/artist', getArtist);
}
