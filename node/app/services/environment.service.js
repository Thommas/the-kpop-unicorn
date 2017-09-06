/**
 * The Kpop Unicorn
 *
 * Services - Dotenv
 *
 * Setup environment variables
 *
 * @module services/environment
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

// Dotenv
const dotenv = require('dotenv');

/**
 * Load environment variables, defaults to dev
 */
exports.setup = () => {
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'dev';
  }
  dotenv.load({
    path: 'environments/environment.' + process.env.NODE_ENV
  });
}
