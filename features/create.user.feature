Feature: The admins is able to create a new employee

  Scenario Outline: As an admin, I can create a new employee
    Given I am loggued in
    And   I am on the home page
    When  I open the create new user page
    And   I fill the form with <firstname> and <lastname> and <email> and <identification> and <leadername>
    Then  I should see a message saying <message>

  Examples:
      | firstname | lastname |          email             | identification | leadername     |                message               | 
      | James     | Smith    | James.Smith@mailinator.com |   1234567890   | Sebastian Leal |   Employee was successfully created. |

