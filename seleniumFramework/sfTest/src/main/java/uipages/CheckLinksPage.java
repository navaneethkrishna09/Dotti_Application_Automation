package uipages;

import java.io.IOException;
import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.base.BaseTestScripts;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;

import applicationcustomexceptions.PageTittleMissmatchException;
import enumerators.CheckLinksEnumerator;

public class CheckLinksPage extends BasePage {
    final static Logger log = Logger.getLogger(CheckLinksPage.class);

    private String checkLinksPageResource = "/CheckLinksPageResource.properties";

    private WebDriver seleniumWebDriver;
    private String scenarioName;
    private int timeOut = -1;
    int headerMenuElementCount = 0;
    String headerMenuXpathValue = null;

    public CheckLinksPage() {
        this.seleniumWebDriver = get_seleniumWebDriver();
        this.scenarioName = BaseTestScripts.scenarioName;
    }

    public void traverseHeaderLinks() throws PageTittleMissmatchException, WebDriverInstanceNullException, ResourceCustomException, IOException, InvalidInputException, InterruptedException {
        log.info("Entered the traverseHeaderLinks method in CheckLinksPage");
        headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_HEADER_MENU_XPATH.name());
        hoverLinks(headerMenuXpathValue);
        log.info("Exited the traverseHeaderLinks method in CheckLinksPage");
    }

    public void checkSpecificHeader(String headerMenuValue) throws PageTittleMissmatchException, WebDriverInstanceNullException, ResourceCustomException, IOException, InvalidInputException, InterruptedException {
        log.info("Entered the checkSpecificHeader method in CheckLinksPage");
        headerMenuXpathValue =  getSpecificHeaderMenuXpath(headerMenuValue);
        hoverLinks(headerMenuXpathValue);
        log.info("Exited the checkSpecificHeader method in CheckLinksPage");
    }

    public String getSpecificHeaderMenuXpath(String headerMenuValue)throws InvalidInputException, ResourceCustomException,IOException{
        log.info("Entered the getSpecificHeaderMenuXpath method in CheckLinksPage");
        String headerMenuXpathValue = null;
        if(isConstantValuePresent(headerMenuValue)){
            switch (headerMenuValue){
                case "NEW IN": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_NEWIN_HEADER_XPATH.name());
                    break;
                }
                case "OFFERS": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_OFFERES_HEADER_XPATH.name());
                    break;
                }
                case "TOPS": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_TOPS_HEADER_XPATH.name());
                    break;
                }
                case "DRESSES": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_DRESSES_HEADER_XPATH.name());
                    break;
                }
                case "JACKETS": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_JACKETS_HEADER_XPATH.name());
                    break;
                }
                case "BOTTOMS": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_BOTTOMS_HEADER_XPATH.name());
                    break;
                }
                case "SHOES & ACCESSORIES": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_SHOESACCESSORIES_HEADER_XPATH.name());
                    break;
                }
                case "SALE": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_SALES_HEADER_XPATH.name());
                    break;
                }
                case "LOOKBOOKS": {
                    headerMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.HOME_PAGE_LOOKBOOKS_HEADER_XPATH.name());
                    break;
                }
            }
        }
        log.info("Exited the getSpecificHeaderMenuXpath method in CheckLinksPage");
        return headerMenuXpathValue;
    }

    public void hoverLinks(String headerMenuXpathValue) throws PageTittleMissmatchException, WebDriverInstanceNullException, ResourceCustomException, IOException, InvalidInputException, InterruptedException {
        log.info("Entered the hoverLinks method in CheckLinksPage");
        timeOut = getElementFindTimeOut();
        if (isConstantValuePresent(headerMenuXpathValue) && isElementPresent(By.xpath(headerMenuXpathValue), timeOut, seleniumWebDriver)) {
            List<WebElement> hoverLinkElementList = getWebElementsProperties(By.xpath(headerMenuXpathValue), seleniumWebDriver);
            for (WebElement hoverLinkElement : hoverLinkElementList) {
                if (isExpectedCondition(ExpectedConditions.stalenessOf(hoverLinkElement), seleniumWebDriver)) {
                    hoverLinkElement = hoverLinkElementList.get(headerMenuElementCount);
                }
                if (hoverLinkElement.getAttribute("class").contains("accordion__header")) {
                    scrollToViewWebElement(seleniumWebDriver, hoverLinkElement);
                    performFocusOnElementAction(hoverLinkElement, seleniumWebDriver);
                    Thread.sleep(1000);
                    //System.out.println(hoverLinkElement.getText());
                    String subMenuXpath = getSubMenuXpathValue(hoverLinkElement.getText());
                    String childSubMenuXpath = getChildSubMenuXpathValue(hoverLinkElement.getText());
                    getSubMenuLinks(hoverLinkElement, subMenuXpath, childSubMenuXpath, timeOut);
                }
                hoverLinkElementList = getWebElementsProperties(By.xpath(headerMenuXpathValue), seleniumWebDriver);
                headerMenuElementCount++;
            }
        }
        log.info("Exited the hoverLinks method in CheckLinksPage");
    }

    public String getSubMenuXpathValue(String headerMenuValue) throws ResourceCustomException, IOException, InvalidInputException {
        log.info("Entered the getSubMenuXpathValue method in CheckLinksPage");
        String subMenuXpathValue = null;
        if (isConstantValuePresent(headerMenuValue)) {
            switch (headerMenuValue) {
                case "NEW IN": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.NEW_IN_SUB_MENU_XPATH.name());
                    break;
                }
                case "OFFERS": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.OFFERS_SUB_MENU_XPATH.name());
                    break;
                }
                case "TOPS": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.TOPS_SUB_MENU_XPATH.name());
                    break;
                }
                case "DRESSES": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.DRESSES_SUB_MENU_XPATH.name());
                    break;
                }
                case "JACKETS": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.JACKETS_SUB_MENU_XPATH.name());
                    break;
                }
                case "BOTTOMS": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.BOTTOMS_SUB_MENU_XPATH.name());
                    break;
                }
                case "SHOES & ACCESSORIES": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.SHOES_AND_ACCESSORIES_SUB_MENU_XPATH.name());
                    break;
                }
                case "SALE": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.SALE_SUB_MENU_XPATH.name());
                    break;
                }
                case "LOOKBOOKS": {
                    subMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.LOOKBOOK_SUB_MENU_XPATH.name());
                    break;
                }
            }
        }
        log.info("Exited the getSubMenuXpathValue method in CheckLinksPage");
        return subMenuXpathValue;
    }

    public String getChildSubMenuXpathValue(String headerMenuValue) throws ResourceCustomException, IOException, InvalidInputException {
        log.info("Entered the getSubMenuXpathValue method in CheckLinksPage");
        String childSubMenuXpathValue = null;
        if (isConstantValuePresent(headerMenuValue)) {
            switch (headerMenuValue) {
                case "SHOES & ACCESSORIES": {
                    childSubMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.SHOES_AND_ACCESSORIES_CHILD_SUB_MENU_XPATH.name());
                    break;
                }
                case "SALE": {
                    childSubMenuXpathValue = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(CheckLinksEnumerator.SALES_CHILD_SUB_MENU_XPATH.name());
                    break;
                }
            }
        }
        log.info("Exited the getSubMenuXpathValue method in CheckLinksPage");
        return childSubMenuXpathValue;
    }

    public void getSubMenuLinks(WebElement headerMenuElement, String subMenuXpathValue, String childSubMenuXpathValue, int timeOut) throws PageTittleMissmatchException, WebDriverInstanceNullException, ResourceCustomException, IOException, InvalidInputException, InterruptedException {
        log.info("Entered the getSubMenuLinks method in CheckLinksPage");
        int subMenuElementCount = 0;
        if (isConstantValuePresent(subMenuXpathValue) && isElementPresent(By.xpath(subMenuXpathValue), timeOut, seleniumWebDriver)) {
            List<WebElement> subMenuWebElementList = getWebElementsProperties(By.xpath(subMenuXpathValue), seleniumWebDriver);
            for (WebElement subMenuElement : subMenuWebElementList) {
                if (isExpectedCondition(ExpectedConditions.stalenessOf(subMenuElement), seleniumWebDriver)) {
                    subMenuElement = subMenuWebElementList.get(subMenuElementCount);
                    Thread.sleep(2000);
                }
                if (!subMenuElement.getAttribute("class").contains("menu__item--all") && !subMenuElement.getAttribute("class").contains("menu__item--espot")) {
                    if (isExpectedCondition(ExpectedConditions.stalenessOf(headerMenuElement), seleniumWebDriver)) {
                        headerMenuElement = getWebElementsProperties(By.xpath(headerMenuXpathValue), seleniumWebDriver).get(headerMenuElementCount);
                        Thread.sleep(2000);
                    }
                    String headerMenuText = headerMenuElement.getText();
                    String subMenuText = subMenuElement.getText();
                    System.out.println("HeaderMenuText : " + headerMenuText + " SubMenuText : " + subMenuText);
                    scrollToViewWebElement(seleniumWebDriver, subMenuElement);
                    clickOnButtonByWebElement(subMenuElement, seleniumWebDriver);
                    checkPageTitiles(seleniumWebDriver, headerMenuText, subMenuText);
                    seleniumWebDriver.navigate().back();
                    Thread.sleep(3000);
                    subMenuWebElementList = getWebElementsProperties(By.xpath(subMenuXpathValue), seleniumWebDriver);
                    if (isExpectedCondition(ExpectedConditions.stalenessOf(headerMenuElement), seleniumWebDriver)) {
                        headerMenuElement = getWebElementsProperties(By.xpath(headerMenuXpathValue), seleniumWebDriver).get(headerMenuElementCount);
                        Thread.sleep(2000);
                    }
                    scrollToViewWebElement(seleniumWebDriver, headerMenuElement);
                    performFocusOnElementAction(headerMenuElement, seleniumWebDriver);
                    Thread.sleep(1000);
                    //checking if the sub menu contains a child sub menu
                    if (childSubMenuXpathValue != null) {
                        getChildSubMenu(headerMenuElement, childSubMenuXpathValue);
                        subMenuWebElementList = getWebElementsProperties(By.xpath(subMenuXpathValue), seleniumWebDriver);
                        childSubMenuXpathValue = null;
                    }
                } else {
                    break;
                }
                subMenuElementCount++;
            }
        }
        log.info("Exited the getSubMenuLinks method in CheckLinksPage");
    }

    public void getChildSubMenu(WebElement headerMenuElement, String childSubMenuXpath) throws PageTittleMissmatchException, WebDriverInstanceNullException, ResourceCustomException, IOException, InterruptedException, InvalidInputException {
        log.info("Entered the getChildSubMenu method in CheckLinksPage");
        int childSubMenuElementCount = 0;
        List<WebElement> childSubMenuElementList = getWebElementsProperties(By.xpath(childSubMenuXpath), seleniumWebDriver);
        for (WebElement childSubMenuElement : childSubMenuElementList) {
            if (isExpectedCondition(ExpectedConditions.stalenessOf(childSubMenuElement), seleniumWebDriver)) {
                childSubMenuElement = childSubMenuElementList.get(childSubMenuElementCount);
                Thread.sleep(2000);
            }
            if (!childSubMenuElement.getAttribute("class").contains("menu__item--all")) {
                if (isExpectedCondition(ExpectedConditions.stalenessOf(headerMenuElement), seleniumWebDriver)) {
                    headerMenuElement = getWebElementsProperties(By.xpath(headerMenuXpathValue), seleniumWebDriver).get(headerMenuElementCount);
                }
                String headerMenuText = headerMenuElement.getText();
                String childSubMenuText = childSubMenuElement.getText();
                System.out.println("HeaderMenuText : " + headerMenuText + " childSubMenuText : " + childSubMenuText);
                scrollToViewWebElement(seleniumWebDriver, childSubMenuElement);
                clickOnButtonByWebElement(childSubMenuElement, seleniumWebDriver);
                checkPageTitiles(seleniumWebDriver, headerMenuText, childSubMenuText);
                seleniumWebDriver.navigate().back();
                Thread.sleep(3000);
                childSubMenuElementList = getWebElementsProperties(By.xpath(childSubMenuXpath), seleniumWebDriver);
                if (isExpectedCondition(ExpectedConditions.stalenessOf(headerMenuElement), seleniumWebDriver)) {
                    headerMenuElement = getWebElementsProperties(By.xpath(headerMenuXpathValue), seleniumWebDriver).get(headerMenuElementCount);
                    Thread.sleep(2000);
                }
                scrollToViewWebElement(seleniumWebDriver, headerMenuElement);
                performFocusOnElementAction(headerMenuElement, seleniumWebDriver);
                Thread.sleep(1000);
            }
            childSubMenuElementCount++;
        }
        log.info("Exited the getChildSubMenu method in CheckLinksPage");
    }

    public void checkPageTitiles(WebDriver seleniumWebDriver, String headerMenuText, String subMenuText) throws PageTittleMissmatchException, ResourceCustomException, IOException, InvalidInputException {
        log.info("Entered the checkPageTitiles method in CheckLinksPage");
        if (isConstantValuePresent(subMenuText)) {
            switch (subMenuText) {
                case "Clothing": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.CLOTHING.name());
                    break;
                }
                case "Shoes & Accessories": {
                    if (isConstantValuePresent(headerMenuText)) {
                        if (headerMenuText.equalsIgnoreCase("SALE")) {
                            checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SALES_SHOES_AND_ACCESSORIES.name());
                        } else {
                            checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SHOES_AND_ACCESSORIES.name());
                        }
                    }
                    break;
                }
                case "Best Sellers": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.BEST_SELLERS.name());
                    break;
                }
                case "Summer Denim": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SUMMER_DENIM.name());
                    break;
                }
                case "Back To Basics": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.BACK_TO_BASICS.name());
                    break;
                }
                case "Insta Edit": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.INSTA_EDIT.name());
                    break;
                }
                case "Back To It": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.BACK_TO_IT.name());
                    break;
                }
                case "Linen Edit": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.LINEN_EDIT.name());
                    break;
                }
                case "The Party Edit": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.THE_PARTY_EDIT.name());
                    break;
                }
                case "Endless Summer": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.ENDLESS_SUMMER.name());
                    break;
                }
                case "Two Piece Sets": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.TWO_PIECE_SETS.name());
                    break;
                }
                case "30% Off Dresses & Playsuits": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.THIRTY_PERCENT_OFF_DRESSES_AND_PLAYSUITS.name());
                    break;
                }
                case "2 For $40 Shorts & Tops": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.TWO_FOR_$40_SHORTS_AND_TOPS.name());
                    break;
                }
                case "2 For $25 Basics": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.TWO_FOR_$25_BASICS.name());
                    break;
                }
                case "Tops From $19.95": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.TOPS_FROM_$19_95.name());
                    break;
                }
                case "2 For $70 Jeans": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.TWO_FOR_$70_JEANS.name());
                    break;
                }
                case "3 For $10 Socks": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.THREE_FOR_$10_SOCKS.name());
                    break;
                }
                case "$2 Phone Covers": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.$2_PHONE_COVERS.name());
                    break;
                }
                case "30% Off Tops": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.$30_PERCENT_OFF_TOPS.name());
                    break;
                }
                case "Casual Tops": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.CASUAL_TOPS.name());
                    break;
                }
                case "Basics": {
                    if (isConstantValuePresent(headerMenuText)) {
                        if (headerMenuText.equalsIgnoreCase("SALE")) {
                            checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SALES_BASICS.name());
                        } else {
                            checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.BASICS.name());
                        }
                    }
                    break;
                }
                case "Shirts & Blouses": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SHIRTS_AND_BLOUSES.name());
                    break;
                }
                case "Knitwear & Cardigans": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.KNITWEAR_AND_CARDIGANS.name());
                    break;
                }
                case "Casual": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.CASUAL.name());
                    break;
                }
                case "Midi & Maxi": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.MIDI_AND_MAXI.name());
                    break;
                }
                case "Party": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.PARTY.name());
                    break;
                }
                case "Playsuits & Jumpsuits": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.PLAYSUITS_AND_JUMPSUITS.name());
                    break;
                }
                case "Jackets & Coats": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.JACKETS_AND_COATS.name());
                    break;
                }
                case "Shorts": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SHORTS.name());
                    break;
                }
                case "Skirts": {
                   // checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SKIRTS.name());
                    break;
                }
                case "Jeans": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.JEANS.name());
                    break;
                }
                case "Pants": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.PANTS.name());
                    break;
                }
                case "Accessories": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.ACCESSORIES.name());
                    break;
                }
                case "Belts & Bags": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.BELT_AND_BAGS.name());
                    break;
                }
                case "Hats & Hair Accessories": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.HATS_AND_HAIR_ACCESSORIES.name());
                    break;
                }
                case "Phone Covers": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.PHONE_COVERS.name());
                    break;
                }
                case "Socks & Tights": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SOCKS_AND_TIGHTS.name());
                    break;
                }
                case "Shoes": {
                    //checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SHOES.name());
                    break;
                }
                case "Gift Cards": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.GIFT_CARDS.name());
                    break;
                }
                case "New To Sale": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.NEW_TO_SALE.name());
                    break;
                }
                case "SHOP BY PRODUCT": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SHOP_BY_PRODUCT.name());
                    break;
                }
                case "Tops": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.TOPS.name());
                    break;
                }
                case "Dresses & Jumpsuits": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.DRESSES_AND_JUMPSUITES.name());
                    break;
                }
                case "Bottoms": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.BOTTOMS.name());
                    break;
                }
                case "Shop By Price": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SHOP_BY_PRICE.name());
                    break;
                }
                case "$10 & Under": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.$10_AND_UNDER.name());
                    break;
                }
                case "$20 & Under": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.$20_AND_UNDER.name());
                    break;
                }
                case "$30 & Under": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.$30_AND_UNDER.name());
                    break;
                }
                case "Shop By Size": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.SHOP_BY_SIZE.name());
                    break;
                }
                case "LOOKBOOK": {
                    checkForPageTitleAssertion(seleniumWebDriver, CheckLinksEnumerator.LOOKBOOK.name());
                    break;
                }
            }
        }
        log.info("Exited the checkPageTitiles method in CheckLinksPage");
    }

    public void checkForPageTitleAssertion(WebDriver seleniumWebDriver, String menuNameValue) throws PageTittleMissmatchException, ResourceCustomException, IOException, InvalidInputException {
        log.info("Entered the checkForAssertion method in CheckLinksPage");
        String expectedTitle = new ResourceRead().getResourceValueFromProperties(checkLinksPageResource).getProperty(menuNameValue);
        String actualTitle = getPageTitle(seleniumWebDriver);
       // ByteBuffer byteBuff = StandardCharset.UTF-8.encode(actualTitle);
        /*ByteBuffer actualByteBuff = StandardCharsets.UTF_8.encode(actualTitle);
        actualTitle = new String( actualByteBuff.array(), StandardCharsets.UTF_8 );
        ByteBuffer expectedByteBuff = StandardCharsets.UTF_8.encode(expectedTitle);
        expectedTitle = new String( expectedByteBuff.array(), StandardCharsets.UTF_8 );*/
        if (actualTitle.equalsIgnoreCase(expectedTitle)) {
            Assert.assertEquals(expectedTitle, actualTitle);
        } else {
            throw new PageTittleMissmatchException("Link opened the wrong page: Expected Title : "+expectedTitle+" ActualTitle : "+actualTitle);
        }
        log.info("Exited the checkForAssertion method in CheckLinksPage");
    }
}
