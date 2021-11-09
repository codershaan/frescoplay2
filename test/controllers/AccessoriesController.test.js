var supertest = require('supertest');
var assert = require('assert');

// var createdSegment  =  require('../../api/controllers/AccessoriesController'),;
require('../bootstrap.test');

describe('Accessories Controller', function () {
  it('get /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);

    agent
      .get('/accessories')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('A g',err);
          done(err);
        } else {
          
          done();
        }
      });
  });

  it('fetch /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/fetch')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
           console.log('A F',err);
          done(err);
        } else {
          
          done();
        }
      });
  });

  it('create /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/accessories/create')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('??',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

    it('update /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/accessories/update/:1')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
           console.log('??',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('delete /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories/delete/:1')
      .send({})
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('??',err);
          done(err);
        } else {
          done();
        }
      });
  });

    it('deleteAll /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories/deleteAll')
      .send()
      .expect(400)
      .end(function (err, result) {
        if (err) {
          console.log('??',err);

          done(err);
        } else {
          

          
          done();
        }
      });
  });

    it('search /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/search?where={"name": {"contains": "RX"}}')
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
                    console.log('A S',err);

          done(err);
        } else {
          

          done();
        }
      });
  });

});
