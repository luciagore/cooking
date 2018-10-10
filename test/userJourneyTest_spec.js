const app = require('../app.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-expected-cookie'));
const request = require('supertest');

describe('Home page', function() {
  beforeEach(function() {
    browser.url('/');
  });

  it('lands on the right url', function() {
    var url = browser.getUrl();
    expect(url).to.equal('http://localhost:3000/');
  });

  it('has the right title', function() {
    var title = browser.getTitle();
    expect(title).to.equal('Cookbook');
  });

  it('has a link to the Recipe Store page', function() {
    var hasRecipeStoreLink = browser.isExisting('a[href="/recipeStore"]');
    expect(hasRecipeStoreLink).to.be.true;
  });

  it('the Recipe store link takes us to the Recipe Store page', function() {
    browser.click('a[href="/recipeStore"]');
    var title = browser.getTitle();
    expect(title).to.equal('Recipe Store');
  });
});

describe('Recipe Store page', function() {
  beforeEach(function() {
    browser.url('/register');
    browser.setValue('#inputUsername', 'lucy');
    browser.setValue('#inputFirstname', 'lucy');
    browser.setValue('#inputLastname', 'Gore');
    browser.setValue('#inputPassword', 'hello');
    browser.click('#btnRegister');
    browser.url('/recipestore');
  });

  it('should render "Add Recipe" button', () => {
    expect(browser.isVisible('#btnAddRecipe')).to.be.true;
  });

  it('should populate table with added recipe - check link exists', () => {
    browser.setValue('#inputRecipeName', 'pancakes');
    browser.setValue('#inputCookingTime', '30');
    browser.setValue('#inputIngredients', 'eggs, flour');
    browser.setValue('#inputMethod', 'whisk, flip');
    browser.click('#btnAddRecipe');
    browser.refresh();
    expect(browser.isExisting('a.linkshowrecipedetails=pancakes')).to.be.true;
  });

  it('should populate table with added recipe - check table element', () => {
    browser.setValue('#inputRecipeName', 'pancakes');
    browser.setValue('#inputCookingTime', '30');
    browser.setValue('#inputIngredients', 'eggs, flour');
    browser.setValue('#inputMethod', 'whisk, flip');
    browser.click('#btnAddRecipe');
    browser.refresh();
    var rows = $$('.list-group tr');
    var columns = rows[1].$$('td');
    expect(columns[0].getText()).to.equal('pancakes');
  });
});
