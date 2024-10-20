Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to the Webdriver University homepage
        When I click on the Contact Us button
        And I type a first name
        And I type a last name
        And I enter an email
        And I add a Comment
        And I click on the Submit button
        Then I should be presented with successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to the Webdriver University homepage
        When I click on the Contact Us button
        And I type a first name
        And I type a last name
        And I add a Comment
        And I click on the Submit button
        Then I should be presented with UNsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        Given I navigate to the Webdriver University homepage
        When I click on the Contact Us button
        And I type a specific first name "Dwight"
        And I type a specific last name "Schrute"
        And I type a specific email "awesomeD@dundermifflin.com"
        And I type a specific word "I have beat the Computer. Sales count is: " and number 1200 within the Comment
        And I click on the Submit button
        Then I should be presented with successful contact us submission message