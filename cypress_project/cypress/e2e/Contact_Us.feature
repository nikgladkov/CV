Feature: WebdriverUniversity - Contact Us Page

Scenario: Valid Contact Us Form Submission
Given I navigate to the WebdriverUniversity homepage
When I click on the Contact Us button
And I type a first name
And I type a last name
And I enter an email
And I add a Comment
And I cLick on the Submit button
Then I should be presented with successful contact us submission message