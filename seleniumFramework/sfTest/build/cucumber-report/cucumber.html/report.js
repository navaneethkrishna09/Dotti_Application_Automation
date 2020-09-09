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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-41R0DTGP\u0027, ip: \u0027192.168.18.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NAVANE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: c80c30f3b0f426f5643b721e179f01ff\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027product-variant__heading\u0027 and @style\u003d\u0027display:none\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:423)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:305)\r\n\tat com.seleniumframework.base.BasePage.getWebElementsProperties(BasePage.java:778)\r\n\tat com.seleniumframework.base.BasePage.getElementsPropertiesByXpath(BasePage.java:816)\r\n\tat uipages.DottiItemSelectPage.selectSize(DottiItemSelectPage.java:173)\r\n\tat steps.DottiItemSelectSteps.selectSize(DottiItemSelectSteps.java:58)\r\n\tat ✽.User chooses selects a random size(src/main/java/feature/dottiItemSelect.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enters the quantity \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.quantityEntry(String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User adds the product to the bag",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiItemSelectSteps.itemAddToBag() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-41R0DTGP\u0027, ip: \u0027192.168.18.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NAVANE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: c80c30f3b0f426f5643b721e179f01ff\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:289)\r\n\tat steps.StepHooks.AfterScenario(StepHooks.java:39)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});