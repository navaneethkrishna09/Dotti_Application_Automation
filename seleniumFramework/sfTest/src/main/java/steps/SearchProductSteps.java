package steps;

import applicationcustomexceptions.ProductNotFoundException;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.ElementNotFoundException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.StaleElementReferenceException;
import uipages.SearchProductPage;

import java.io.IOException;

public class SearchProductSteps {

    private SearchProductPage searchProductPage = new SearchProductPage();

    @When("User click on {string} menu header")
    public void userClickOnMenuHeader(String menuHeaderName) {
        try {
            searchProductPage.clickOnMenuHeader(menuHeaderName);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        }
    }

    @And("User click on {string} menu and select size {string}")
    public void userClickOnMenuAndSelectSize(String menuName, String size) {
        try {
            searchProductPage.selectMenuTab(menuName);
            searchProductPage.selectSizeFromMenu(size);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (InterruptedException | IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (WebDriverInstanceNullException | ElementNotFoundException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        }
    }

    @Then("confirm if the product contains the searched size by traversing through all the products")
    public void confirmIfTheProductContainsTheSearchedSizeByTraversingThroughAllTheProducts() {
        try {
            searchProductPage.traverseSizeProductList();
        } catch (InterruptedException | ProductNotFoundException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (WebDriverInstanceNullException | ElementNotFoundException | InvalidInputException |StaleElementReferenceException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @Then("Traverse the product list and confirm if product contains {string} text")
    public void traverseTheProductListAndConfirmIfProductContainsText(String confirmString) {
        try {
            searchProductPage.traverseOfferProductList(confirmString);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (WebDriverInstanceNullException | InvalidInputException | ElementNotFoundException | ElementNotInteractableException | StaleElementReferenceException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (ProductNotFoundException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }
}
