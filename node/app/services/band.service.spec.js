/**
 * The Kpop Unicorn
 *
 * Services - Band - Test
 *
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const proxyquire = require('proxyquire').noCallThru();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('services/band.service.js', () => {
  let bandService;

  before(() => {
    let spotifyServiceStub = {
      getArtist: (slug) => {return {slug: slug, image: 'test', popularity: 42};},
      getAlbumCount: (slug) => {return 42;},
      getSongCount: (slug) => {return 42;}
    };
    let musixmatchServiceStub = {
      getAlbumCount: (slug) => {return 42;},
      getSongCount: (slug) => {return 42;}
    };
    let nautiljonServiceStub = {
      getAlbumCount: (slug) => {return 42;},
      getSongCount: (slug) => {return 42;}
    };
    let twitterServiceStub = {
      getTweets: (slug) => {return [{tweet: 'test'}];}
    };

    bandService = proxyquire('./band.service', {
      './spotify.service.js': spotifyServiceStub,
      './musixmatch.service.js': musixmatchServiceStub,
      './nautiljon.service.js': nautiljonServiceStub,
      './twitter.service.js': twitterServiceStub
    });
  });

  it('getBands', () => {
    const promise = bandService.getBands();
    return Promise.all([
      promise.should.be.fulfilled,
      promise.should.eventually.have.length(16)
    ]);
  });

  it('getBandBySlug - invalid slug', () => {
    try {
      expect(bandService.getBandBySlug('unknown-band')).to.throw();
    } catch (err) {
      expect(err).to.have.property('statusCode');
      expect(err).to.have.property('message');
    }
  });

  it('getBandBySlug - valid slug', () => {
    const band = bandService.getBandBySlug('snsd');
    band.should.have.property('title');
    band.should.have.property('slug');
  });

  it('getBand - invalid slug', () => {
    try {
      expect(bandService.getBand('unknown-band')).to.throw();
    } catch (err) {
      expect(err).to.have.property('statusCode');
      expect(err).to.have.property('message');
    }
  });

  it('getBand - valid slug', () => {
    const promise = bandService.getBand('snsd');
    return Promise.all([
      promise.should.be.fulfilled,
      promise.should.eventually.have.property('title'),
      promise.should.eventually.have.property('slug'),
      promise.should.eventually.have.property('image'),
      promise.should.eventually.have.property('popularity'),
      promise.should.eventually.have.property('tweets')
    ]);
  });
});
