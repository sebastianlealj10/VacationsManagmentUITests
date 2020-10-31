Feature: The admin is able to delete a user
    
  Scenario: As a admin, I can delete a user
    Given I am loggued in
    And   I created a new user Jhon
    And   I am on the home page
    When  I delete the employee Jhon
    Then  I should not see the employee Jhon 


