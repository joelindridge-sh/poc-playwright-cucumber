@ui
Feature: healthplan-ui

  Scenario: healthplan-ui
    Given User visits Simplyhealth
    And User clicks Get a health plan
    And User clicks Build your plan
    When User chooses health plan options
    And User completes step 1: name
    And User completes step 2: dob
