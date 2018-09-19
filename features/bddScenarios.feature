Feature: Login to Cookbook
    In order to be able to use the website
    As a registered user
    I want to be able to Login

Scenario: successful login
    Given I am a registered user
    When I submit correct login details
    Then I am logged In

