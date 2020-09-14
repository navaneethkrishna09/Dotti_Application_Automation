Feature: Sign In Functionality Check

@DottiInvalidLogin
Scenario Outline: Log in with invalid credentials
Given User opens the URL "DottiAustralia"
Then User clicks on sign in menu option
And Verifies the sign in page
Then User enters invalid "<email>" and "<password>"
And Clicks on Sign in button
Then Check if the error message is displayed
Examples:
|email|password|
|ggg@gmail.com|ggggggg|