package steps;

import org.junit.AfterClass;

import com.sun.tools.xjc.Driver;
import com.sun.tools.xjc.reader.xmlschema.bindinfo.BIConversion.User;

import io.cucumber.java.After;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import uipages.LoginPage;
import uipages.facebookLoginPage;

public class facebookLoginSteps {
	private LoginPage loginPageObj = new LoginPage();
	private facebookLoginPage facebooklogin = new facebookLoginPage();
	 
	@Given("^User is on the URL \"([^\"]*)\"$")
	    public void userOpensURL(String urlKey) {
	        loginPageObj.launchHomePageURL(urlKey);
	    }
	@And("^User Verifies the login page$")
		public void verifyPage()
		{
			facebooklogin.verifyLoginPage();
		}
	@When("^User enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void credentialEntry(String username,String password) {
		facebooklogin.credentialEntryLogin(username, password);
    }
	@Then("^User clicks on login button$")
	public void loginButton() {
		facebooklogin.loginButtonClick();
    }
	@Then("^User verifies the error message$")
	public void errorVerification() {
		facebooklogin.errorMessageVerify();
    }
	@Then("^User verifies the home page$")
	public void homePageVerification() {
		facebooklogin.homePageVerify();
    }
	@Then("^User closes the browser$")
	public void browserClose()
	{
		facebooklogin.driver.close();
	}
	
}
