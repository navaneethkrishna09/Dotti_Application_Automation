package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.seleniumframework.base.BasePage;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import uipages.DottiItemSelectPage;
import uipages.DottiSignInPage;

public class StepHooks extends BasePage {
	private int counter = 0;

	private WebDriver seleniumWebDriver = get_seleniumWebDriver();
	

	@Before
	public void beforeScenario(Scenario scenario) {
		scenarioName = scenario.getName();
	}

	
	@After
	public void AfterScenario(Scenario scenario) {
		scenarioName = scenario.getName();
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

		if (scenario.isFailed()) {
			/*byte[] screenshotBytes = ((TakesScreenshot) seleniumWebDriver).getScreenshotAs(OutputType.BYTES);
			//scenario.embed(screenshotBytes, "image/png");
			scenario.embed(screenshotBytes, "image/png",scenario.getName());*/
			System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
			
			TakesScreenshot screenshot = (TakesScreenshot) seleniumWebDriver;
            scenario.embed(screenshot.getScreenshotAs(OutputType.BYTES), "image/png",scenarioName);
		}
	}
	
	
	public void teardown(Scenario scenario)
	{
		System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
		DottiItemSelectPage.driver.close();
		DottiSignInPage.driver.close();
	}

}
