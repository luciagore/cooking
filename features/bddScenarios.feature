Feature: Login to Cookbook
    In order to be able to use the website
    As a registered user
    I want to be able to Login

Scenario: successful login
    Given I am a new user
    When I submit registration details
    Then I am registered and logged in

