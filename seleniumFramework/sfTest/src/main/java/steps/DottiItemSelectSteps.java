package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;

import io.cucumber.java.en.And;
import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import uipages.DottiItemSelectPage;
import uipages.LoginPage;

public class DottiItemSelectSteps {
	private DottiItemSelectPage itemSelect;
	
	@Given("^User opens the URL \"([^\"]*)\"$")
	public void siteLaunch(String urlKey)
	{	
		itemSelect = new DottiItemSelectPage();
		itemSelect.getHomePage(urlKey);
	}
	
	@And("^User verifies if the home page is correct$")
	public void verifyHomePage()
	{
		itemSelect.verifyHomePage();
	}
	
	@Then("^User clicks on the menu bar \"([^\"]*)\" and choose the \"([^\"]*)\"$")
	public void menuBarSelect(String category,String subCategory)
	{
		itemSelect.menuBarClick(category,subCategory);
	}
	
	@Then("^Verify the product list page \"([^\"]*)\"$")
	public void verifyProductListPage(String category)
	{
		itemSelect.verifyProductPage(category);
	}
	
	@Then("^User selects a random product$")
	public void itemClick() throws WebDriverInstanceNullException
	{
		itemSelect.productItemClick();
	}
	@And("^Verify the Product Description Page$")
	public void verifyProductDescripion() throws ResourceCustomException, IOException {	
		itemSelect.verifyProductDescriptionPage();
	}
	
	@Then("^User chooses selects a random size$")
	public void selectSize()
	{
		itemSelect.selectSize();
	}
	
	@And("^enters the quantity \"([^\"]*)\"$")
	public void quantityEntry(String quantity)
	{
		itemSelect.quantityEntry(quantity);
	}
	
	@And("^User adds the product to the bag$")
	public void itemAddToBag()
	{
		itemSelect.itemAddToBag();
	}

	@After
	public void teardown()
	{	
		System.out.println("++++++++++++++++++++++++++++++");
		DottiItemSelectPage.driver.quit();
	}
	
}
