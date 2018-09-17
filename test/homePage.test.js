const app = require('../app.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-expected-cookie'));
const request = require('supertest');

const userCredentials = {
  username: 'alice1',
  password: 'pass',
  firstname: 'Alice',
  lastname: 'Briggs'
}


describe('GET /', function() {
    it('responds with status code 200 and renders "Cookbook"', function(done) {
      request(app)
        .get('/')
        .expect(function(res) {
          expect(res.text).to.contain('Cookbook');
        })
        .expect(200, done);
    });
  }); 

  describe('POST /register', function() {
    it('returns cookie', function(done) {
      request(app)
        .post('/register')
        .send(userCredentials)
        .set('Accept', 'application/json')
        .expect(function(res) {
          expect(res).to.containCookie({
            name: 'cookinguser'
          })
        })
        .expect(200, done);
    });
    it('redirects to "/"', function(done) {
      request(app)
        .post('/register')
        .send(userCredentials)
        .set('Accept', 'application/json')
        .expect('Location', '/')
        .expect(302, done);
    });
  });

  describe('POST /login', function(){
    it('returns a cookie', function(done){
      request(app)
      .post('/login')
      .send(userCredentials)
      .set('Accept', 'application/json')
      .expect(function(res) {
        expect(res).to.containCookie({
          name: 'cookinguser'
        })
      })
      .expect(200, done);
    })
  });

  // describe('GET /recipestore', function(){
  //   xit('returns a cookie', function(done){})
    
  //   });

  // describe('GET /login', function(){
  //   xit('returns a cookie', function(done){})
  //   });

  // describe('GET /login', function(){
  //   xit('returns a cookie', function(done){})
  //   });
  


