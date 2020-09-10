package steps;

import com.seleniumframework.customexceptions.ApplicationCustomException;

import applicationcustomexceptions.InvalidLoginException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import uipages.DottiSignInPage;

public class DottiSignInSteps {

	private DottiSignInPage signinObject = new DottiSignInPage();
	
	@Then("^User clicks on sign in menu option$")
	public void signInOptionClick()
	{
		signinObject.signInOptionClick();
	}
	
	@And("^Verifies the sign in page$")
	public void signInPageVerify()
	{
		signinObject.signInPageVerify();
	}
	
	@Then("^User enters invalid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void credentialEntry(String email,String password)
	{
		signinObject.credentialEntry(email,password);
	}
	
	@And("^Clicks on Sign in button$")
	public void signInButtonClick()
	{
		signinObject.signInButtonClick();
	}
	
	@Then("^Check if the error message is displayed$")
	public void errorMsgCheck() throws InvalidLoginException
	{
		signinObject.errorMsgCheck();
	}
	
}
