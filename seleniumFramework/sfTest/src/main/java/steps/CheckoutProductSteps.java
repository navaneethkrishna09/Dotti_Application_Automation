package steps;

import applicationcustomexceptions.*;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.ElementNotFoundException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import uipages.ImageComparisonPage;
import uipages.CheckoutProductPage;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CheckoutProductSteps {

    private CheckoutProductPage checkoutProductPageobj = new CheckoutProductPage();
    private ImageComparisonPage imageComparisonPage = new ImageComparisonPage();
    private Map<String, String> fileHashCode = new HashMap<>();

    @When("User hover on {string} link")
    public void userHoverOnLink(String linkTextValue) {
        try {
            checkoutProductPageobj.userClickOnLink(linkTextValue);
        } catch (WebDriverInstanceNullException | ElementNotFoundException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException | IOException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        }
    }

    @When("^User click on \"([^\"]*)\" link$")
    public void userClickOnLink(String linkTextValue) {
        try {
            checkoutProductPageobj.userClickOnLink(linkTextValue);
        } catch (WebDriverInstanceNullException | ElementNotFoundException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException | IOException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        }
    }

    @Then("^Page Title has to be \"([^\"]*)\"$")
    public void pageTitleHasToBe(String pageTittle) {
        try {
            checkoutProductPageobj.checkForPageTitle(pageTittle);
        } catch (PageTittleMissmatchException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        } catch (InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @When("^User click on product having text \"([^\"]*)\"$")
    public void userClickOnProductHavingText(String productName) {
        try {
            checkoutProductPageobj.userClickOnProduct(productName);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @When("^User click on Add to Bag button$")
    public void userClickOnAddToBagButton() {
        try {
            checkoutProductPageobj.clickOnAddToBagButton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("^User click on Shopping bag link$")
    public void userClickOnShoppingBagLink() {
        try {
            checkoutProductPageobj.clickOnShoppingCartButton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @Then("^Shopping bag should contain \"([^\"]*)\" product$")
    public void shoppingBagShouldContainProduct(String productName) {
        try {
            checkoutProductPageobj.isProductPresentInShoppingBag(productName);
        } catch (WebDriverInstanceNullException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (ProductNotFoundException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }

    @When("User download image of product having text {string}")
    public void userDownloadImageOfProductHavingText(String productName) {
        try {
            checkoutProductPageobj.downloadFileFromWebpage(productName);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @Then("Image should be downloaded successfully")
    public void imageShouldBeDownloadedSuccessfully() {
        try {
            checkoutProductPageobj.isDownloadComplete();
        } catch (FileDownloadFailureException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }

    @When("user compare {string} file from source and target folder")
    public void userCompareFileFromSourceAndTargetFolder(String productName) {
        try {
            fileHashCode = imageComparisonPage.fetchSourceAndTargetFiles(productName);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (Exception ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }

    }

    @Then("Image should be same")
    public void imageShouldBeSame() {
        try {
            imageComparisonPage.isFileMatching(fileHashCode);
        } catch (FileMismatchException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        } catch (WebDriverInstanceNullException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        }
    }

    @When("User click on a product and navigate to the respective product page")
    public void userClickOnAProductAndNavigateToTheRespectiveProductPage() {
        try {
            checkoutProductPageobj.productClickAndNavigate();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }

    }

    @And("increase the quantity of the product to {string}")
    public void increaseTheQuantityOfTheProductTo(String quantity) {
        try {
            checkoutProductPageobj.increaseProductQuatity(Integer.parseInt(quantity));
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @Then("Shopping bag should contain the product")
    public void shoppingBagShouldContainTheProduct() {
        try {
            checkoutProductPageobj.isProductPresentInShoppingBag(null);
        } catch (WebDriverInstanceNullException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (ProductNotFoundException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }

    @When("User select {string} delivery method")
    public void userSelectDeliveryMethod(String deliveryMethod) {
        try {
            checkoutProductPageobj.selectDeliveryMethod(deliveryMethod);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User click on checkout button")
    public void userClickOnCheckoutButton() {
        try {
            checkoutProductPageobj.clickOnCheckoutButton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User clicks on guest checkout button")
    public void userClicksOnGuestCheckoutButton() {
        try {
            checkoutProductPageobj.clickOnGuestCheckoutButton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (InvalidCheckoutEmailIDException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }

    @When("User enters First name as {string} and Last name as {string}")
    public void userEntersFirstNameAsAndLastNameAs(String firstName, String lastName) {
        try {
            checkoutProductPageobj.setFirstNameAndLastName(firstName, lastName);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User enters address one as {string}")
    public void userEntersAddressOneAs(String address) {
        try {
            checkoutProductPageobj.setStreetAddressValue(address);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User enters suburb as {string}")
    public void userEntersSuburbAs(String suburb) {
        try {
            checkoutProductPageobj.setSuburbValue(suburb);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User selects state as {string}")
    public void userSelectsStateAs(String state) {
        try {
            checkoutProductPageobj.selectStateValue(state);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User enters postcode as {string}")
    public void userEntersPostcodeAs(String postCode) {
        try {
            checkoutProductPageobj.setPostCodeValue(postCode);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User enters phone number as {string}")
    public void userEntersPhoneNumberAs(String phoneNumber) {
        try {
            checkoutProductPageobj.setPhoneNumberValue(phoneNumber);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User clicks on continue to delivery option button")
    public void userClicksOnContinueToDeliveryOptionButton() {
        try {
            checkoutProductPageobj.clickOnDeliveryOptionButton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User clicks on continue to secure payment button")
    public void userClicksOnContinueToSecurePaymentButton() {
        try {
            checkoutProductPageobj.clickOnSecurePaymentButton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User selects on {string} payment method")
    public void userSelectsOnPaymentMethod(String paymentMethod) {
        try {
            checkoutProductPageobj.selectPaymentMethod(paymentMethod);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User enters card number as {string} expiry month as {string} expiry year as {string} cvv as {string}")
    public void userEntersCardNumberAsExpiryMonthAsExpiryYearAsCvvAs(String cardNumber, String expMonth, String expYear, String cvv) {
        try {
            checkoutProductPageobj.fillCardDetails(cardNumber, expMonth, expYear, cvv);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User clicks on place order button")
    public void userClicksOnPlaceOrderButton() {
        try {
            checkoutProductPageobj.clickOnPlaceOrderbutton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User enters paypal email is as {string} and password as {string}")
    public void userEntersPaypalEmailIsAsAndPasswordAs(String emailId, String password) {
        try {
            checkoutProductPageobj.enterPayPalPaymentDetails(emailId, password);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (URLMissmatchException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }

    @Then("There should be order number")
    public void thereShouldBeOrderNumber() {
        try {
            checkoutProductPageobj.checkForOrderNumber();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (OrderPlaceFailureException | FraudCardPaymentException ex) {
            new ExceptionHandeler().applicationExceptionHandeler(ex);
        }
    }

    @When("User enters the guest email")
    public void userEntersTheGuestEmail() {
        try {
            checkoutProductPageobj.fillGuestEmailIdForCheckout();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @When("User navigates to home page")
    public void userNavigatesToHomePage() {
        try {
            checkoutProductPageobj.clickOnHomePageLogobutton();
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @And("User signs out from his account")
    public void userSignsOutFromHisAccount() {
        try {
            checkoutProductPageobj.clickOnSignOut();
        } catch (WebDriverInstanceNullException | InvalidInputException | ElementNotFoundException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException | InterruptedException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }

    @When("User enters the guest email as {string}")
    public void userEntersTheGuestEmailAs(String emailId) {
        try {
            checkoutProductPageobj.fillGuestEmailIdForCheckout(emailId);
        } catch (WebDriverInstanceNullException | InvalidInputException ex) {
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }
    }
}
