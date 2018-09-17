const app = require('../app.js');
const chai = require('chai');        
const Launcher = require('webdriverio').Launcher;
const expect = chai.expect;
chai.use(require('chai-expected-cookie'));
const request = require('supertest');
 

describe('Recipe Store page', function() {
    
    // before('Navigate to recipe store page', function() {
    //     browser.url('http://localhost:3000/recipestore');
    // });
 
    it('should render "Add Recipe" button', () => {
        browser.url('http://localhost:3000/recipestore');
        expect(browser.isVisible('#btnAddRecipe')).to.be.true;
    })


})