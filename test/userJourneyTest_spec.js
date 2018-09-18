const app = require('../app.js');
const chai = require('chai');        
const expect = chai.expect;
chai.use(require('chai-expected-cookie'));
const request = require('supertest');
 
describe('Home page', function(){
    beforeEach(function(){
        browser.url('/');
    })

    it('lands on the right url', function(){
        var url = browser.getUrl();
        expect(url).to.equal('http://localhost:3000/')
    })

    it('has the right title', function(){
        var title = browser.getTitle();
        expect(title).to.equal('Cookbook')
    })

    it('has a link to the Recipe Store page', function(){ 
        var hasRecipeStoreLink = browser.isExisting('a[href="/recipeStore"]');
        expect(hasRecipeStoreLink).to.be.true;
    })

    it('the Recipe store link takes us to the Recipe Store page', function() {
        browser.click('a[href="/recipeStore"]');
        var title = browser.getTitle();
        expect(title).to.equal('Recipe Store')
    })
})

describe('Recipe Store page', function() {
    beforeEach(function(){
        browser.url('/recipestore');
    })

    it('should render "Add Recipe" button', () => {
        expect(browser.isVisible('#btnAddRecipe')).to.be.true;
    })


})