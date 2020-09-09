package uipages;

import java.io.IOException;
import java.util.Enumeration;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.ElementNotFoundException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;

import io.cucumber.java.it.E;

public class DottiItemSelectPage extends BasePage {
	public static WebDriver driver;
	private String propertyPath = "D:\\Projects\\Eclipse_demo\\seleniumFramework\\sfTest\\src\\main\\resources\\DottiSite.json";
	private String propertyPath1 = "/DottiPageResource.properties";
	String name;

	public DottiItemSelectPage() {
		driver = get_seleniumWebDriver();
	}

	public void getHomePage(String urlKey) {
		LaunchURL(urlKey, driver);
	}

	public void verifyHomePage() {
		String title = getPageTitle(driver);
		Assert.assertEquals(title, "Dotti Online Shop | Shop the Latest Womens Clothing, Dresses & Fashion");
	}

	public void menuBarClick(String category, String subCategory) {
		switch (category.toLowerCase()) {
		case "new in":
			getResourceValue(category, subCategory);
			break;

		case "offers":
			getResourceValue(category, subCategory);
			break;

		case "tops":
			getResourceValue(category, subCategory);
			break;

		case "dresses":
			getResourceValue(category, subCategory);
			break;

		case "jackets":
			getResourceValue(category, subCategory);
			break;

		case "bottoms":
			getResourceValue(category, subCategory);
			break;

		case "shoes & accessories":
			getResourceValue(category, subCategory);
			break;

		case "sale":
			getResourceValue(category, subCategory);
			break;

		case "lookbooks":
			getResourceValue(category, subCategory);
			break;
		default:
			getResourceValue(category, subCategory);
		}
	}

	public void verifyProductPage(String subcategory) {
		String configTitle, title;
		String value = "";
		Properties prop;
		try {
			prop = new ResourceRead().getResourceValueFromProperties(propertyPath1);
			for (Enumeration<?> e = prop.propertyNames(); e.hasMoreElements();) {
				configTitle = (String) e.nextElement();
				System.out.println("****$$$$$$$$$$$" + configTitle.toLowerCase().trim());
				System.out.println("*****$$$$$$$$$" + subcategory.replaceAll("\\s", "").toLowerCase());
				if (configTitle.trim().toLowerCase().startsWith(subcategory.replaceAll("\\s", "").toLowerCase()))
					value = prop.getProperty(configTitle);
			}
		} catch (ResourceCustomException e1) {
			e1.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}

		title = getPageTitle(driver);
		Assert.assertEquals(title, value);
	}

