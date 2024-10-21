Feature: WebdriverUniversity - Contact Us Page

    # Scenario: Valid Contact Us Form Submission
    #     Given I navigate to the Webdriver University homepage
    #     When I click on the Contact Us button
    #     And I type a first name
    #     And I type a last name
    #     And I enter an email
    #     And I add a Comment
    #     And I click on the Submit button
    #     Then I should be presented with successful contact us submission message

    # Scenario: Invalid Contact Us Form Submission
    #     Given I navigate to the Webdriver University homepage
    #     When I click on the Contact Us button
    #     And I type a first name
    #     And I type a last name
    #     And I add a Comment
    #     And I click on the Submit button
    #     Then I should be presented with UNsuccessful contact us submission message

    # Scenario: Valid Contact Us Form Submission - Using specific data
    #     Given I navigate to the Webdriver University homepage
    #     When I click on the Contact Us button
    #     And I type a specific first name "Dwight"
    #     And I type a specific last name "Schrute"
    #     And I type a specific email "awesomeD@dundermifflin.com"
    #     And I type a specific word "I have beat the Computer. Sales count is: " and number 1200 within the Comment
    #     And I click on the Submit button
    #     Then I should be presented with successful contact us submission message

    Scenario Outline: Validate Contact Us page
        Given I navigate to the Webdriver University homepage
        When I click on the Contact Us button
        And I type a first name '<firstName>' and a last name '<lastName>'
        And I type an '<emailAddress>' and a comment '<comment>'
        And I click on the Submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress | comment          | message                      |
            | Test      | Test     | test@te.st   | Valid Scenario   | 55Thank You for your Message!  |
            # | Test2     | Test2    | test2@te.st  | Valid Scenario   | 555Thank You for your Message!  |
            | Test3     | Test3    | invalidEmail | InValid Scenario | 555Error: Invalid email address |