package com.seleniumframework.logger;

import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.LogDirectoryCreationException;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.resourceRead.ResourceRead;
import org.apache.log4j.Logger;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

public class FrameworkLogger {

    final static Logger log = Logger.getLogger(FrameworkLogger.class);

    public static String logProjectName = "";
    public static final String LOG_FOLDER_PARENT_PATH = "LogFolderParentPath";

    public static void createLogReport() {
        try {
        	
            log.info("Entered the createLogReport method in TestRunSeleniumFrameWork");
            String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
            logProjectName = ResourceRead.getResourceValueFromXML().getProperty("ProjectName") + "_" + dateName;
            String testResultFolderParentPath = ResourceRead.getResourceValueFromXML().getProperty(LOG_FOLDER_PARENT_PATH);
            File testResultFolderFile = new File(testResultFolderParentPath);
            if (!testResultFolderFile.exists()) {
                testResultFolderFile.mkdir();
                File logFolderFile = new File(testResultFolderParentPath+"/log");
                logFolderFile.mkdir();
                System.out.println("Folder created");
                createChildFolders(testResultFolderParentPath);
            } else {
                createChildFolders(testResultFolderParentPath);
            }
            log.info("Exited the createLogReport method in TestRunSeleniumFrameWork");
        } catch (ResourceCustomException ex) {
            new ExceptionHandeler().resourceExceptionHandeler(ex);
        } catch (IOException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        } catch (LogDirectoryCreationException ex) {
            new ExceptionHandeler().genricExceptionHandeler(ex);
        }

    }

    public static void createSubFolders(File subParentFolder) throws LogDirectoryCreationException, ResourceCustomException, IOException {
        log.info("Entered the createSubFolders method in TestRunSeleniumFrameWork");
        String TEST_REPORT = "TestReport";
        String SCREENSHOT = "Screenshot";
        String TEST_DATA = "TestData";
        String EMAIL = "Email";
        if (subParentFolder.exists()) {
            List<String> subFolders = new ArrayList<>();
            Properties property = ResourceRead.getResourceValueFromXML();
            subFolders.add(property.getProperty(TEST_REPORT));
            subFolders.add(property.getProperty(SCREENSHOT));
            subFolders.add(property.getProperty(TEST_DATA));
            subFolders.add(property.getProperty(EMAIL));
            for (String sub : subFolders) {
                File logChildFoldersFile = new File(subParentFolder, sub);
                logChildFoldersFile.mkdirs();
            }
        } else {
            throw new LogDirectoryCreationException(logProjectName + "directory not found");
        }
        log.info("Exited the createSubFolders method in TestRunSeleniumFrameWork");
    }

    public static void createChildFolders(String logFolderParentPath) throws LogDirectoryCreationException, ResourceCustomException, IOException {
        log.info("Entered the createChildFolders method in TestRunSeleniumFrameWork");
        String subParentFolderPath = logFolderParentPath + logProjectName;
        File subParentFolder = new File(subParentFolderPath);
        if (!subParentFolder.exists()) {
            subParentFolder.mkdir();
            createSubFolders(subParentFolder);
        } else {
            throw new LogDirectoryCreationException("Test Result directory not found");
        }
        log.info("Exited the createChildFolders method in TestRunSeleniumFrameWork");
    }
}
