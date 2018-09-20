const { Given, When, Then } = require('cucumber');
var expect = require('chai').expect

         Given('I am a new user', function () {
           browser.url('/register')
         });

         When('I submit registration details', function () {
          browser.setValue('#inputUsername', 'lucy');
          browser.setValue('#inputFirstname', 'lucy');
          browser.setValue('#inputLastname', 'Gore');
          browser.setValue('#inputPassword', 'hello');
          browser.click('#btnRegister')
         });

         Then('I am registered and logged in', function () {
          var account = browser.getText('*=My Account: lucy')
          expect(browser.isExisting(account)).to.be.true;
         });