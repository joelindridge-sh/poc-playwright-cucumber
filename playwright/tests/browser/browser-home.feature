@browser
Feature: browser-home
  Scenario: Visit HomePage
    When I visit the home page
    And I accept all cookies
    Then I should see the health plan link