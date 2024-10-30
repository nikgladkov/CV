@login @regression
Feature: WebdriveUniversity - Login Portal verification
    @smoke
    Scenario Outline: Login Password Validation
        Given I navigate to the Webdriver University homepage
        When I click on the Login Portal button
        And I type a specific user name '<username>'
        And I type a specific password '<password>'
        And I click on the Login button
        Then I should be presented with alert '<message>'

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | test         | validation failed    |
            | test      | test         | validation failed    |