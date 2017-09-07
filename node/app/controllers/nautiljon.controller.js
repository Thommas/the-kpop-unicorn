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
  const getAlbumCount = (req, res) => {
    res.promise(nautiljonService.getAlbumCount(req.params.title));
  };
  app.get('/api/nautiljon/:title', getAlbumCount);
}
