package uipages;

import applicationcustomexceptions.FileMismatchException;
import com.seleniumframework.base.BasePage;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverInstanceNullException;
import com.seleniumframework.resourceRead.ResourceRead;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class ImageComparisonPage extends BasePage{

    final static Logger log = Logger.getLogger(ImageComparisonPage.class);

    public final String IMAGE_COMAPARE_SOURCE_LOCATION = "ImageCompareSourceLocation";

    public final String IMAGE_COMAPARE_TARGET_LOCATION = "ImageCompareTargetLocation";

    public final String SOURCE_FILE_HEX_STRING = "sourceFileHexString";

    public final String TARGET_FILE_HEX_STRING = "targetFileHexString";

    WebDriver seleniumWebDriver;

    public ImageComparisonPage(){
        this.seleniumWebDriver = get_seleniumWebDriver();
    }

    public Map<String, String> fetchSourceAndTargetFiles(String productName) throws ResourceCustomException,IOException, Exception {
            log.info("Entered fetchSourceAndTargetFiles method in ImageComparisonPage class");
            Map<String, String> fileHashCode = new HashMap<>();
            productName = productName.replace(" ","_");
            String sourcePath = new ResourceRead().getResourceValueFromXML().getProperty(IMAGE_COMAPARE_SOURCE_LOCATION) + productName +".png";
            String targetPath = new ResourceRead().getResourceValueFromXML().getProperty(IMAGE_COMAPARE_TARGET_LOCATION) + productName +".png";
            log.info("File Comparison source path = "+sourcePath);
            log.info("File Comparison target path = "+targetPath);
            fileHashCode.put(SOURCE_FILE_HEX_STRING, getMD5Checksum(sourcePath));
            fileHashCode.put(TARGET_FILE_HEX_STRING, getMD5Checksum(targetPath));
            log.info("Exited fetchSourceAndTargetFiles method in ImageComparisonPage class");
            return fileHashCode;
    }

    public void isFileMatching(Map<String, String> fileHashCode) throws FileMismatchException, WebDriverInstanceNullException {
        log.info("Entered isFileMatching method in ImageComparisonPage class");
        String sourceHexString = fileHashCode.get(SOURCE_FILE_HEX_STRING);
        String targetHexString = fileHashCode.get(TARGET_FILE_HEX_STRING);
        log.info("HexString for SourceFile = "+sourceHexString);
        log.info("HexString for targetFile = "+targetHexString);
        if ((!sourceHexString.isEmpty() && !targetHexString.isEmpty()) || (sourceHexString == null && targetHexString == null)) {
            if (sourceHexString.equals(targetHexString))
            {
                log.info("Source File and Target File are Matching");
                Assert.assertTrue(true);
            } else {
                scrollDownTheBrowser(seleniumWebDriver, 270);
                throw new FileMismatchException("Source File and Target File is not matching");
            }
        }
        log.info("Exited isFileMatching method in ImageComparisonPage class");
    }
}


