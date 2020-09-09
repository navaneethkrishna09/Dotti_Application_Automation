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
  "error_message": "com.seleniumframework.customexceptions.ApplicationCustomException: Invalid Login Attempt\r\n\tat uipages.DottiSignInPage.errorMsgCheck(DottiSignInPage.java:122)\r\n\tat steps.DottiSignInSteps.errorMsgCheck(DottiSignInSteps.java:40)\r\n\tat ✽.Check if the error message is displayed(src/main/java/feature/DottiSignIn.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "images/05297c9bbc284193bc622d84f2cded340.png", "Log in with invalid credentials");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/feature/dottiItemSelect.feature");
formatter.feature({
  "name": "Select a product from DOtti site and then add it to the bag",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DottiItemSelect"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Dotti Product Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchAndSelectProduct"
    }
  ]
});
formatter.step({
  "name": "User opens the URL \"DottiAustralia\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User verifies if the home page is correct",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on the menu bar \"\u003ccategory\u003e\" and choose the \"\u003csubcategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify the product list page \"\u003csubcategory\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects a random product",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify the Product Description Page",
  "keyword": "And "
});
formatter.step({
  "name": "User chooses selects a random size",
  "keyword": "Then "
});
formatter.step({
  "name": "enters the quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User adds the product to the bag",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory",
        "quantity"
      ]
    },
    {
      "cells": [
        "New in",
        "Shoes \u0026 Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Gift Cards",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Dotti Product Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DottiItemSelect"
    },
    {
      "name": "@SearchAndSelectProduct"
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
  "name": "User verifies if the home page is correct",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.verifyHomePage() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the menu bar \"Shoes \u0026 Accessories\" and choose the \"Gift Cards\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Gift Cards\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.verifyProductListPage(String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects a random product",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.itemClick() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Product Description Page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.verifyProductDescripion() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses selects a random size",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.selectSize() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the quantity \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.quantityEntry(String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User adds the product to the bag",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.itemAddToBag() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/feature/dottiItemSelect.feature");
formatter.feature({
  "name": "Select a product from DOtti site and then add it to the bag",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DottiItemSelect"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Dotti Product Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchAndSelectProduct"
    }
  ]
});
formatter.step({
  "name": "User opens the URL \"DottiAustralia\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User verifies if the home page is correct",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on the menu bar \"\u003ccategory\u003e\" and choose the \"\u003csubcategory\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify the product list page \"\u003csubcategory\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects a random product",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify the Product Description Page",
  "keyword": "And "
});
formatter.step({
  "name": "User chooses selects a random size",
  "keyword": "Then "
});
formatter.step({
  "name": "enters the quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User adds the product to the bag",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory",
        "quantity"
      ]
    },
    {
      "cells": [
        "New in",
        "Shoes \u0026 Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Gift Cards",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Dotti Product Search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DottiItemSelect"
    },
    {
      "name": "@SearchAndSelectProduct"
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
  "name": "User verifies if the home page is correct",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.verifyHomePage() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the menu bar \"New in\" and choose the \"Shoes \u0026 Accessories\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Shoes \u0026 Accessories\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.verifyProductListPage(String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects a random product",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.itemClick() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Product Description Page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.verifyProductDescripion() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses selects a random size",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.selectSize() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the quantity \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.quantityEntry(String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User adds the product to the bag",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.itemAddToBag() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
