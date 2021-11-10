var supertest = require('supertest');
var assert = require('assert');

// var createdSegment  =  require('../../api/controllers/variantController'),;
require('../bootstrap.test');

describe('variant Controller', function () {
  it('get /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);

    agent
      .get('/variant')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('V g',err);

          done(err);
        } else {
          
          done();
        }
      });
  });
it('fetch /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/fetch')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('V f',err);

          done(err);
        } else {
          
          done();
        }
      });
  });

 

    it('update /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/variant/update/1')
      .send({})
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('V u',err);
          done(err);
        } else {
          done();
        }
      });
  });


    it('search /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant/search?where={"name": {"contains": "ZDX"}}')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log('V S',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

  
  it('delete /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant/delete/1')
      .send({})
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log('V d',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('deleteAll /variant', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant/deleteAll/2')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          

          
          done();
        }
      });
  });

});
