package uipages;

import applicationcustomexceptions.*;
import com.seleniumframework.base.BasePage;
import com.seleniumframework.customReport.CustomExtendReport;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.ElementNotFoundException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;
import enumerators.CheckoutProductEnumerator;
import io.restassured.filter.log.UrlDecoder;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.time.Instant;
import java.util.*;

public class CheckoutProductPage extends BasePage {
    final static Logger log = Logger.getLogger(CheckoutProductPage.class);

    private String checkoutProductPropertyFile = "/CheckoutProductPageResource.properties";

    private WebDriver seleniumWebDriver;

    private File checkDownloaded;

    private File outputPath;

    private String downloadFileName = "";

    private int timeOut = -1;

    private String paymentParentWindow;

    public CheckoutProductPage() {
        this.seleniumWebDriver = get_seleniumWebDriver();
    }

    public void userClickOnLink(String linkTextValue) throws WebDriverInstanceNullException, ElementNotFoundException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered userClickOnLink method of CheckoutProductPage");
        String xpathValue = null;
        if (linkTextValue.equalsIgnoreCase("Shoes & Accessories")) {
            xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.HOME_PAGE_SHOESACCESSORIES_HEADER_XPATH.name());
            performFocusOnElementActionByXpath(xpathValue, seleniumWebDriver);
        }
        if (linkTextValue.equalsIgnoreCase("Belts & Bags")) {
            xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.SHOESACCESSORIES_BELT_AND_BAGS.name());
            clickOnButtonByXpath(xpathValue, seleniumWebDriver);
        }

        /*if (linkTextValue.equalsIgnoreCase("New in")) {
            xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(SelectProductEnumerator.NEW_IN_LINK_TEXT_XPATH.name());
            performFocusOnElementActionByXpath(xpathValue, seleniumWebDriver);
        }
        if (linkTextValue.equalsIgnoreCase("Shoes & Accessories")) {
            xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(SelectProductEnumerator.SHOES_AND_ACCESSORIES_LINK_TEXT_XPATH.name());
            clickOnButtonByXpath(xpathValue, seleniumWebDriver);
        }
        if (linkTextValue.equalsIgnoreCase("Offers")) {
            xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(SelectProductEnumerator.OFFERS_LINK_TEXT_XPATH.name());
            performFocusOnElementActionByXpath(xpathValue, seleniumWebDriver);
        }
        if (linkTextValue.equalsIgnoreCase("3 For $10 Socks")) {
            xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(SelectProductEnumerator.SOCKS_OFFER_LINK_TEXT_XPATH.name());
            clickOnButtonByXpath(xpathValue, seleniumWebDriver);
        }*/
        log.info("Exited userClickOnLink method of CheckoutProductPage");
    }

    public void checkForPageTitle(String pageTittle) throws PageTittleMissmatchException, InterruptedException {
        log.info("Entered checkForPageTitle method of CheckoutProductPage");
        Thread.sleep(1000);
        if (pageTittle.equals(getPageTitle(seleniumWebDriver))) {
            Assert.assertEquals(pageTittle, getPageTitle(seleniumWebDriver));
        } else {
            CustomExtendReport.addStatusToReport(CustomExtendReport.ReportStatus.FAIL, "Actual page tittle : " + pageTittle + " doesn't match with the expected page tittle :" + getPageTitle(seleniumWebDriver));
            throw new PageTittleMissmatchException("Actual page tittle : " + pageTittle + " doesn't match with the expected page tittle :" + getPageTitle(seleniumWebDriver));
        }
        log.info("Exited checkForPageTitle method of CheckoutProductPage");
    }

    public void checkForOrderNumber() throws OrderPlaceFailureException, FraudCardPaymentException, InterruptedException, WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered checkForOrderNumber method of CheckoutProductPage");
        Thread.sleep(3000);
        Properties properties = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile);
        String pageTitile = properties.getProperty(CheckoutProductEnumerator.SHIPPING_AND_BILLING_PAGE_TITLE.name());
        if (pageTitile.equalsIgnoreCase(getPageTitle(seleniumWebDriver))) {
            String errorMessageBoxXpath = properties.getProperty(CheckoutProductEnumerator.CHECKOUT_ERROR_MESSAGE_BOX_XPATH.name());
            if (isElementPresent(By.xpath(errorMessageBoxXpath), getElementFindTimeOut(), seleniumWebDriver)) {
                WebElement errorTextElement = getWebElementPropertiesByXpath(errorMessageBoxXpath, seleniumWebDriver);
                if (!errorTextElement.getText().isEmpty()) {
                    throw new FraudCardPaymentException("Payment with fraud credit/debit card detected");
                }
            }
        }
        String orderNumberXpath = properties.getProperty(CheckoutProductEnumerator.ORDER_NUMBER_NOTIFICATION_XPATH.name());
        WebElement orderNumberElement = getWebElementPropertiesByXpath(orderNumberXpath, seleniumWebDriver);
        if (isElementPresent(orderNumberElement, getElementFindTimeOut(), seleniumWebDriver)) {
            Assert.assertTrue(true);
        } else {
            CustomExtendReport.addStatusToReport(CustomExtendReport.ReportStatus.FAIL, "Order is not placed properly");
            throw new OrderPlaceFailureException("Order is not placed properly");
        }
        log.info("Exited checkForOrderNumber method of CheckoutProductPage");
    }

    public void userClickOnProduct(String productName) throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered userClickOnProduct method of CheckoutProductPage");
        String xpathValue = null;
        switch (productName) {
            case "Macrame Sling Bag": {
                xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.MACRAME_SLING_BAG_PRODUCT_XPATH.name());
                clickOnButtonByXpath(xpathValue, seleniumWebDriver);
                break;
            }
            case "Oval Chain Belt": {
                xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.OVAL_CHAIN_BELT_PRODUCT_XPATH.name());
                if (isConstantValuePresent(xpathValue)) {
                    scrollToViewWebElement(seleniumWebDriver, seleniumWebDriver.findElement(By.xpath(xpathValue)));
                    WebDriverWait wait = CreateWebDriverWait(getElementFindTimeOut(), seleniumWebDriver);
                    wait.until(ExpectedConditions.visibilityOf(seleniumWebDriver.findElement(By.xpath(xpathValue))));
                }
                clickOnButtonByXpath(xpathValue, seleniumWebDriver);
                break;
            }
            case "Bum Bag": {
                xpathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BUM_BAG_PRODUCT_XPATH.name());
                if (isConstantValuePresent(xpathValue)) {
                    scrollToViewWebElement(seleniumWebDriver, seleniumWebDriver.findElement(By.xpath(xpathValue)));
                    WebDriverWait wait = CreateWebDriverWait(getElementFindTimeOut(), seleniumWebDriver);
                    wait.until(ExpectedConditions.visibilityOf(seleniumWebDriver.findElement(By.xpath(xpathValue))));
                }
                clickOnButtonByXpath(xpathValue, seleniumWebDriver);
                break;
            }
        }
        log.info("Exited userClickOnProduct method of CheckoutProductPage");
    }

    public void clickOnAddToBagButton() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered clickOnAddToBagButton method of CheckoutProductPage");
        String addToBagButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.ADD_TO_BAG_BUTTON_XPATH.name());
        WebElement addToBagButtonElement = getWebElementPropertiesByXpath(addToBagButtonXpath, seleniumWebDriver);
        if (isElementPresent(addToBagButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            // scrollToViewWebElement(seleniumWebDriver,addToBagButtonElement);
            clickOnButtonByXpath(addToBagButtonXpath, seleniumWebDriver);
            Thread.sleep(1000);
        }
        log.info("Exited clickOnAddToBagButton method of CheckoutProductPage");
    }

    public void clickOnShoppingCartButton() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered clickOnShoppingCartButton method of CheckoutProductPage");
        Thread.sleep(4000);
        clickOnButtonByXpath(new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.SHOPPING_CART_BUTTON_XPATH.name()), seleniumWebDriver);
        log.info("Exited clickOnShoppingCartButton method of CheckoutProductPage");
    }

    public void isProductPresentInShoppingBag(String productName) throws WebDriverInstanceNullException, ResourceCustomException, IOException, ProductNotFoundException {
        log.info("Entered isProductPresentInShoppingBag method of CheckoutProductPage");
        boolean gotProduct = false;
        if (productName == null) {
            productName = dynamicProductName;
        }
        String xPathValue = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.SHOPPING_BAG_PRODUCTS_NAME_XPATH.name());
        List<WebElement> webElementList = getWebElementsProperties(By.xpath(xPathValue), seleniumWebDriver);
        for (WebElement element : webElementList) {
            System.out.println(element.getText());
            if (element.getText().equals(productName)) {
                gotProduct = true;
                Assert.assertEquals(productName, element.getText());
                break;
            }
        }
        if (!gotProduct) {
            throw new ProductNotFoundException(productName + " product not found in shopping cart");
        }
        log.info("Exited isProductPresentInShoppingBag method of CheckoutProductPage");
    }

    public void downloadFileFromWebpage(String productName) throws WebDriverInstanceNullException, InvalidInputException, IOException, ResourceCustomException {
        log.info("Entered downloadFileFromWebpage method of CheckoutProductPage");
        String imageXpath = "";
        WebElement imageElement;
        String urlToDownload = "";
        String downloadFolder = new ResourceRead().getResourceValueFromXML().getProperty("ImageCompareTargetLocation");
        outputPath = new File(downloadFolder);
        // create the folder structure if it does not exist
        outputPath.mkdirs();
        // sometimes we might be bypassing login or need login credentials created by cookies.We can create a hashmap of cookies if we need to
        Map<String, String> cookies = new HashMap();
        // sometimes our access controls might be via headers so I might need to set those up.We can create a hashmap of headers if we need to
        Map<String, String> headers = new HashMap();
        switch (productName) {
            case "Macrame Sling Bag": {
                imageXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.MACRAME_SLING_BAG_IMAGE_XPATH.name());
                imageElement = getWebElementPropertiesByXpath(imageXpath, seleniumWebDriver);
                urlToDownload = imageElement.getAttribute("src");
                log.info("urlToDownload before encode =" + urlToDownload);
                break;
            }
            case "Oval Chain Belt": {
                imageXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.OVAL_CHAIN_BELT_IMAGE_XPATH.name());
                imageElement = getWebElementPropertiesByXpath(imageXpath, seleniumWebDriver);
                urlToDownload = imageElement.getAttribute("src");
                log.info("urlToDownload before encode =" + urlToDownload);
                break;
            }
        }
        urlToDownload = UrlDecoder.urlDecode(urlToDownload, Charset.defaultCharset(), false);
        log.info("urlToDownload after encode =" + urlToDownload);
        productName = productName.replace(" ", "_");
        downloadFileName = productName + ".png";
        // if the file already exists then it will delete it
        checkDownloaded = new File(outputPath.getPath(), downloadFileName);
        if (checkDownloaded.exists()) {
            checkDownloaded.delete();
        }
        // get image using RestAssured
        downloadFileUsingRestAssured(cookies, headers, urlToDownload, outputPath, downloadFileName);
        log.info("Exited downloadFileFromWebpage method of CheckoutProductPage");
    }

    public void isDownloadComplete() throws FileDownloadFailureException {
        log.info("Entered isDownloadComplete method of CheckoutProductPage");
        if (!outputPath.getPath().isEmpty() && !downloadFileName.equals("")) {
            checkDownloaded = new File(outputPath.getPath(), downloadFileName);
            if (checkDownloaded.exists()) {
                Assert.assertTrue(true);
            } else {
                throw new FileDownloadFailureException("Failed to download the file");
            }
        }
        log.info("Exited isDownloadComplete method of CheckoutProductPage");
    }

    public void productClickAndNavigate() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered productClickAndNavigate method of CheckoutProductPage");
        timeOut = getElementFindTimeOut();
        String productXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.$2ND_ROW_7TH_COLM_BELT_AND_BAGS_PRODUCT_XPATH.name());
        WebElement productElement = getWebElementPropertiesByXpath(productXpath, seleniumWebDriver);
        if (isElementPresent(productElement, timeOut, seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, productElement);
            clickOnButtonByXpath(productXpath, seleniumWebDriver);
            String productNameXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.PRODUCT_PAGE_HEADING_XPATH.name());
            WebElement productNameElement = getWebElementPropertiesByXpath(productNameXpath, seleniumWebDriver);
            if (isElementPresent(productNameElement, timeOut, seleniumWebDriver)) {
                dynamicProductName = productNameElement.getText();
                log.info("The product selected was : " + dynamicProductName);
            }
        }
        log.info("Exited productClickAndNavigate method of CheckoutProductPage");
    }

    public void increaseProductQuatity(int count) throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered increaseProductQuatity method of CheckoutProductPage");
        String increaseButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.INCREASE_QUANTITY_BUTTON_XPATH.name());
        WebElement buttonElement = getWebElementPropertiesByXpath(increaseButtonXpath, seleniumWebDriver);
        if (isElementPresent(buttonElement, timeOut, seleniumWebDriver)) {
            //scrollToViewWebElement(seleniumWebDriver, buttonElement);
            Thread.sleep(1000);
            for (int i = 1; i < count; i++) {
                clickOnButtonByXpath(increaseButtonXpath, seleniumWebDriver);
            }
        }
        log.info("Exited increaseProductQuatity method of CheckoutProductPage");
    }

    public void selectDeliveryMethod(String deliveryMethod) throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered selectDeliveryMethod method of CheckoutProductPage");
        if (isConstantValuePresent(deliveryMethod)) {
            String deliveryRadioXpath = null;
            switch (deliveryMethod) {
                case "Standard Delivery": {
                    deliveryRadioXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.STANDARD_DELIVERY_RADIO_BUTTON_XPATH.name());
                    break;
                }
                case "Express Delivery": {
                    deliveryRadioXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.EXPRESS_DELIVERY_RADIO_BUTTON_XPATH.name());
                    break;
                }
            }
            WebElement radioElement = getWebElementPropertiesByXpath(deliveryRadioXpath, seleniumWebDriver);
            if (isElementPresent(radioElement, getElementFindTimeOut(), seleniumWebDriver)) {
                //scrollToViewWebElement(seleniumWebDriver,radioElement);
                Thread.sleep(2000);
                selectRadioButtonByXpath(deliveryRadioXpath, seleniumWebDriver);
                Thread.sleep(1000);
            }
        }
        log.info("Exited selectDeliveryMethod method of CheckoutProductPage");
    }

    public void clickOnCheckoutButton() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered clickOnCheckoutButton method of CheckoutProductPage");
        String chekoutButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.CHECKOUT_BUTTON_XPATH.name());
        WebElement checkoutButtonElement = getWebElementPropertiesByXpath(chekoutButtonXpath, seleniumWebDriver);
        if (isElementPresent(checkoutButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, checkoutButtonElement);
            Thread.sleep(1000);
            clickOnButtonByXpath(chekoutButtonXpath, seleniumWebDriver);
        }
        log.info("Exited clickOnCheckoutButton method of CheckoutProductPage");
    }

    public void fillGuestEmailIdForCheckout() throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered fillGuestEmailIdForCheckout method of CheckoutProductPage");
        String emailTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.GUEST_CHECKOUT_FORM_EMAIL_TEXTBOX_XPATH.name());
        WebElement emailTextBoxElement = getWebElementPropertiesByXpath(emailTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(emailTextBoxElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, emailTextBoxElement);
            long randomNum = Instant.now().toEpochMilli() % 1000;
            Random r = new Random();
            String randomString = "";
            for (int i = 0; i < 3; i++) {
                char randomChar = (char) (97 + r.nextInt(25));
                randomString = randomString + randomChar;
            }
            String email = "guest" + randomString + +randomNum + "@gmail.com";
            findTextboxAndSetValueByXpath(emailTextBoxXpath, email, seleniumWebDriver);
        }
        log.info("Exited fillGuestEmailIdForCheckout method of CheckoutProductPage");
    }

    public void fillGuestEmailIdForCheckout(String emailId) throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered fillGuestEmailIdForCheckout with emailID method of CheckoutProductPage");
        String emailTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.GUEST_CHECKOUT_FORM_EMAIL_TEXTBOX_XPATH.name());
        WebElement emailTextBoxElement = getWebElementPropertiesByXpath(emailTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(emailTextBoxElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, emailTextBoxElement);
            findTextboxAndSetValueByXpath(emailTextBoxXpath, emailId, seleniumWebDriver);
        }
        log.info("Exited fillGuestEmailIdForCheckout with emailID method of CheckoutProductPage");
    }

    public void clickOnGuestCheckoutButton() throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InvalidCheckoutEmailIDException {
        log.info("Entered clickOnGuestCheckoutButton method of CheckoutProductPage");
        String checkoutButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.GUEST_CHECKOUT_FORM_CHECKOUT_BUTTON.name());
        WebElement checkoutButtonElement = getWebElementPropertiesByXpath(checkoutButtonXpath, seleniumWebDriver);
        if (isElementPresent(checkoutButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, checkoutButtonElement);
            clickOnButtonByXpath(checkoutButtonXpath, seleniumWebDriver);
        }
        String guesTEmailErrorXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.GUEST_CHECKOUT_EMAILID_ERROR_XPATH.name());
        if (isElementPresent(By.xpath(guesTEmailErrorXpath), getElementFindTimeOut(), seleniumWebDriver)) {
            throw new InvalidCheckoutEmailIDException("Invalid guest email Id");
        }
        log.info("Exited clickOnGuestCheckoutButton method of CheckoutProductPage");
    }

    public void setFirstNameAndLastName(String firstName, String lastName) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered setFirstNameAndLastName method of CheckoutProductPage");
        String firstNameTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BILLING_ADDRESS_FIRSTNAME_TEXTBOX_XPATH.name());
        String lastNameTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BILLING_ADDRESS_LASTNAME_TEXTBOX_XPATH.name());
        WebElement firstNameElement = getWebElementPropertiesByXpath(firstNameTextBoxXpath, seleniumWebDriver);
        WebElement lastNameElement = getWebElementPropertiesByXpath(lastNameTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(firstNameElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, firstNameElement);
            findTextboxAndSetValueByXpath(firstNameTextBoxXpath, firstName, seleniumWebDriver);
        }
        if (isElementPresent(lastNameElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, lastNameElement);
            findTextboxAndSetValueByXpath(lastNameTextBoxXpath, lastName, seleniumWebDriver);
        }
        log.info("Exited setFirstNameAndLastName method of CheckoutProductPage");
    }

    public void setStreetAddressValue(String address) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered setStreetAddressValue method of CheckoutProductPage");
        String streetAddressTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BILLING_ADDRESS_ADDRESS1_TEXTBOX_XPATH.name());
        WebElement streetAddressTextElement = getWebElementPropertiesByXpath(streetAddressTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(streetAddressTextElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, streetAddressTextElement);
            findTextboxAndSetValueByXpath(streetAddressTextBoxXpath, address, seleniumWebDriver);
        }
        log.info("Exited setStreetAddressValue method of CheckoutProductPage");
    }

    public void setSuburbValue(String suburbValue) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered setSuburbValue method of CheckoutProductPage");
        String suburbTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BILLING_ADDRESS_CITY_TEXTBOX_XPATH.name());
        WebElement suburbTextElement = getWebElementPropertiesByXpath(suburbTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(suburbTextElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, suburbTextElement);
            findTextboxAndSetValueByXpath(suburbTextBoxXpath, suburbValue, seleniumWebDriver);
        }
        log.info("Exited setSuburbValue method of CheckoutProductPage");
    }

    public void setPostCodeValue(String postCodeValue) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered setPostCodeValue method of CheckoutProductPage");
        String postCodeTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BILLING_ADDRESS_ZIPCODE_TEXTBOX_XPATH.name());
        WebElement postCodeTextElement = getWebElementPropertiesByXpath(postCodeTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(postCodeTextElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, postCodeTextElement);
            findTextboxAndSetValueByXpath(postCodeTextBoxXpath, postCodeValue, seleniumWebDriver);
        }
        log.info("Exited setPostCodeValue method of CheckoutProductPage");
    }

    public void setPhoneNumberValue(String phoneNumberValue) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered setPostCodeValue method of CheckoutProductPage");
        String phoneNumberTextBoxXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BILLING_ADDRESS_PHONENO_TEXTBOX_XPATH.name());
        WebElement phoneNumberTextElement = getWebElementPropertiesByXpath(phoneNumberTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(phoneNumberTextElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, phoneNumberTextElement);
            findTextboxAndSetValueByXpath(phoneNumberTextBoxXpath, phoneNumberValue, seleniumWebDriver);
        }
        log.info("Exited setPostCodeValue method of CheckoutProductPage");
    }

    public void selectStateValue(String state) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered selectStateValue method of CheckoutProductPage");
        String stateDropDownXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.BILLING_ADDRESS_STATE_SELECTBOX_XPATH.name());
        WebElement stateDropDownElement = getWebElementPropertiesByXpath(stateDropDownXpath, seleniumWebDriver);
        if (isElementPresent(stateDropDownElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, stateDropDownElement);
            selectDropDownValueThroughTextByXpath(stateDropDownXpath, state, seleniumWebDriver);
        }
        log.info("Exited selectStateValue method of CheckoutProductPage");
    }

    public void clickOnDeliveryOptionButton() throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered clickOnDeliveryOptionButton method of CheckoutProductPage");
        String deliveryOptionButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.DELIVERY_OPTION_BUTTON.name());
        WebElement deliveryOptionButtonElement = getWebElementPropertiesByXpath(deliveryOptionButtonXpath, seleniumWebDriver);
        if (isElementPresent(deliveryOptionButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, deliveryOptionButtonElement);
            clickOnButtonByXpath(deliveryOptionButtonXpath, seleniumWebDriver);
        }
        log.info("Exited clickOnDeliveryOptionButton method of CheckoutProductPage");
    }

    public void clickOnSecurePaymentButton() throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered clickOnSecurePaymentButton method of CheckoutProductPage");
        String securePaymentButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.SECURE_PAYMENT_BUTTON.name());
        WebElement securePaymentButtonElement = getWebElementPropertiesByXpath(securePaymentButtonXpath, seleniumWebDriver);
        if (isElementPresent(securePaymentButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, securePaymentButtonElement);
            Thread.sleep(2000);
            clickOnButtonByXpath(securePaymentButtonXpath, seleniumWebDriver);
        }
        log.info("Exited clickOnSecurePaymentButton method of CheckoutProductPage");
    }

    public void selectPaymentMethod(String paymentMethodValue) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered selectPaymentMethod method of CheckoutProductPage");
        switch (paymentMethodValue) {
            case "Credit/Debit Card": {
                String cardPaymentMethodXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.CREDIT_DEBIT_CARD_RADIOBUTTON_XPATH.name());
                Thread.sleep(1000);
                WebElement cardPaymentMethodElement = getWebElementPropertiesByXpath(cardPaymentMethodXpath, seleniumWebDriver);
                if (isElementPresent(cardPaymentMethodElement, getElementFindTimeOut(), seleniumWebDriver)) {
                    scrollToViewWebElement(seleniumWebDriver, cardPaymentMethodElement);
                    selectRadioButtonByXpath(cardPaymentMethodXpath, seleniumWebDriver);
                }
                break;
            }
            case "PayPal": {
                Properties properties = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile);
                String payPalPaymentMethodXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_RADIOBUTTON_XPATH.name());
                Thread.sleep(1000);
                WebElement payPalPaymentMethodElement = getWebElementPropertiesByXpath(payPalPaymentMethodXpath, seleniumWebDriver);
                if (isElementPresent(payPalPaymentMethodElement, getElementFindTimeOut(), seleniumWebDriver)) {
                    scrollToViewWebElement(seleniumWebDriver, payPalPaymentMethodElement);
                    selectRadioButtonByXpath(payPalPaymentMethodXpath, seleniumWebDriver);
                    String payPalIframeXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_IFRAME_XPATH.name());
                    WebElement payPalIframeElement = getWebElementPropertiesByXpath(payPalIframeXpath, seleniumWebDriver);
                    if (isExpectedCondition(ExpectedConditions.stalenessOf(payPalIframeElement), seleniumWebDriver)) {
                        payPalIframeElement = getWebElementPropertiesByXpath(payPalIframeXpath, seleniumWebDriver);
                    }
                    if (isElementPresent(payPalIframeElement, getElementFindTimeOut(), seleniumWebDriver)) {
                        //scrollToViewWebElement(seleniumWebDriver, payPalIframeElement);
                        switchToFrameByWebElement(payPalIframeElement, seleniumWebDriver);
                        String payPalButtonXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_BUTTON_XPATH.name());
                        Thread.sleep(4000);
                        clickOnButtonByXpath(payPalButtonXpath, seleniumWebDriver);
                    }
                }
                break;
            }
        }
        log.info("Exited selectPaymentMethod method of CheckoutProductPage");
    }

    public void enterPayPalPaymentDetails(String emailId, String password) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException, URLMissmatchException {
        log.info("Entered enterPayPalPaymentDetails method of CheckoutProductPage");
        Properties properties = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile);
        String parentWindow = seleniumWebDriver.getWindowHandle();
        for (String winHandle : seleniumWebDriver.getWindowHandles()) {
            seleniumWebDriver.switchTo().window(winHandle);
        }
        Thread.sleep(5000);
        String expectedURL = properties.getProperty(CheckoutProductEnumerator.PAYPAL_URL.name());
        String actualURL = getCurrentURL(seleniumWebDriver);
        actualURL = actualURL.split("\\?", 2)[0];
        if (!actualURL.equalsIgnoreCase(expectedURL)) {
            seleniumWebDriver.close();
            seleniumWebDriver.switchTo().window(parentWindow);
            Thread.sleep(2000);
            seleniumWebDriver.navigate().refresh();
            clickOnSecurePaymentButton();
            selectPaymentMethod("PayPal");
            Thread.sleep(5000);
            for (String winHandle : seleniumWebDriver.getWindowHandles()) {
                seleniumWebDriver.switchTo().window(winHandle);
            }
            actualURL = getCurrentURL(seleniumWebDriver);
            actualURL = actualURL.split("\\?", 2)[0];
            if (!actualURL.equalsIgnoreCase(expectedURL)) {
                throw new URLMissmatchException("Opened page is pointed to :" + actualURL + " URL than pointing to : " + expectedURL);
            }
        }
        String payPalEmailTextBoxXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_EMAILID_TEXTBOX_XPATH.name());
        WebElement payPalEmailIdElement = getWebElementPropertiesByXpath(payPalEmailTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(payPalEmailIdElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, payPalEmailIdElement);
            findTextboxAndSetValueByXpath(payPalEmailTextBoxXpath, emailId, seleniumWebDriver);
        }
        String nextButtonXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_NEXTBUTTON_XPATH.name());
        WebElement nextButtonElement = getWebElementPropertiesByXpath(nextButtonXpath, seleniumWebDriver);
        if (isElementPresent(nextButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, nextButtonElement);
            clickOnButtonByXpath(nextButtonXpath, seleniumWebDriver);
        }
        Thread.sleep(2000);
        String passwordTextBoxXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_PASSWORD_XPATH.name());
        WebElement passwordTextBoxElement = getWebElementPropertiesByXpath(passwordTextBoxXpath, seleniumWebDriver);
        if (isElementPresent(passwordTextBoxElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, passwordTextBoxElement);
            findTextboxAndSetValueByXpath(passwordTextBoxXpath, password, seleniumWebDriver);
        }
        String loginButtonXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_LOGIN_XPATH.name());
        WebElement loginButtonElement = getWebElementPropertiesByXpath(loginButtonXpath, seleniumWebDriver);
        if (isElementPresent(loginButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, loginButtonElement);
            clickOnButtonByXpath(loginButtonXpath, seleniumWebDriver);
        }
        Thread.sleep(5000);
        String paymentContinueXpath = properties.getProperty(CheckoutProductEnumerator.PAYPAL_PAYMENT_CONTINUE_BUTTON_XPATH.name());
        WebElement paymentContinueElement = getWebElementPropertiesByXpath(paymentContinueXpath, seleniumWebDriver);
        if (isElementPresent(paymentContinueElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, paymentContinueElement);
            clickOnButtonByXpath(paymentContinueXpath, seleniumWebDriver);
        }
        Thread.sleep(2000);
        seleniumWebDriver.switchTo().window(parentWindow);
        log.info("Exited enterPayPalPaymentDetails method of CheckoutProductPage");
    }

    public void fillCardDetails(String cardNumber, String expMonth, String expYear, String cvv) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered fillCardDetails method of CheckoutProductPage");
        Properties properties = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile);
        String cardNumberIFrameXpath = properties.getProperty(CheckoutProductEnumerator.CARD_NUMBER_IFRAME_XPATH.name());
        WebElement cardNumberIFrameElement = getWebElementPropertiesByXpath(cardNumberIFrameXpath, seleniumWebDriver);
        if (isElementPresent(cardNumberIFrameElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, cardNumberIFrameElement);
            switchToFrameByWebElement(cardNumberIFrameElement, seleniumWebDriver);
            String cardNumberTextBoxXpath = properties.getProperty(CheckoutProductEnumerator.CARD_NUMBER_TEXTBOX_XPATH.name());
            findTextboxAndSetValueByXpath(cardNumberTextBoxXpath, cardNumber, seleniumWebDriver);
            switchToDefaultWindow(seleniumWebDriver);
        }
        String expiryMonthIFrameXpath = properties.getProperty(CheckoutProductEnumerator.CARD_EXPIRY_MONTH_IFRAME_XPATH.name());
        WebElement expiryMonthIFrameElement = getWebElementPropertiesByXpath(expiryMonthIFrameXpath, seleniumWebDriver);
        if (isElementPresent(expiryMonthIFrameElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, expiryMonthIFrameElement);
            switchToFrameByWebElement(expiryMonthIFrameElement, seleniumWebDriver);
            String expiryMonthTextBoxXpath = properties.getProperty(CheckoutProductEnumerator.CARD_EXPIRY_MONTH_TEXTBOX_XPATH.name());
            findTextboxAndSetValueByXpath(expiryMonthTextBoxXpath, expMonth, seleniumWebDriver);
            switchToDefaultWindow(seleniumWebDriver);
        }
        String expiryYearIFrameXpath = properties.getProperty(CheckoutProductEnumerator.CARD_EXPIRY_YEAR_IFRAME_XPATH.name());
        WebElement expiryYearIFrameElement = getWebElementPropertiesByXpath(expiryYearIFrameXpath, seleniumWebDriver);
        if (isElementPresent(expiryYearIFrameElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, expiryYearIFrameElement);
            switchToFrameByWebElement(expiryYearIFrameElement, seleniumWebDriver);
            String expiryYearTextBoxXpath = properties.getProperty(CheckoutProductEnumerator.CARD_EXPIRY_YEAR_TEXTBOX_XPATH.name());
            findTextboxAndSetValueByXpath(expiryYearTextBoxXpath, expYear, seleniumWebDriver);
            switchToDefaultWindow(seleniumWebDriver);
        }
        String cvvIFrameXpath = properties.getProperty(CheckoutProductEnumerator.CARD_CVV_IFRAME_XPATH.name());
        WebElement cvvIFrameElement = getWebElementPropertiesByXpath(cvvIFrameXpath, seleniumWebDriver);
        if (isElementPresent(cvvIFrameElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, cvvIFrameElement);
            switchToFrameByWebElement(cvvIFrameElement, seleniumWebDriver);
            String cvvTextBoxXpath = properties.getProperty(CheckoutProductEnumerator.CARD_CVV_TEXTBOX_XPATH.name());
            findTextboxAndSetValueByXpath(cvvTextBoxXpath, cvv, seleniumWebDriver);
            switchToDefaultWindow(seleniumWebDriver);
        }
        log.info("Exited fillCardDetails method of CheckoutProductPage");
    }


    public void clickOnPlaceOrderbutton() throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered clickOnPlaceOrderbutton method of CheckoutProductPage");
        Thread.sleep(2000);
        String placeOrderButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.PLACE_ORDER_BUTTON_XPATH.name());
        WebElement placeOrderButtonElement = getWebElementPropertiesByXpath(placeOrderButtonXpath, seleniumWebDriver);
        if (isElementPresent(placeOrderButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, placeOrderButtonElement);
            //clickOnButtonByXpath(placeOrderButtonXpath, seleniumWebDriver);
            clickByJavaScriptWebElement(seleniumWebDriver,placeOrderButtonElement);
            Thread.sleep(2000);
        }
        log.info("Exited clickOnPlaceOrderbutton method of CheckoutProductPage");
    }

    public void clickOnHomePageLogobutton() throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered clickOnHomePageLogobutton method of CheckoutProductPage");
        String HomePageLogoButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.HOMEPAGE_LOGO_BUTTON_XPATH.name());
        WebElement HomePageLogoButtonElement = getWebElementPropertiesByXpath(HomePageLogoButtonXpath, seleniumWebDriver);
        if (isElementPresent(HomePageLogoButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, HomePageLogoButtonElement);
            clickOnButtonByXpath(HomePageLogoButtonXpath, seleniumWebDriver);
            Thread.sleep(2000);
        }
        log.info("Exited clickOnHomePageLogobutton method of CheckoutProductPage");
    }

    public void clickOnSignOut() throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, InterruptedException, ElementNotFoundException {
        log.info("Entered clickOnSignOut method of CheckoutProductPage");
        String myaccountLinkXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.MYACCOUNT_LINK_XPATH.name());
        WebElement myaccountElement = getWebElementPropertiesByXpath(myaccountLinkXpath, seleniumWebDriver);
        if (isElementPresent(myaccountElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, myaccountElement);
            performFocusOnElementActionByXpath(myaccountLinkXpath, seleniumWebDriver);
            Thread.sleep(2000);
        }
        String signOutButtonXpath = new ResourceRead().getResourceValueFromProperties(checkoutProductPropertyFile).getProperty(CheckoutProductEnumerator.SIGNOUT_LINK_XPATH.name());
        WebElement signOutButtonElement = getWebElementPropertiesByXpath(signOutButtonXpath, seleniumWebDriver);
        if (isElementPresent(signOutButtonElement, getElementFindTimeOut(), seleniumWebDriver)) {
            scrollToViewWebElement(seleniumWebDriver, signOutButtonElement);
            clickOnButtonByXpath(signOutButtonXpath, seleniumWebDriver);
            Thread.sleep(2000);
        }
        log.info("Exited clickOnSignOut method of CheckoutProductPage");
    }


    private void closePopModal(String popUpCloseXpath, int timeOut, WebDriver seleniumWebDriver) throws
            WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered closePopModal method of CheckoutProductPage");
        if (isConstantValuePresent(popUpCloseXpath) && isElementPresent(By.xpath(popUpCloseXpath), timeOut, seleniumWebDriver)) {
            clickOnButtonByXpath(popUpCloseXpath, seleniumWebDriver);
        }
        log.info("Exited closePopModal method of CheckoutProductPage");

    }

}
