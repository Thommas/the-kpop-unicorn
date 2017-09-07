/**
 * The Kpop Unicorn
 *
 * Test - E2E - Band
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const supertest = require('supertest');
const server = require('../app/app');
const chai = require('chai');
const expect = chai.expect;

describe('controllers/band.controller.js', () => {
  it('getBands', (done) => {
    supertest(server)
      .get('/api/bands')
      .set('Content-Type', 'application/json')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        expect(res.body.length).equal(16);
        done();
      });
  });

  it('getBand - invalid slug', () => {
    supertest(server)
      .get('/api/band/unknown-band')
      .set('Content-Type', 'application/json')
      .expect(404);
  });

  it('getBand - valid slug', (done) => {
    supertest(server)
      .get('/api/band/snsd')
      .set('Content-Type', 'application/json')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        expect(res.body.title).equal('SNSD');
        expect(res.body.slug).equal('snsd');
        expect(res.body).to.have.property('image');
        expect(res.body).to.have.property('popularity');
        expect(res.body).to.have.property('tweets');
        done();
      });
  });
});
