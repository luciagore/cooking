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

    xit('renders welcome message', function(done) {
      request(app)
        .get('/')
        .expect(function(res) {
          expect(res.text).to.contain('Welcome to Cookbook');
          expect(res.text).to.not.contain('What ingredient do you have?');
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
    xit('redirects to "/"', function(done) {
      request(app)
        .post('/register')
        .send(userCredentials)
        .set('Accept', 'application/json')
        .expect('Location', '/')
        .expect(302, done);
    });
  });

  describe('GET /register', function() {
    it('shows the form is rendered on the page', function(done) {
      request(app)
        .get('/register')
        .expect(function(res) {
          expect(res.text).to.contain('Register account');
        })
        .expect(200, done);
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

    xit('should return a 302 response and redirect to /login', function(done){
      request(app)
      .get('/recipestore')
      .expect('Location', '/login')
      .expect(302, done);
    })
  });

  // needs registration helper
  describe('GET /recipestore', function(){
    it('responds with code 200 and renders "Recipe Store"', function(done){
      request(app)
      .get('/recipestore')
        .expect(function(res) {
          expect(res.text).to.contain("<title>Recipe Store</title>");
        })
        .expect(200, done)
    })
  })

  

  // describe('GET /recipestore', function(){
  //   xit('returns a cookie', function(done){})
    
  //   });

  // describe('GET /login', function(){
  //   xit('returns a cookie', function(done){})
  //   });

  // describe('GET /login', function(){
  //   xit('returns a cookie', function(done){})
  //   });
  


