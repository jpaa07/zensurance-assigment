Feature: Checkout Complete
    Scenario Outline: As a user, I can purchase one product

        Given I am on the login page
        And I login with <username> and <password>
        When I add <product> to the cart
        And I enter my personal information <firstname> <lastname> and <zipcode>
        Then I should see the checkout completed message

        Examples:
            | username      | password     | firstname | lastname | zipcode | product             |
            | standard_user | secret_sauce | juan      | arango   | 00000   | Sauce Labs Backpack |

