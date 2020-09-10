$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/feature/DottiSignIn.feature");
formatter.feature({
  "name": "Sign In Functionality Check",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Log in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DottiInvalidLogin"
    }
  ]
});
formatter.step({
  "name": "User opens the URL \"DottiAustralia\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on sign in menu option",
  "keyword": "Then "
});
formatter.step({
  "name": "Verifies the sign in page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "Check if the error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "ggg@gmail.com",
        "ggggggg"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Log in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DottiInvalidLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens the URL \"DottiAustralia\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.siteLaunch(String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on sign in menu option",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiSignInSteps.signInOptionClick() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifies the sign in page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiSignInSteps.signInPageVerify() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid \"ggg@gmail.com\" and \"ggggggg\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiSignInSteps.credentialEntry(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiSignInSteps.signInButtonClick() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiSignInSteps.errorMsgCheck() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "error_message": "applicationcustomexceptions.InvalidLoginException: Invalid Login Attempt\r\n\tat uipages.DottiSignInPage.errorMsgCheck(DottiSignInPage.java:124)\r\n\tat steps.DottiSignInSteps.errorMsgCheck(DottiSignInSteps.java:41)\r\n\tat ✽.Check if the error message is displayed(src/main/java/feature/DottiSignIn.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "images/fe9ad3a525b243f5a2f88b86788891e50.png", "Log in with invalid credentials");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