	public void productItemClick() throws WebDriverInstanceNullException {
		String listPath;
		try {
			listPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("PRODUCT_LIST_LOCATOR");
			List<WebElement> elementList = getElementsPropertiesByXpath(listPath, driver);
			if (!elementList.isEmpty()) {
				Random random = new Random();
				int randomNumber = random.nextInt(elementList.size());
				scrollToViewWebElement(driver, elementList.get(randomNumber));
				WebElement ele = elementList.get(randomNumber)
						.findElements(By.xpath("//*[@class='product__item--image']")).get(randomNumber);
				name = ele.getAttribute("title");
				System.out.println("**********" + name);
				elementList.get(randomNumber).click();
			}

		} catch (ResourceCustomException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidInputException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void verifyProductDescriptionPage() throws ResourceCustomException, IOException {
		// String title = getPageTitle(driver);
//		Set<String> allWindows = driver.getWindowHandles();
//		System.out.println("????????????????????????"+allWindows);
//		if(allWindows.size()>1)
//            driver.switchTo().window(allWindows.iterator().next());
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		if(driver.findElements(By.xpath("//*[@class='product-info__name']")).size()>0)
		{
		String title = driver.findElement(By.xpath("//*[@class='product-info__name']")).getText();
		System.out.println("%%%%%%%%%%" + name);
		System.out.println("%%%%%%%%%%" + title);
		Assert.assertTrue(title.contains(name), "does not match");
		name = "";
		}
	}

	public void selectSize() {
		String listPath, sizeElementPath, sizeAreaElementPath, popUpSizeArea,popUpSizeVisibilityPath,sizeAreaElementVisibilityPath;
		WebElement element = null;
		int randomNumber;
		try {
			sizeElementPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("SIZE_IS_DISPLAYED_CHECK_LOCATOR");// to check if display none is used
			sizeAreaElementPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("SIZE_AREA_IS_DISPLAYED_CHECK_LOCATOR");
			sizeAreaElementVisibilityPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("SIZE_AREA_VISIBILITY_CHECK_LOCATOR");
			popUpSizeArea = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("POP_UP_SIZE_AREA_LOCATOR");
			popUpSizeVisibilityPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("POP_UP_AREA_VISIBILITY_LOCATOR");
			boolean isSizeDisplayed = (getElementsPropertiesByXpath(sizeElementPath, driver).size() > 0) ? true
					: (getElementsPropertiesByXpath(sizeAreaElementVisibilityPath, driver).size() > 0) ? true : false;
			boolean isSizeAreaDisplayed = getElementsPropertiesByXpath(sizeAreaElementPath, driver).size() > 0;
			if ((getElementsPropertiesByXpath(popUpSizeArea, driver).size() > 0)&& getElementsPropertiesByXpath(sizeElementPath, driver).size() > 0)
				isSizeAreaDisplayed = true;
			if (!isSizeDisplayed && isSizeAreaDisplayed) {
				listPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
						.getProperty("SIZE_LIST_LOCATOR");
				List<WebElement> elementList = getElementsPropertiesByXpath(listPath, driver);
				if (!elementList.isEmpty()) {
					do {
						Random random = new Random();
						randomNumber = random.nextInt(elementList.size());
						String a = elementList.get(randomNumber).getAttribute("id");
						String idSubString = a.substring(a.length() - 10);
						System.out.println(idSubString);
						element = elementList.get(randomNumber)
								.findElement(By.xpath("//*[contains(@id,'" + idSubString + "')]"));
					} while (element.getAttribute("class").contains("product-variant__option--disabled"));
					System.out.println("@@@@@@@@@@@@@@@@@@" + element.getTagName());
					if (elementList.get(randomNumber).isEnabled() && element != null
							&& !(element.getTagName().equalsIgnoreCase("div"))) {
						elementList.get(randomNumber).click();
					}
				}
			}
		} catch (ResourceCustomException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			e.printStackTrace();
		} catch (InvalidInputException e) {
			e.printStackTrace();
		}
	}

	public void quantityEntry(String quantity) {
		String quantityEntryPath;
		try {
			quantityEntryPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("QUANTITY_TEXTBOX_LOCATOR");
			if(driver.findElements(By.xpath(quantityEntryPath)).size()>0)
			{
			WebElement element = getWebElementPropertiesByXpath(quantityEntryPath, driver);
			scrollToViewWebElement(driver, element);
			findTextboxAndSetValueByXpath(quantityEntryPath, quantity, driver);
			}
		} catch (ResourceCustomException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			e.printStackTrace();
		} catch (InvalidInputException e) {
			e.printStackTrace();
		}

	}

	public void itemAddToBag() {
		String addToCartPath;
		try {
			addToCartPath = new ResourceRead().getResourceValueFromProperties(propertyPath1)
					.getProperty("ADD_TO_BAG_LOCATOR");
			if(driver.findElements(By.xpath(addToCartPath)).size()>0)
			clickOnButtonByXpath(addToCartPath, driver);
		} catch (ResourceCustomException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (WebDriverInstanceNullException e) {
			e.printStackTrace();
		} catch (InvalidInputException e) {
			e.printStackTrace();
		}

	}

	public void getResourceValue(String category, String subCategory) {
		try {
			String headerXpath = new ResourceRead().getResourceValueFromJSON(propertyPath, category, "headerpath");
			if(isElementPresent(getWebElementPropertiesByXpath(headerXpath, driver), 5, driver))
			performFocusOnElementActionByXpath(headerXpath, driver);
			String locator = new ResourceRead().getResourceValueFromJSON(propertyPath, category, subCategory);
			System.out.println("$$$$$$$$$$$$$" + locator);
			if(isElementPresent(getWebElementPropertiesByXpath(locator, driver), 30, driver))
			clickOnButtonByXpath(locator, driver);
		} catch (WebDriverInstanceNullException e) {
			e.printStackTrace();
		} catch (InvalidInputException e) {
			e.printStackTrace();
		} catch (ElementNotFoundException e) {
			e.printStackTrace();
		} catch (ResourceCustomException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
