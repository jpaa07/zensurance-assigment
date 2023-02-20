
Feature: Login
    Scenario Outline: As a user, I can login successfully

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see Inventory page

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |

    Scenario Outline: As a user without active credentials, I should not able to login

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see <error> on the login page

        Examples:
            | username        | password     | error                                |
            | locked_out_user | secret_sauce | Sorry, this user has been locked out |