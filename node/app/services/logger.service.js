/**
 * The Kpop Unicorn
 *
 * Services - Logger
 *
 * Use bunyan to log requests and errors.
 * In 'prod' environment, log to whatever you like
 * In 'dev' environment, log to console
 * In 'test' environment, skip log
 *
 * @module services/logger
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const bunyan = require('bunyan');
const os = require('os');
const osHostname = os.hostname();

let logger = null;

if (process.env.NODE_ENV === 'prod') {
  // Log in your favorite logging service
}

if (process.env.NODE_ENV === 'dev') {
  logger = bunyan.createLogger({
    name: 'log',
    streams: [{
      stream: process.stdout
    }]
  });
}

/**
 * Logs a request
 */
exports.logAccess = (req, res, responseTime) => {
  if (logger) {
    logger.info({
      hostname: osHostname,
      requestHostname: req.hostname,
      method: req.method,
      originalUrl: req.originalUrl,
      body: req.body,
      params: req.params,
      query: req.query,
      path: req.path,
      status: res.statusCode,
      contentLength: parseInt(res.getHeader('content-length')),
      responseTime: responseTime
    }, 'access');
  }
}

/**
 * Logs an error
 */
exports.logError = (req, error) => {
  if (logger) {
    logger.error({
      hostname: osHostname,
      requestHostname: req.hostname,
      method: req.method,
      originalUrl: req.originalUrl,
      body: req.body,
      params: req.params,
      query: req.query,
      path: req.path,
      status: 500
    }, error);
  }
}
