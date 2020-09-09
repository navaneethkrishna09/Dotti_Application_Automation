package com.seleniumframework.base;

import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.driver.SFWebDriver;
import com.seleniumframework.logger.FrameworkLogger;
import com.seleniumframework.resourceRead.ResourceRead;

import io.cucumber.plugin.event.PickleStepTestStep;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.IOException;

public class BaseTestScripts extends FrameworkLogger {

	private WebDriver _seleniumWebDriver = SFWebDriver.getSFWebDriverInstance().getSeleniumWebDriver();

	public static String scenarioName = "";

	public static int restAssuredport = 0;

	public static PickleStepTestStep currentStep;

	public static WebElement productElement;

	public static String dynamicProductName;

	private int timeOut;

	public int getElementFindTimeOut() throws ResourceCustomException, IOException {
		return timeOut = Integer
				.parseInt(new ResourceRead().getResourceValueFromXML().getProperty("ElementFindTimeOutInSeconds"));
	}

	protected WebDriver get_seleniumWebDriver() {
		return _seleniumWebDriver;
	}

}
