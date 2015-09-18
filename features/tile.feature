Feature:  As a customer I want to be able to see more detailed information for a given tile

  Scenario: Clicking on info tile
    Given I am viewing the homepage
    When I click on 'Your bill'
    Then I should see my current bill