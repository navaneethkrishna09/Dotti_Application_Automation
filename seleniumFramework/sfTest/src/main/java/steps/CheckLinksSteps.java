package steps;

import applicationcustomexceptions.PageTittleMissmatchException;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import uipages.CheckLinksPage;

import java.io.IOException;

public class CheckLinksSteps {

    private CheckLinksPage checkLinksPage = new CheckLinksPage();

    @When("clicks the header links and its sublinks")
    public void clicksTheHeaderLinksAndItsSublinks() {
        try {
            checkLinksPage.traverseHeaderLinks();
        } catch (WebDriverInstanceNullException | InvalidInputException | InterruptedException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException | IOException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (PageTittleMissmatchException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }

    }

    @Then("User should able to view its respective pages")
    public void userShouldAbleToViewItsRespectivePages() {
    }

    @When("clicks the {string} header links and its sublinks")
    public void clicksTheHeaderLinksAndItsSublinks(String headerLink) {
        try {
            checkLinksPage.checkSpecificHeader(headerLink);
        } catch (WebDriverInstanceNullException | InvalidInputException | InterruptedException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException | IOException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (PageTittleMissmatchException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }
}
