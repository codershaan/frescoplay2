var supertest = require('supertest');
var assert = require('assert');

// var createdSegment  =  require('../../api/controllers/carsController'),;
require('../bootstrap.test');

describe('cars Controller', function () {
  it('get /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);

    agent
      .get('/cars')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('C g',err);
          done(err);
        } else {
          
          done();
        }
      });
  });

  it('fetch /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/cars/fetch')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('C f',err);

          done(err);
        } else {
          
          done();
        }
      });
  });

  it('create /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/cars/create')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('C creae',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

    it('update /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/cars/update/:1')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
           console.log('C upd',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('delete /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/cars/delete/:1')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('C del',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('deleteAll /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/cars/deleteAll')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log('C dA',err);

          done(err);
        } else {
          

          
          done();
        }
      });
  });

    it('search /cars', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/cars/search?where={"name": {"contains": "RX"}}')
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
          console.log('C S',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

});
