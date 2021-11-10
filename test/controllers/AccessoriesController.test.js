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

  it('fetch', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/fetch')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log("fetch A",err)
          done(err);
        } else {
          done();
        }
      });
  });

  it('createA', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/accessories/create')
      .send(fixtures['accessories'])
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log("create A",err)
          done(err);
        } else {
          done();
        }
      });
  });


    it('update /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/accessories/update/1')
      .send({})
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log('updateA??',result.res.text);
          done(err);
        } else {
          done();
        }
      });
  });




    it('searcA', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories/search?where={"name": {"contains": "Visor Mount"}}')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log("search a error",err)
          done(err);
        } else {
          

          done();
        }
      });
  });

  
  it('delete /accessories', function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories/delete/1')
      .send({})
      .expect(200)
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
      .delete('/accessories/deleteAll/4')
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          console.log("A deleteall",err)
          done(err);
        } else {
          done();
        }
      });
  });

  

});
