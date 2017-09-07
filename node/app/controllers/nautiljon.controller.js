/**
 * The Kpop Unicorn
 *
 * Controllers - Nautiljon
 *
 * @module controllers/nautiljon
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const nautiljonService = require('../services/nautiljon.service.js');

exports.setup = (app) => {
  /**
   * Get song count
   *
   * @api {get} /api/nautiljon/song/:slug Get song count
   * @apiGroup Nautiljon
   * @apiName GetSongCount
   * @apiParam {String} slug Band slug
   * @apiSuccess {Number} Song count.
   */
  const getSongCount = (req, res) => {
    res.promise(nautiljonService.getSongCount(req.params.slug));
  };
  app.get('/api/nautiljon/song/:slug', getSongCount);

  /**
   * Get album count
   *
   * @api {get} /api/nautiljon/song/:slug Get album count
   * @apiGroup Nautiljon
   * @apiName GetAlbumCount
   * @apiParam {String} slug Band slug
   * @apiSuccess {Number} Album count.
   */
  const getAlbumCount = (req, res) => {
    res.promise(nautiljonService.getAlbumCount(req.params.slug));
  };
  app.get('/api/nautiljon/album/:slug', getAlbumCount);
}
