/**
 * The Kpop Unicorn
 *
 * Services - Nautiljon
 *
 * @module services/nautiljon
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const axios = require('axios');
const Promise = require('bluebird');
const x = require('x-ray')();
const bandService = require('./band.service.js');

/**
 * Get album count
 */
exports.getAlbumCount = (title) => {
  return bandService.getBand(title)
    .then((band) => {
      return band.nautiljon_url;
    })
    .then((url) => {
      console.log('url', url);
      const xrayCall = x(url, '#menu_onglets_1_cd');
      const promise = Promise.promisify(xrayCall);
      return promise();
    })
    .then((res) => {
      return res.replace(/[a-zA-Z\(\)]/g, '').trim();
    })
    .catch((err) => {
      console.log(err)
      // TODO: Log error
    });
}