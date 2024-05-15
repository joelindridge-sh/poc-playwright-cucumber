@api
Feature: healthplan-api

  Scenario Outline: healthplan-api
    When I make a "<method>" request to the "<endpoint>" endpoint with parameters "<parameters>"
    Then the response status is "<status>"

    Examples:
      | method | endpoint                                          | parameters                                           | status |
      | GET    | /                                                 |                                                      |    200 |
      | GET    | /a-b/health-plans                                 | { "cid": "9518" }                                    |    200 |
      | GET    | /a-b/health-plans#product                         |                                                      |    200 |
      | GET    | /products/consumers/simplyhealth/cp/about-you     | { "level": "4", "partner": "true", "children": "2" } |    200 |
      | GET    | /products/consumers/simplyhealth/cp/date-of-birth |                                                      |    200 |
