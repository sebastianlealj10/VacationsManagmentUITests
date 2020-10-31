Feature: The admins is able to log into the site

  Scenario Outline: As a admin, I can log into the site

    Given I am on the login page
    When I login with <username>
    Then I should see a flash message saying <message>
    Then I should see the Logo is displayed

    Examples:
      | username                           | message                 |
      | gap-automation-test@mailinator.com | Signed in successfully. |
