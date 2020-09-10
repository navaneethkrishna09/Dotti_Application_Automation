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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Tops\" and choose the \"Basics\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Basics\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"New in\" and choose the \"Clothing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Clothing\"",
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
  "name": "enters the quantity \"2\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Offers\" and choose the \"2 For $30 Basics\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"2 For $30 Basics\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Shoes \u0026 Accessories\" and choose the \"Hats \u0026 Hair Accessories\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Hats \u0026 Hair Accessories\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"New in\" and choose the \"Linen Edit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Linen Edit\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"New in\" and choose the \"Insta Edit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Insta Edit\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Sale\" and choose the \"Shop By Product\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Shop By Product\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Jackets\" and choose the \"Jackets \u0026 Coats\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Jackets \u0026 Coats\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Shoes \u0026 Accessories\" and choose the \"Accessories\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Accessories\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Dresses\" and choose the \"Party\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Party\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Offers\" and choose the \"2 For $70 Jeans\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"2 For $70 Jeans\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Lookbooks\" and choose the \"Trending Florals\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Trending Florals\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Dresses\" and choose the \"Playsuits \u0026 Jumpsuits\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Playsuits \u0026 Jumpsuits\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Shoes \u0026 Accessories\" and choose the \"Belts \u0026 Bags\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Belts \u0026 Bags\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Lookbooks\" and choose the \"New Neutrals\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"New Neutrals\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"New in\" and choose the \"Fresh New Hues\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Fresh New Hues\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Shoes \u0026 Accessories\" and choose the \"Socks \u0026 Tights\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Socks \u0026 Tights\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Bottoms\" and choose the \"Pants\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Pants\"",
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
  "name": "enters the quantity \"2\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Lookbooks\" and choose the \"Soft Hues\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Soft Hues\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Dresses\" and choose the \"Midi \u0026 Maxi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Midi \u0026 Maxi\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Shoes \u0026 Accessories\" and choose the \"Shoes\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Shoes\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Dresses\" and choose the \"Casual\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Casual\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Bottoms\" and choose the \"Skirts \u0026 Shorts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Skirts \u0026 Shorts\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Tops\" and choose the \"Shirts \u0026 Blouses\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Shirts \u0026 Blouses\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Tops\" and choose the \"Casual Tops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Casual Tops\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Bottoms\" and choose the \"Jeans\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Jeans\"",
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
  "name": "enters the quantity \"2\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Offers\" and choose the \"2 For $70 Jeans\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"2 For $70 Jeans\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"New in\" and choose the \"Best Sellers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Best Sellers\"",
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
  "name": "enters the quantity \"2\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Offers\" and choose the \"Knits From $25\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Knits From $25\"",
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
  "name": "enters the quantity \"2\"",
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
        "Clothing",
        "2"
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
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Jackets",
        "Jackets \u0026 Coats",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Pants",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Best Sellers",
        "2"
      ]
    },
    {
      "cells": [
        "New in",
        "Insta Edit",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Fresh New Hues",
        "1"
      ]
    },
    {
      "cells": [
        "New in",
        "Linen Edit",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $70 Jeans",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "2 For $30 Basics",
        "1"
      ]
    },
    {
      "cells": [
        "Offers",
        "Knits From $25",
        "2"
      ]
    },
    {
      "cells": [
        "Tops",
        "Knitwear \u0026 Cardigans",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Casual Tops",
        "1"
      ]
    },
    {
      "cells": [
        "Tops",
        "Shirts \u0026 Blouses",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Casual",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Midi \u0026 Maxi",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Party",
        "1"
      ]
    },
    {
      "cells": [
        "Dresses",
        "Playsuits \u0026 Jumpsuits",
        "1"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Jeans",
        "2"
      ]
    },
    {
      "cells": [
        "Bottoms",
        "Skirts \u0026 Shorts",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Belts \u0026 Bags",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Shoes",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Socks \u0026 Tights",
        "1"
      ]
    },
    {
      "cells": [
        "Shoes \u0026 Accessories",
        "Hats \u0026 Hair Accessories",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "New Neutrals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Trending Florals",
        "1"
      ]
    },
    {
      "cells": [
        "Lookbooks",
        "Soft Hues",
        "1"
      ]
    },
    {
      "cells": [
        "Sale",
        "Shop By Product",
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
  "name": "User clicks on the menu bar \"Tops\" and choose the \"Knitwear \u0026 Cardigans\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.menuBarSelect(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the product list page \"Knitwear \u0026 Cardigans\"",
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
