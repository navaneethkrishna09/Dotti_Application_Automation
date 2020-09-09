package uipages;

import applicationcustomexceptions.InvalidUserNamePasswordException;
import com.seleniumframework.base.BasePage;
import com.seleniumframework.base.BaseTestScripts;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;
import enumerators.LoginPageEnumerator;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.IOException;

public class LoginPage extends BasePage {

    final static Logger log = Logger.getLogger(LoginPage.class);

    private String loginPropertyFile = "/LoginPageResource.properties";

    WebDriver seleniumWebDriver;
    public String scenarioName;

    public LoginPage() {
        this.seleniumWebDriver = get_seleniumWebDriver();
        this.scenarioName = BaseTestScripts.scenarioName;
    }

    public void launchHomePageURL(String url) {
        log.info("Entered launchHomePageURL method of LoginPage");
        System.out.println("!!!!!!!!!!!!!!!"+url);
        LaunchURL(url, seleniumWebDriver);
        log.info("Exited launchHomePageURL method of LoginPage");
    }

    public void clickSignInLink() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered clickSignInLink method of LoginPage");
        clickOnButtonByXpath(new ResourceRead().getResourceValueFromProperties(loginPropertyFile).getProperty(LoginPageEnumerator.SIGN_IN_LINK_TEXT_XPATH.name()), seleniumWebDriver);
        log.info("Exited clickSignInLink method of LoginPage");
    }

    public void setEmailIDAndPassword(String emailId, String password) throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered setEmailIDAndPassword method of LoginPage");
        findTextboxAndSetValueByXpath(new ResourceRead().getResourceValueFromProperties(loginPropertyFile).getProperty(LoginPageEnumerator.EMAIL_ID_TEXTBOX_XPATH.name()), emailId, seleniumWebDriver);
        findTextboxAndSetValueByXpath(new ResourceRead().getResourceValueFromProperties(loginPropertyFile).getProperty(LoginPageEnumerator.PASSWORD_TEXTBOX_XPATH.name()), password, seleniumWebDriver);
        log.info("Exited setEmailIDAndPassword method of LoginPage");
    }

    public void clickSignInbutton() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered clickSignInLink method of LoginPage");
        clickOnButtonByXpath(new ResourceRead().getResourceValueFromProperties(loginPropertyFile).getProperty(LoginPageEnumerator.SIGN_IN_IN_BUTTON_XPATH.name()), seleniumWebDriver);
        log.info("Exited clickSignInLink method of LoginPage");
    }

    public void clickSignOutbutton() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered clickSignOutbutton method of LoginPage");
        clickOnButtonByXpath(new ResourceRead().getResourceValueFromProperties(loginPropertyFile).getProperty(LoginPageEnumerator.SIGN_OUT_LINK_TEXT_XPATH.name()), seleniumWebDriver);
        log.info("Exited clickSignOutbutton method of LoginPage");
    }

    public boolean checkForErrorMessage() throws ResourceCustomException, IOException {
            log.info("Entered checkForErrorMessage method of LoginPage");
            boolean errorOccured = false;
            int timeOut = getElementFindTimeOut();
            String ERROR_MESSAGE_SPAN_XPATH = new ResourceRead().getResourceValueFromProperties(loginPropertyFile).getProperty(LoginPageEnumerator.ERROR_MESSAGE_SPAN_XPATH.name());
            String ERROR_MESSAGE_FOR_INVALID_PASSWORD = new ResourceRead().getResourceValueFromProperties(loginPropertyFile).getProperty(LoginPageEnumerator.ERROR_MESSAGE_FOR_INVALID_PASSWORD.name());
            if (isElementPresent(By.xpath(ERROR_MESSAGE_SPAN_XPATH), timeOut, seleniumWebDriver) || isElementPresent(By.xpath(ERROR_MESSAGE_FOR_INVALID_PASSWORD), timeOut, seleniumWebDriver)) {
                errorOccured = true;
            }
            log.info("Exited checkForErrorMessage method of LoginPage");
            return errorOccured;
    }

    public boolean checkForAssertionStatement(String pageTittle) throws InvalidUserNamePasswordException, ResourceCustomException, IOException {
        log.info("Entered checkForAssertionStatement method of LoginPage");
        System.out.println(scenarioName);
        boolean errorOccured = checkForErrorMessage();
        if (errorOccured) {
            throw new InvalidUserNamePasswordException("Invalid username and password");
        } else {
            Assert.assertEquals(pageTittle, getPageTitle(seleniumWebDriver));
        }
        log.info("Exited checkForAssertionStatement method of LoginPage");
        return errorOccured;
    }

    public void closeLoginFeatureBrowserInstance(boolean errorOccured) throws WebDriverInstanceNullException {
        log.info("Entered closeLoginFeatureBrowserInstance method of LoginPage");
        if (seleniumWebDriver != null && !errorOccured) {
            closeAllBrowserWindow(seleniumWebDriver);
        }
        log.info("Exited closeLoginFeatureBrowserInstance method of LoginPage");
    }

}
