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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d85.0.4183.102)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-41R0DTGP\u0027, ip: \u0027192.168.18.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NAVANE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 85.0.4183.102, webStorageEnabled: true}\nSession ID: 8f278efedcf38ca368e3841c7b8074e0\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Sign In\u0027) and @class\u003d\u0027header__drop-link\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat com.seleniumframework.base.BaseTestFixture.waitForElement(BaseTestFixture.java:42)\r\n\tat com.seleniumframework.base.BasePage.clickOnButton(BasePage.java:100)\r\n\tat com.seleniumframework.base.BasePage.clickOnButtonByXpath(BasePage.java:122)\r\n\tat uipages.DottiSignInPage.signInOptionClick(DottiSignInPage.java:36)\r\n\tat steps.DottiSignInSteps.signInOptionClick(DottiSignInSteps.java:17)\r\n\tat ✽.User clicks on sign in menu option(src/main/java/feature/DottiSignIn.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verifies the sign in page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiSignInSteps.signInPageVerify() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters invalid \"ggg@gmail.com\" and \"ggggggg\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiSignInSteps.credentialEntry(String,String) in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks on Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.DottiSignInSteps.signInButtonClick() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.DottiSignInSteps.errorMsgCheck() in file:/D:/Projects/Eclipse_demo/seleniumFramework/sfTest/target/classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d85.0.4183.102)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.19041 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPTOP-41R0DTGP\u0027, ip: \u0027192.168.18.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NAVANE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 85.0.4183.102, webStorageEnabled: true}\nSession ID: 8f278efedcf38ca368e3841c7b8074e0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:289)\r\n\tat steps.StepHooks.AfterScenario(StepHooks.java:39)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});
