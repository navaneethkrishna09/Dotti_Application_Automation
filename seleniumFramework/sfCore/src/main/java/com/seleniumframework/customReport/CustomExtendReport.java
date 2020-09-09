package com.seleniumframework.customReport;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.seleniumframework.base.BasePage;
import com.seleniumframework.base.BaseTestScripts;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.resourceRead.ResourceRead;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.zeroturnaround.zip.ZipUtil;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CustomExtendReport extends BasePage {

	final static Logger log = Logger.getLogger(CustomExtendReport.class);

	public static ExtentTest test;

	public static ExtentReports extentReports;

	public static WebDriver seleniumWebDriver;

	public static String scenarioName;

	private static final String ERROR_SCREENSHOT_LOCATION = "ErrorScreenShotLocation";

	private static final String EXTEND_REPORT_CONFIG_FILE = "ExtentReportConfigFile";

	private static final String EXTENT_REPORTER_HTML_OUT = "extent.reporter.html.out";

	public CustomExtendReport() {
		this.seleniumWebDriver = get_seleniumWebDriver();
		this.scenarioName = BaseTestScripts.scenarioName;
	}

	public static void startTest(String testCaseName) {
		log.info("Entered the startTest method in CustomReportClass");
		test = extentReports.createTest(testCaseName);
		log.info("Exited the startTest method in CustomReportClass");
	}

	public enum ReportStatus {
		PASS, INFO, SKIP, WARNNING, ERROR, DEBUG, FATAL, ATTACHSCREENSHOT, FAIL
	}

	public static String captureScreenShot(WebDriver seleniumWebDriver) {
		try {
			log.info("Entered the captureScreenShot method in CustomReportClass");
			String name = scenarioName.replace(" ", "_");
			String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
			String screenShotLocationPrefix = new ResourceRead().getResourceValueFromXML()
					.getProperty("TestResultLocationPath");
			String screenShotLocationSufix = new ResourceRead().getResourceValueFromXML()
					.getProperty("ErrorScreenShotLocation") + name + "_" + dateName + ".png";
			String screenShotPath = screenShotLocationPrefix + logProjectName + screenShotLocationSufix;
			File screenShotFile = ((TakesScreenshot) seleniumWebDriver).getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(screenShotFile, new File(screenShotPath));
			screenShotPath = "../screenshots/" + name + "_" + dateName + ".png";
			log.info("Exited the captureScreenShot method in CustomReportClass");
			return screenShotPath;
		} catch (IOException e) {
			new ExceptionHandeler().genricExceptionHandeler(e);
			return null;
		} catch (ResourceCustomException e) {
			new ExceptionHandeler().resourceExceptionHandeler(e);
			return null;
		}
	}

	public synchronized static void createExtendReport() {
		try {
			log.info("Entered the createExtendReport method in CustomReportClass");
			// ExtentHtmlReporter constructor contains the path, where the
			// report to be generated
			String extendReportDestinationSufix = new ResourceRead().getResourceValueFromXML()
					.getProperty("ExtentReportDestinationLocation");
			String extendReportDestinationPrefix = new ResourceRead().getResourceValueFromXML()
					.getProperty("TestResultLocationPath");
			ExtentHtmlReporter reporter = new ExtentHtmlReporter(
					extendReportDestinationPrefix + logProjectName + extendReportDestinationSufix);
			extentReports = new ExtentReports();
			extentReports.setSystemInfo("User Name", System.getProperty("user.name"));
			extentReports.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
			extentReports.setSystemInfo("Machine", "Windows 10" + "64 Bit");
			extentReports.setSystemInfo("Selenium", "3.12.0");
			extentReports.setSystemInfo("Maven", "3.6.2");
			extentReports.setSystemInfo("Java Version", "1.8.0_112");
			extentReports.attachReporter(reporter);
			log.info("Exited the createExtendReport method in CustomReportClass");
		} catch (ResourceCustomException ex) {
			new ExceptionHandeler().resourceExceptionHandeler(ex);
		} catch (IOException ex) {
			new ExceptionHandeler().genricExceptionHandeler(ex);
		}

	}

	public synchronized static void flushReport() {
		log.info("Entered the flushReport method in CustomReportClass");
		extentReports.flush();
		log.info("Exited the flushReport method in CustomReportClass");
	}

	public static void copyReport() {
		try {
			log.info("Entered the copyReport method in CustomReportClass");
			//String sourceFile = "../sfTest/build";
			// String destinationFile =
			// "../sfTest/testResult/seleniumFrameWork_20200401111653/testReport";
			String sourceFile = ResourceRead.getResourceValueFromXML().getProperty("ExtentReportSourceLocation");
			String destinationFile = ResourceRead.getResourceValueFromXML().getProperty("TestResultLocationPath")
					+ logProjectName + ResourceRead.getResourceValueFromXML().getProperty("ExtentReportDestinationLocation");
			FileUtils.copyDirectory(new File(sourceFile), new File(destinationFile));
			log.info("Exited the copyReport method in CustomReportClass");

		} catch (IOException ex) {
			new ExceptionHandeler().genricExceptionHandeler(ex);
		} catch (ResourceCustomException ex) {
			new ExceptionHandeler().resourceExceptionHandeler(ex);
		}
	}

	public static void zipReport() {
		try {
			log.info("Entered the zipReport method in CustomReportClass");
			String fileToBeZipped = ResourceRead.getResourceValueFromXML().getProperty("TestResultLocationPath")
					+ logProjectName;
			String zippedFileLocation = ResourceRead.getResourceValueFromXML().getProperty("TestResultLocationPath")
					+ logProjectName + ResourceRead.getResourceValueFromXML().getProperty("EmailContentLocation")
					+ logProjectName + ".zip";
			ZipUtil.pack(new File(fileToBeZipped), new File(zippedFileLocation));
			log.info("Exited the zipReport method in CustomReportClass");
		} catch (ResourceCustomException ex) {
			new ExceptionHandeler().resourceExceptionHandeler(ex);
		} catch (IOException ex) {
			new ExceptionHandeler().genricExceptionHandeler(ex);
		}
	}

	public String getStepResultStatus() {
		log.info("Entered the getStepResultStatus method in CustomReportClass");
		String result = test.getStatus().toString();
		log.info("Exited the getStepResultStatus method in CustomReportClass");
		return result;
	}

	public static void addStatusToReport(ReportStatus status, String message) {
		try {
			switch (status) {
			case PASS:
				test.log(Status.PASS, message);
				break;
			case INFO:
				test.log(Status.INFO, message);
				break;
			case DEBUG:
				test.log(Status.DEBUG, message);
				break;
			case SKIP:
				test.log(Status.SKIP, message);
				break;
			case WARNNING:
				test.log(Status.WARNING, message);
				break;
			case ATTACHSCREENSHOT: {
				String screenShotPath = captureScreenShot(seleniumWebDriver);
				test.addScreenCaptureFromPath(screenShotPath);
				break;
			}
			/*
			 * default: throw new Exception("Unsupported status");
			 */
			}
		} catch (Exception e) {
			new ExceptionHandeler().genricExceptionHandeler(e);
		}
	}

	public static void addErrorStatusToReport(ReportStatus status, String message, Exception ex) {
		try {
			switch (status) {
			case FATAL:
				test.log(Status.FATAL, message);
				test.log(Status.FATAL, ex);
				break;
			case FAIL:
				String screenShotPath = captureScreenShot(seleniumWebDriver);
				// test.log(Status.FAIL, message + "<textarea class=\"code-block
				// maxxed\" style=\"style=\"height: 190px; margin: 0px; width:
				// 670px;\" disabled=\"\">"+
				// ExceptionUtil.getExceptionHeadline(ex)+
				// ExceptionUtil.getStackTrace(ex) +"</textarea><div style=\"
				// width: 35px; margin-left: 650px;\"><i
				// class=\"material-icons\" style=\"cursor: pointer;\"
				// data-featherlight="+ screenShotPath +" src="+ screenShotPath
				// +" data-src="+ screenShotPath +">filter</i></div>");
				test.log(Status.FAIL,
						message + "<div style=\" width: 35px; margin-left: 650px;\"><i class=\"material-icons\" style=\"cursor: pointer;\" data-featherlight="
								+ screenShotPath + " src=" + screenShotPath + " data-src=" + screenShotPath
								+ ">filter</i></div>");
				test.log(Status.FAIL, ex);
				break;
			case ERROR:
				test.log(Status.ERROR, message);
				test.log(Status.ERROR, ex);
				break;
			default:
				throw new Exception("Unsupported status");
			}
		} catch (Exception e) {
			new ExceptionHandeler().genricExceptionHandeler(e);
		}
	}
}
