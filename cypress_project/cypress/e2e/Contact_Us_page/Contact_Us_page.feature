@contact-us @regression

Feature: WebdriverUniversity - Contact Us Page

    Background: Pre Conditions
        Given I navigate to the Webdriver University homepage
        When I click on the Contact Us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email
        And I add a Comment
        And I click on the Submit button
        Then I should be presented with successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I add a Comment
        And I click on the Submit button
        Then I should be presented with UNsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Dwight"
        And I type a specific last name "Schrute"
        And I type a specific email "awesomeD@dundermifflin.com"
        And I type a specific word "I have beat the Computer. Sales count is: " and number 1200 within the Comment
        And I click on the Submit button
        Then I should be presented with successful contact us submission message

    @smoke
    Scenario Outline: Validate Contact Us page
        And I type a first name '<firstName>' and a last name '<lastName>'
        And I type an '<emailAddress>' and a comment '<comment>'
        And I click on the Submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress | comment          | message                      |
            | Test      | Test     | test@te.st   | Valid Scenario   | Thank You for your Message!  |
            | Test2     | Test2    | test2@te.st  | Valid Scenario   | Thank You for your Message!  |
            | Test3     | Test3    | invalidEmail | InValid Scenario | Error: Invalid email address |