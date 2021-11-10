var supertest = require('supertest');
var assert = require('assert');

var createdSegment;
require('../bootstrap.test');

describe('Segment Controller', function() {
  it('get /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
           console.log('S g',err);
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });
  it('fetch /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment/fetch')
      .send()
      .expect(400)
      .end(function (err, result) {
        if (err) {
           console.log('S f',err);

          done(err);
        } else {
          
          done();
        }
      });
  });


    it('update /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/segment/update/1')
      .send({})
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('S up',err);
          done(err);
        } else {
          done();
        }
      });
  });



    it('search /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment/findOne/1')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log('S F',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

  it('delete /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment/delete/1')
      .send({})
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log('S de',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('deleteAll /segment', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment/deleteAll/2')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log('S dA',err);

          done(err);
        } else {
          

          
          done();
        }
      });
  });


});
