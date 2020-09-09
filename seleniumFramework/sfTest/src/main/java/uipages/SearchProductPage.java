package uipages;

import applicationcustomexceptions.ProductNotFoundException;
import com.seleniumframework.base.BasePage;
import com.seleniumframework.base.BaseTestScripts;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.ElementNotFoundException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;
import enumerators.SearchProductEnumerator;
import enumerators.CheckoutProductEnumerator;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.io.IOException;
import java.util.List;

public class SearchProductPage extends BasePage {
    final static Logger log = Logger.getLogger(SearchProductPage.class);

    private String searchProductPropertyFile = "/SearchProductResource.properties";

    private WebDriver seleniumWebDriver;
    public String scenarioName;
    public String sizeValue;
    int timeOut = -1;

    public SearchProductPage() {
        this.seleniumWebDriver = get_seleniumWebDriver();
        this.scenarioName = BaseTestScripts.scenarioName;
    }

    public void clickOnMenuHeader(String menuHeaderName) throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered clickOnMenuHeader method of SearchProductPage");
        String selectProductPropertyFile = "/CheckoutProductPageResource.properties";
        if (!menuHeaderName.isEmpty() && menuHeaderName != null) {
            scrollDownTheBrowser(seleniumWebDriver, 300);
            String xpathValue;
            if (menuHeaderName.equalsIgnoreCase("New in")) {
                xpathValue = new ResourceRead().getResourceValueFromProperties(selectProductPropertyFile).getProperty(CheckoutProductEnumerator.NEW_IN_LINK_TEXT_XPATH.name());
                if (!xpathValue.isEmpty() && xpathValue != null)
                    clickLinkByXpath(xpathValue, seleniumWebDriver);
            }
        }
        log.info("Exited clickOnMenuHeader method of SearchProductPage");
    }

    public void selectMenuTab(String menuTabName) throws WebDriverInstanceNullException, InvalidInputException, ElementNotFoundException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered selectMenuTab method of SearchProductPage");
        if (!menuTabName.isEmpty() && menuTabName != null) {
            String menuTabXpathLocator = null;
            switch (menuTabName) {
                case "size": {
                    timeOut = getElementFindTimeOut();
                    menuTabXpathLocator = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.SIZE_MENU_XPATH_LOCATOR.name());
                    if (isElementPresent(By.xpath(menuTabXpathLocator), timeOut, seleniumWebDriver)) {
                        System.out.println("menuTabXpathLocator = " + menuTabXpathLocator);
                        scrollDownTheBrowser(seleniumWebDriver, 250);
                        Thread.sleep(5000);
                        clickLinkByXpath(menuTabXpathLocator, seleniumWebDriver);
                    } else {
                        throw new ElementNotFoundException("Size menu tab is not available");
                    }
                    break;
                }
                default:
                    log.error("Not supported menu tab");
            }
        }
        log.info("Exited selectMenuTab method of SearchProductPage");
    }

    public void selectSizeFromMenu(String sizeValue) throws WebDriverInstanceNullException, InvalidInputException, ElementNotFoundException, ResourceCustomException, IOException, InterruptedException {
        log.info("Entered selectSizeFromMenu method of SearchProductPage");
        if (!sizeValue.isEmpty() && sizeValue != null) {
            String sizeValueXpathLocator = null;
            switch (sizeValue) {
                case "8": {
                    this.sizeValue = sizeValue;
                    sizeValueXpathLocator = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.SIZE_8_MENU_XPATH_LOCATOR.name());
                    timeOut = getElementFindTimeOut();
                    if (isElementPresent(By.xpath(sizeValueXpathLocator), timeOut, seleniumWebDriver)) {
                        Thread.sleep(3000);
                        scrollDownTheBrowser(seleniumWebDriver, 250);
                        selectCheckBoxByXpath(sizeValueXpathLocator, seleniumWebDriver);
                    } else {
                        throw new ElementNotFoundException("Searched size is not available");
                    }
                }

            }
        }
        log.info("Exited selectSizeFromMenu method of SearchProductPage");
    }

    public void traverseOfferProductList(String confirmString) throws ProductNotFoundException, InterruptedException, ElementNotInteractableException, ElementNotFoundException, WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, StaleElementReferenceException {
        log.info("Entered traverseOfferProductList method of SearchProductPage");
        String offerProductListXpath = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.OFFER_SOCKS_PRODUCT_XPATH.name());
        String offerProductConfirmXpath = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.OFER_SOCKS_PRODUCT_CATOGORY_XPATH.name());
        String popUpCloseXpath = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.EMAIL_SIGNUP_POPUP_NO_THANK_YOU_XPATH.name());
        traverseWebElementList(offerProductListXpath, offerProductConfirmXpath, popUpCloseXpath, confirmString);
        log.info("Exited traverseOfferProductList method of SearchProductPage");
    }

    public void traverseSizeProductList() throws ProductNotFoundException, InterruptedException, ElementNotInteractableException, ElementNotFoundException, WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException,StaleElementReferenceException {
        log.info("Entered traverseSizeProductList method of SearchProductPage");
        String productListXpathLocator = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.SEARCHED_PRODUCT_ITEM_LIST_XPATH_LOCATOR.name());
        String popUpCloseXpath = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.EMAIL_SIGNUP_POPUP_NO_THANK_YOU_XPATH.name());
        String sizeChartXpathLocator = new ResourceRead().getResourceValueFromProperties(searchProductPropertyFile).getProperty(SearchProductEnumerator.INDIVITUAL_PRODUCT_SIZE_CHART_XPATH_LOCATOR.name());
        sizeChartXpathLocator = sizeChartXpathLocator + "'" + sizeValue + "')]";
        traverseWebElementList(productListXpathLocator, sizeChartXpathLocator, popUpCloseXpath, sizeValue);
        log.info("Exited traverseSizeProductList method of SearchProductPage");
    }

    public void traverseWebElementList(String webElementsListXpath, String webElementConfirmXpath, String popUpCloseXpath, String confirmString) throws ProductNotFoundException, InterruptedException, ElementNotInteractableException, ElementNotFoundException, WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException, StaleElementReferenceException {
        log.info("Entered traverseWebElementList method of SearchProductPage");
        timeOut = getElementFindTimeOut();
        if (isConstantValuePresent(webElementsListXpath)) {
            if (isElementPresent(By.xpath(webElementsListXpath), timeOut, seleniumWebDriver)) {
                List<WebElement> webElementList = getWebElementsProperties(By.xpath(webElementsListXpath), seleniumWebDriver);
                int elementCount = 0;
                for (WebElement element : webElementList) {
                    //checking if the element in stale or not
                    if (isExpectedCondition(ExpectedConditions.stalenessOf(element), seleniumWebDriver)) {
                        element = webElementList.get(elementCount);
                        Thread.sleep(3000);
                    }
                    if (isElementPresent(element, timeOut, seleniumWebDriver)) {
                        log.info("Element no : " + elementCount + " is " + element.getAttribute("title"));
                        scrollToViewWebElement(seleniumWebDriver, element);
                        element.click();
                        if (popUpCloseXpath != null && isExpectedCondition(ExpectedConditions.visibilityOf(getWebElementPropertiesByXpath(popUpCloseXpath, seleniumWebDriver)), seleniumWebDriver)) {
                            closePopModal(popUpCloseXpath, timeOut, seleniumWebDriver);
                        }
                        confirmTraveredWebElement(webElementConfirmXpath, confirmString, timeOut);
                        seleniumWebDriver.navigate().back();
                        Thread.sleep(2000);
                        if (!isElementPresent(By.xpath(webElementsListXpath), timeOut, seleniumWebDriver)) {
                            seleniumWebDriver.navigate().refresh();
                        }
                        webElementList = getWebElementsProperties(By.xpath(webElementsListXpath), seleniumWebDriver);
                    } else {
                        throw new ElementNotFoundException("Web element not found");
                    }
                    elementCount++;
                }

            } else {
                throw new ElementNotFoundException("Webelement list is not found");
            }
        }
        log.info("Exited traverseWebElementList method of SearchProductPage");
    }

    public void confirmTraveredWebElement(String webElementConfirmXpath, String confirmString, int timeOut) throws ProductNotFoundException, WebDriverInstanceNullException, ElementNotFoundException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered confirmTraveredWebElement method of SearchProductPage");
        if (isConstantValuePresent(webElementConfirmXpath) && isConstantValuePresent(confirmString)) {
            if (isElementPresent(By.xpath(webElementConfirmXpath), timeOut, seleniumWebDriver)) {
                WebElement element = getWebElementPropertiesByXpath(webElementConfirmXpath, seleniumWebDriver);
                if (isConstantValuePresent(element.getText()) && element.getText().equalsIgnoreCase(confirmString)) {
                    Assert.assertEquals(confirmString, element.getText());
                } else {
                    throw new ProductNotFoundException("Product not matching");
                }

            } else {
                throw new ElementNotFoundException("Web element not found in provided locator : " + webElementConfirmXpath);
            }
        }
        log.info("Exited confirmTraveredWebElement method of SearchProductPage");
    }

    private void closePopModal(String popUpCloseXpath, int timeOut, WebDriver seleniumWebDriver) throws WebDriverInstanceNullException, InvalidInputException, ResourceCustomException, IOException {
        log.info("Entered closePopModal method of SearchProductPage");
        if (isConstantValuePresent(popUpCloseXpath) && isElementPresent(By.xpath(popUpCloseXpath), timeOut, seleniumWebDriver)) {
            clickOnButtonByXpath(popUpCloseXpath, seleniumWebDriver);
        }
        log.info("Exited closePopModal method of SearchProductPage");

    }
}
