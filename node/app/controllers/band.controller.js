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
  const getBands = (req, res) => {
    res.promise(bandService.getBands(req.query.sort));
  };
  app.get('/api/bands', getBands);

  const getBand = (req, res) => {
    res.promise(bandService.getBand(req.params.title));
  };
  app.get('/api/band/:title', getBand);
}
