package runners;

import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.runner.RunWith;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.customReport.CustomExtendReport;

import courgette.api.CourgetteAfterAll;
import courgette.api.CourgetteBeforeAll;
import courgette.api.CourgetteOptions;
import courgette.api.CourgetteRunLevel;
import courgette.api.CucumberOptions;
import courgette.api.junit.Courgette;
import uipages.DottiItemSelectPage;
import uipages.DottiSignInPage;


@RunWith(Courgette.class)
@CourgetteOptions(
        threads = 1,
        runLevel = CourgetteRunLevel.SCENARIO,
        rerunFailedScenarios = false,
        rerunAttempts = 1,
        showTestOutput = true,
        reportTargetDir = "build",
        cucumberOptions = @CucumberOptions(
//               tags = {"@eclipxQots"},
//                tags = {"@checkHeaderLinks"},
//        		tags = {"@Unsuccessfullogin or @Successfullogin"},
                tags = {"@DottiInvalidLogin"},
                features = {"src/main/java/feature"},
                glue = {"steps"},
                monochrome = true,
                dryRun = false,
                strict = false,
                plugin = {"pretty",
                        "json:build/cucumber-report/cucumber.json",
                        "html:build/cucumber-report/cucumber.html",
                        "junit:build/cucumber-report/cucumber.xml"}))


public class TestRunSeleniumFrameworkTest extends BasePage {

    final static Logger log = Logger.getLogger(TestRunSeleniumFramework.class);

    @CourgetteBeforeAll
    public static void writeExtendReport() {
        log.info("Entered writeExtendReport method in TestRunSeleniumFrameWork class");
        createLogReport();
        log.info("Exited writeExtendReport method in TestRunSeleniumFrameWork class");
    }

    @CourgetteAfterAll
    public static void flushExtendReport() {
        log.info("Entered flushExtendReport method in TestRunSeleniumFrameWork class");
        CustomExtendReport.copyReport();
        CustomExtendReport.zipReport();
        log.info("Exited flushExtendReport method in TestRunSeleniumFrameWork class");
    }
}
