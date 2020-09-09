package uipages;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.customexceptions.ApplicationCustomException;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.ElementNotFoundException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;

public class DottiSignInPage extends BasePage {
	public static WebDriver driver;
	private String propertyPath = "/DottiPageResource.properties";
	
	public DottiSignInPage()
	{
		driver = get_seleniumWebDriver();
	}
	
	public void signInOptionClick()
	{
		String signInPath,signInButtonPath;
		try {
			signInPath = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("SIGN_IN_HOME_PAGE_LOCATOR");
			performFocusOnElementActionByXpath(signInPath, driver);
			signInButtonPath = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("SIGN_IN_DROPDOWN_LOCATOR");
			clickOnButtonByXpath(signInButtonPath, driver);
		} catch (ResourceCustomException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidInputException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ElementNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
	public void signInPageVerify()
	{
		String configTitle;
		try {
			configTitle = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("SIGN_IN_PAGE_TITLE");
			String title = getPageTitle(driver);
			Assert.assertEquals(title,configTitle);
		} catch (ResourceCustomException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}	
		
	}
	
	public void credentialEntry(String email,String password)
	{
		String emailPath,passwordPath;
		try {
			emailPath = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("EMAIL_ID_LOCATOR");
			findTextboxAndSetValueById(emailPath, email, driver);
			passwordPath = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("PASSWORD_ID_LOCATOR");
			findTextboxAndSetValueById(passwordPath, password, driver);
		} catch (ResourceCustomException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidInputException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
	public void signInButtonClick()
	{
		String signInButtonPath;
		try {
			signInButtonPath = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("SIGN_IN_BUTON_LOCATOR");
			clickButtonById(signInButtonPath, driver);
		} catch (ResourceCustomException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidInputException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
	public void errorMsgCheck() throws ApplicationCustomException
	{
		String errorMsgPath,errorMsgValue;
		try {
			errorMsgPath = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("ERROR_MSG_LOCATOR");
			errorMsgValue = new ResourceRead().getResourceValueFromProperties(propertyPath).getProperty("ERROR_MESSAGE_VALUE");
			List<WebElement> errorMsgElement = getElementsPropertiesByXpath(errorMsgPath,driver);
			if(!errorMsgElement.isEmpty())
			if(errorMsgElement.get(0).getText().contains(errorMsgValue))
					{
						throw new InvalidInputException("Invalid Login Attempt");
					}
		} catch (ResourceCustomException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidInputException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
