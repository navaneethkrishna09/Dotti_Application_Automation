@facebooklogin
Feature: Facebook Login

@Unsuccessfullogin
Scenario Outline: Unsuccessful Login
	Given User is on the URL "Facebook"
	And User Verifies the login page
	When User enters the "<username>" and "<password>" 
	|nnn@gmail.com|YUUUYY|
	Then User clicks on login button
	Then User verifies the error message
	Then User closes the browser
Examples:
|username|password|
|nnn@gmail.com|YUUUYY|
|nsnn@gmail.com|YYUsUUYY|

@Successfullogin
Scenario Outline: Successfull Login
	Given User is on the URL "Facebook"
	Then User Verifies the login page
	Then User enters the "<username>" and "<password>"
	Then User clicks on login button
	Then User verifies the home page
	Then User closes the browser
Examples:
|username|password|
|nv4nava@gmail.com|Love++4all=me|


