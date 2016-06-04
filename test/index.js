import http from 'http';
import assert from 'assert';
import chai from 'chai'; 
const should = chai.should();

import '../lib/index.js';

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:1337', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('Example Node Server test with chai', () => {
  it('returns 200', done => {
    http.get('http://127.0.0.1:1337', res => {
      res.statusCode.should.equal(200);
      done();
    });
  });
});
