/**
 * The Kpop Unicorn
 *
 * Controllers - Hall
 *
 * @module controllers/hall
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const hallService = require('../services/hall.service.js');

exports.setup = (app) => {
  /**
   * Get all concert halls
   *
   * @api {get} /api/halls Get all concert halls
   * @apiGroup Hall
   * @apiName GetHalls
   * @apiSuccess {Object[]} - List of concert halls
   */
  const getHalls = (req, res) => {
    res.promise(hallService.getHalls());
  };
  app.get('/api/halls', getHalls);
}
