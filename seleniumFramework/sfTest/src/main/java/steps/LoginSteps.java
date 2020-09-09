package steps;

import applicationcustomexceptions.InvalidUserNamePasswordException;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import uipages.LoginPage;

import java.io.IOException;

public class LoginSteps {

    private boolean errorOccured = false;

    private LoginPage loginPageObj = new LoginPage();

    @Given("^User opens URL \"([^\"]*)\"$")
    public void userOpensURL(String urlKey) {
        loginPageObj.launchHomePageURL(urlKey);
    }

    @Then("^User click on link having text \"([^\"]*)\"$")
    public void userClickOnLinkHavingText(String linkText) {
        try {
            loginPageObj.clickSignInLink();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
    public void userEntersEmailAsAndPasswordAs(String emailId, String password) {
        try {
            loginPageObj.setEmailIDAndPassword(emailId, password);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("^click on Sign in$")
    public void clickOnSignIn() {
        try {
            loginPageObj.clickSignInbutton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @Then("^Page Title should be \"([^\"]*)\"$")
    public void pageTitleShouldBe(String pageTittle) {
        try {
            errorOccured = loginPageObj.checkForAssertionStatement(pageTittle);
        } catch (InvalidUserNamePasswordException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }

    }

    @When("^User click on Logout link$")
    public void userClickOnLogoutLink() {
        try {
            if (!errorOccured) {
                loginPageObj.clickSignOutbutton();
            }
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("^Close browser$")
    public void closeBrowser() {
        try{
            loginPageObj.closeLoginFeatureBrowserInstance(errorOccured);
        }catch (WebDriverInstanceNullException ex){
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        }
    }

}
