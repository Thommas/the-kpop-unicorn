/**
 * The Kpop Unicorn
 *
 * Services - Cache
 *
 * @module services/cache
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const LRU = require('lru-cache');

const options = {
  max: 500,
  maxAge: 1000 * 60 * 60
};
const cache = LRU(options);

/**
 * Set
 */
exports.set = (key, value) => {
  cache.set(key, value)
}

/**
 * Check if a key is in the cache, without updating the recent-ness or deleting it for being stale.
 */
exports.has = (key) => {
  return cache.has(key)
}

/**
 * Get
 */
exports.get = (key) => {
  return cache.get(key)
}
