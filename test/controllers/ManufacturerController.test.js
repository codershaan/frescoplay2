var supertest = require('supertest');
var assert = require('assert');

// var createdSegment  =  require('../../api/controllers/manufacturerController'),;
require('../bootstrap.test');

describe('manufacturer Controller', function () {
  it('get /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);

    agent
      .get('/manufacturer')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('M g',err);

          done(err);
        } else {
          
          done();
        }
      });
  });

  it('fetch /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/fetch')
      .send()
      .expect(400)
      .end(function (err, result) {
        if (err) {
           console.log('M F',err);

          done(err);
        } else {
          
          done();
        }
      });
  });

  it('create /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/manufacturer/create')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('M create',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

    it('update /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/manufacturer/update/:1')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
           console.log('M update?',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('delete /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer/delete/:1')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('m del',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('deleteAll /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer/deleteAll')
      .send()
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('M dA',err);

          done(err);
        } else {
          

          
          done();
        }
      });
  });

    it('search /manufacturer', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/findOne/:1')
      .send()
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('M fi',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

});
