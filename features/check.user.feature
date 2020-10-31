Feature: The admin is able to read a employee
    
  Scenario: As a user, I can see the new employees in the home page

    Given I am loggued in
    And   I created a new user James
    And   I am on the home page
    Then  I should see the employee James

