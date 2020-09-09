package com.seleniumframework.customexceptions;

import com.seleniumframework.base.BaseTestScripts;
import com.seleniumframework.customReport.CustomExtendReport;
import com.seleniumframework.customexceptions.drivercustomexceptions.WebDriverCustomException;
import org.apache.log4j.Logger;
import org.testng.Assert;

public class ExceptionHandeler {

    final static Logger log = Logger.getLogger(ExceptionHandeler.class);

    public void genricExceptionHandeler(Exception ex){
        log.info("Entered genricExceptionHandeler method in ExceptionHandeler class");
        GenricException genricException = new GenricException(ex.getMessage(),ex);
        log.error(genricException.getMessage(),ex);
       // CustomExtendReport.addErrorStatusToReport(CustomExtendReport.ReportStatus.ERROR,"<b><font color='red'>ERROR--></font></b>" +" "+ BaseTestScripts.currentStep.getStepText(),ex);
        log.info("Exited genricExceptionHandeler method in ExceptionHandeler class");
    }

    public void applicationExceptionHandeler(Exception ex){
        log.info("Entered applicationExceptionHandeler method in ExceptionHandeler class");
        ApplicationCustomException applicationCustomException = new ApplicationCustomException(ex.getMessage(),ex);
        log.error(applicationCustomException.getMessage(),ex);
     //   CustomExtendReport.addErrorStatusToReport(CustomExtendReport.ReportStatus.FAIL,"<b><font color='red'>Failed--></font></b>" +" "+ BaseTestScripts.currentStep.getStepText(),ex);
        Assert.fail(ex.getMessage(),ex);
        log.info("Exited applicationExceptionHandeler method in ExceptionHandeler class");
    }

    public void resourceExceptionHandeler(Exception ex){
        log.info("Entered resourceExceptionHandeler method in ExceptionHandeler class");
        ResourceCustomException resourceCustomException = new ResourceCustomException(ex.getMessage(),ex);
        log.error(resourceCustomException.getMessage(),ex);
      //  CustomExtendReport.addErrorStatusToReport(CustomExtendReport.ReportStatus.ERROR,"<b><font color='red'>ERROR--></font></b>" +" "+ BaseTestScripts.currentStep.getStepText(),ex);
        log.info("Exited resourceExceptionHandeler method in ExceptionHandeler class");
    }

    public void webDriverExceptionhandeler(Exception ex){
        log.info("Entered driverExceptionhandeler method in ExceptionHandeler class");
        WebDriverCustomException webDriverCustomException =  new WebDriverCustomException(ex.getMessage(),ex);
        log.error(webDriverCustomException.getMessage(),ex);
      //  CustomExtendReport.addErrorStatusToReport(CustomExtendReport.ReportStatus.ERROR,"<b><font color='red'>ERROR--></font></b>" +" "+ BaseTestScripts.currentStep.getStepText(),ex);
        log.info("Exited driverExceptionhandeler method in ExceptionHandeler class");
    }

    public void emailReportExceptionhandeler(Exception ex){
        log.info("Entered driverExceptionhandeler method in ExceptionHandeler class");
        EmailReportCustomException emailReportCustomException =  new EmailReportCustomException(ex.getMessage(),ex);
        log.error(emailReportCustomException.getMessage(),ex);
        log.info("Exited driverExceptionhandeler method in ExceptionHandeler class");
    }

}
