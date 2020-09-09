package uipages;

import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.base.BaseTestScripts;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;

import applicationcustomexceptions.InvalidUserNamePasswordException;
import enumerators.EclipxEnumerator;

public class eclipxPage extends BasePage {

	final static Logger log = Logger.getLogger(eclipxPage.class);

	private String eclipxPropertyFile = "/eclipxPageResource.properties";

	WebDriver seleniumWebDriver;
	public String scenarioName;

	public eclipxPage() {
		this.seleniumWebDriver = get_seleniumWebDriver();
		this.scenarioName = BaseTestScripts.scenarioName;
	}

	public void enterUserNameAndPassword(String username, String password)
			throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
		log.info("Entered enterUserNameAndPassword method of eclipxPage");
		Properties property = new ResourceRead().getResourceValueFromProperties(eclipxPropertyFile);
		findTextboxAndSetValueByXpath(property.getProperty(EclipxEnumerator.ECLIPX_USERNAME_LOCATOR.name()), username,
				seleniumWebDriver);
		findTextboxAndSetValueByXpath(property.getProperty(EclipxEnumerator.ECLIPX_PASSWORD_LOCATOR.name()), password,
				seleniumWebDriver);
		log.info("Exited enterUserNameAndPassword method of eclipxPage");
	}

	public void clickLogInbutton()
			throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
		log.info("Entered clickLogInbutton method of eclipxPage");
		clickOnButtonByXpath(new ResourceRead().getResourceValueFromProperties(eclipxPropertyFile)
				.getProperty(EclipxEnumerator.ECLIPX_LOGIN_LOCATOR.name()), seleniumWebDriver);
		log.info("Exited clickLogInbutton method of eclipxPage");
	}

	public boolean checkForErrorMessage() throws ResourceCustomException, IOException {
		log.info("Entered checkForErrorMessage method of eclipxPage");
		boolean errorOccured = false;
		int timeOut = getElementFindTimeOut();
		String ERROR_MESSAGE_XPATH = new ResourceRead().getResourceValueFromProperties(eclipxPropertyFile)
				.getProperty(EclipxEnumerator.ECLIPX_ERROR_MESSAGE.name());
		if (isElementPresent(By.xpath(ERROR_MESSAGE_XPATH), timeOut, seleniumWebDriver)) {
			errorOccured = true;
		}
		log.info("Exited checkForErrorMessage method of eclipxPage");
		return errorOccured;
	}

	public void checkForAssertionStatement()
			throws InvalidUserNamePasswordException, ResourceCustomException, IOException, InterruptedException, WebDriverInstanceNullException, InvalidInputException {
		log.info("Entered checkForAssertionStatement method of eclipxPage");
		System.out.println(scenarioName);
		Thread.sleep(20000);
		boolean errorOccured = checkForErrorMessage();
		if (errorOccured) {
			throw new InvalidUserNamePasswordException("Invalid username and password");
		}
		
		ClickonNewQuote();
		
		
		log.info("Exited checkForAssertionStatement method of eclipxPage");
	}
	
	public void ClickonNewQuote() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
		log.info("Entered clickLogInbutton method of eclipxPage");
		clickOnButtonByXpath(new ResourceRead().getResourceValueFromProperties(eclipxPropertyFile)
		.getProperty(EclipxEnumerator.ECLIPX_NEWQUOTE_BUTTON.name()), seleniumWebDriver);

		Thread.sleep(20000);
		clickOnButtonByXpath("(//div[contains(@class,'q-field__native row items-center')])[1]", seleniumWebDriver);

		Thread.sleep(10000);
		clickOnButtonByXpath("//div[contains(@class,'q-virtual-scroll__content')]//div[@class='q-item__label']", seleniumWebDriver);

		Thread.sleep(10000);
		clickOnButtonByXpath("(//div[@role='radio'])[1]", seleniumWebDriver);

		Thread.sleep(10000);
		clickOnButtonByXpath("//div[contains(text(),'Van')]//parent::div", seleniumWebDriver);

		Thread.sleep(10000);
		clickOnButtonByXpath("//div[contains(text(),'Search')]", seleniumWebDriver);

		Thread.sleep(10000);
		clickOnButtonByXpath("//div[contains(@class,'q-field__native row items-center')]", seleniumWebDriver);

		Thread.sleep(20000);
		clickOnButtonByXpath("//div[contains(@class,'q-virtual-scroll__content')]//div[contains(text(),'Transit Custom')]", seleniumWebDriver);

		Thread.sleep(10000);
		clickOnButtonByXpath("(//div[contains(@class,'q-img__content absolute-full')])[1]", seleniumWebDriver);


		Thread.sleep(10000);
		clickOnButtonByXpath("(//div[contains(@class,'q-field__native row items-center')])[1]", seleniumWebDriver);


		Thread.sleep(8000);
		clickOnButtonByXpath("//div[@class='q-item__label'] [text()='12 months']", seleniumWebDriver);



		Thread.sleep(8000);
		clickOnButtonByXpath("(//div[contains(@class,'q-field__native row items-center')])[2]", seleniumWebDriver);


		Thread.sleep(8000);
		clickOnButtonByXpath("//div[@class='q-item__label'][text()='10000km']", seleniumWebDriver);



		Thread.sleep(8000);
		clickOnButtonByXpath("//div[text()='Next']", seleniumWebDriver);



		log.info("Exited clickLogInbutton method of eclipxPage");



		}

}
