package com.seleniumframework.customexceptions.drivercustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class WebDriverInstanceNullException extends BaseAutomationException {

    public WebDriverInstanceNullException() {
        super();
    }

    public WebDriverInstanceNullException(String message) {
        super(message);
    }

    public WebDriverInstanceNullException(String message, Exception ex) {
        super(message, ex);
    }
}
