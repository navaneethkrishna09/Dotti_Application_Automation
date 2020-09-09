package uipages;

import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.log4testng.Logger;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.base.BaseTestFixture;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;

import static org.junit.Assert.*;

public class facebookLoginPage extends BasePage {

	public WebDriver driver;
	String scenarioName;
	Properties prop;
	String propertyPath = "/facebookPage.properties";
	final static Logger log = Logger.getLogger(facebookLoginPage.class);
	
	public facebookLoginPage() {
		driver = get_seleniumWebDriver();
		scenarioName = BaseTestFixture.scenarioName;
	}
	
	public void propertyRead()
	{
		prop = new Properties();
		try {
			prop = new ResourceRead().getResourceValueFromProperties(propertyPath);
		} catch (ResourceCustomException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void verifyLoginPage()
	{	
		log.info("Inside VerifyLogin Method");
		propertyRead();
		WebElement element = driver.findElement(By.xpath(prop.getProperty("FACEBOOK_TITLE_LOCATOR")));
		Assert.assertEquals(element.getText(),"Facebook helps you connect and share with the people in your life.");
		log.info("Exiting VerifyLogin Method");
	}
	
	public void credentialEntryLogin(String username,String password)
	{
		try {
			propertyRead();
			findTextboxAndSetValueByXpath(prop.getProperty("FACEBOOK_EMAIL_LOCATOR"),username,driver);
			findTextboxAndSetValueByXpath(prop.getProperty("FACEBOOK_PASSWORD_LOCATOR"),password,driver);
		}
		catch (WebDriverInstanceNullException e) {
			e.printStackTrace();
		} catch (InvalidInputException e) {
			e.printStackTrace();
		}
		
	}
	
	public void loginButtonClick()
	{
		try {
			propertyRead();
			clickOnButtonByXpath(prop.getProperty("FACEBOOK_LOGIN_BUTTON_LOCATOR"),driver);
		}
		catch (WebDriverInstanceNullException e) {
			e.printStackTrace();
		} catch (InvalidInputException e) {
			e.printStackTrace();
		}
		
	}
	
	public void errorMessageVerify()
	{
		
		propertyRead();
		WebElement element = driver.findElement(By.xpath(prop.getProperty("FACEBOOK_INVALID_ERROR_LOCATOR")));
		Assert.assertEquals(element.getText(),"The password that you've entered is incorrect. Forgotten password?");
	}
	
	public void homePageVerify()
	{
		propertyRead();
		WebElement element = driver.findElement(By.xpath(prop.getProperty("FACEBOOK_HOME_PAGE_ID")));
		Assert.assertEquals(element.getText(),"Navaneeth");
	}
}
