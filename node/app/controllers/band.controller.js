/**
 * The Kpop Unicorn
 *
 * Controllers - Band
 *
 * @module controllers/band
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const bandService = require('../services/band.service.js');

exports.setup = (app) => {
  /**
   * Get all bands
   *
   * @api {get} /api/bands Get all bands
   * @apiGroup Band
   * @apiName GetBands
   * @apiSuccess {Object[]} - List of bands
   */
  const getBands = (req, res) => {
    res.promise(bandService.getBands(req.query.sort));
  };
  app.get('/api/bands', getBands);

  /**
   * Get a band
   *
   * @api {get} /api/band/:slug Get a band
   * @apiGroup Band
   * @apiName GetBand
   * @apiParam {String} slug Band slug
   * @apiSuccess {String} title Band title
   * @apiSuccess {String} slug Band slug
   * @apiSuccess {String} nautiljon_url Nautiljon URL
   * @apiSuccess {Array} tweets Tweets
   * @apiSuccess {Number} spotify_album_count Album count on Spotify
   * @apiSuccess {Number} nautiljon_album_count Album count on Nautiljon
   * @apiSuccess {Number} nautiljon_song_count Song count on Nautiljon
   */
  const getBand = (req, res) => {
    res.promise(bandService.getBand(req.params.title));
  };
  app.get('/api/band/:title', getBand);
}
