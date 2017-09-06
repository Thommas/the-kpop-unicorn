/**
 * The Kpop Unicorn
 *
 * Middlewares - Promise Response
 *
 * @module middlewares/promise-response
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const loggerService = require('../services/logger.service.js');

/**
 * Gives a helper method for controllers to retur
 * a promise and handle success/error in a generic way.
 */
module.exports = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    loggerService.logAccess(req, res, Date.now() - start);
  });
  res.promise = (promise) => {
    promise
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        loggerService.logError(req, err);
        if (err.statusCode) {
          res.status(err.statusCode).json(err.message);
        } else if (err.status) {
          res.status(err.status).json(err.message);
        } else {
          res.status(500).json(err);
        }
      });
  }
  next();
};
