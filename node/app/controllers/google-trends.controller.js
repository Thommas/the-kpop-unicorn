/**
 * The Kpop Unicorn
 *
 * Controllers - Google Trends
 *
 * @module controllers/google-trends
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const googleTrendsService = require('../services/google-trends.service.js');

exports.setup = (app) => {
  /**
   * Get trends
   *
   * @api {get} /api/google-trends/:slug Get trends
   * @apiGroup GoogleTrends
   * @apiName GetTrends
   * @apiParam {String} slug Band slug
   * @apiSuccess {Object[]} - List of trends
   */
  const getTrends = (req, res) => {
    res.promise(googleTrendsService.getTrends(req.params.slug));
  };
  app.get('/api/google-trends/:slug', getTrends);
}
