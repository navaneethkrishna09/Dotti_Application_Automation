package com.seleniumframework.customexceptions.drivercustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class WebDriverCustomException extends BaseAutomationException {

    public WebDriverCustomException() {
        super();
    }

    public WebDriverCustomException(String message) {
        super(message);
    }

    public WebDriverCustomException(String message, Exception ex) {
        super(message, ex);
    }
}
