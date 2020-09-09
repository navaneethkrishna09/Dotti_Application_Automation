package steps;

import java.io.IOException;

import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;

import applicationcustomexceptions.InvalidUserNamePasswordException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import uipages.eclipxPage;

public class eclipxSteps {

	private eclipxPage eclipxPageObj = new eclipxPage();

	@When("User enters Username as {string} and Password as {string}")
	public void user_enters_Username_as_and_Password_as(String username, String password) {
		try {
			eclipxPageObj.enterUserNameAndPassword(username, password);
		} catch (WebDriverInstanceNullException | InvalidInputException ex) {
			new ExceptionHandeler().webDriverExceptionhandeler(ex);
		} catch (ResourceCustomException ex) {
			new ExceptionHandeler().resourceExceptionHandeler(ex);
		} catch (IOException ex) {
			new ExceptionHandeler().genricExceptionHandeler(ex);
		}
	}

	@And("click on Login")
	public void click_on_Login() {
		try {
			eclipxPageObj.clickLogInbutton();
		} catch (WebDriverInstanceNullException | InvalidInputException ex) {
			new ExceptionHandeler().webDriverExceptionhandeler(ex);
		} catch (ResourceCustomException ex) {
			new ExceptionHandeler().resourceExceptionHandeler(ex);
		} catch (IOException ex) {
			new ExceptionHandeler().genricExceptionHandeler(ex);
		}
	}

	@Then("new quote page should be opened")
	public void new_quote_page_should_be_opened() {
		try {
			eclipxPageObj.checkForAssertionStatement();
		} catch (InvalidUserNamePasswordException ex) {
			new ExceptionHandeler().applicationExceptionHandeler(ex);
		} catch (ResourceCustomException ex) {
			new ExceptionHandeler().resourceExceptionHandeler(ex);
		} catch (IOException | InvalidInputException |WebDriverInstanceNullException |InterruptedException ex) {
			new ExceptionHandeler().genricExceptionHandeler(ex);
		}
	}

}
