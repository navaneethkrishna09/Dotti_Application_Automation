package com.seleniumframework.browser;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.customexceptions.drivercustomexceptions.InvalidInputException;
import com.seleniumframework.resourceRead.ResourceRead;
import org.apache.log4j.Logger;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class BrowserInstanceFactory extends BasePage {

    final static Logger log = Logger.getLogger(BrowserInstanceFactory.class);

    //proxy Type
    public static final String COGNIZANT_PROXY = "cognizantProxy";

    /**
     * @return return the instance of the web driver with the settings for Chrome
     */
    public static WebDriver chromeWebDriver() {
        try {
            log.info("Entered the ChromeWebDriver method in BrowserInstanceFactory");
            String CHROME_DRIVERNAME_PROPERTY = "ChromeDriverName";
            String CHROME_DRIVERPATH_PROPERTY = "ChromeDriverPath";
            String TIME_OUT_PROPERTY = "WebDriverTimeOutInSeconds";
            WebDriver seleniumWebdriver = null;
            ResourceRead resourceRead = new ResourceRead();
            // chrome capabilities
            final DesiredCapabilities capabilities = DesiredCapabilities.chrome();
            // chrome options
            final ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("disable-application-cache");
            chromeOptions.addArguments("disk-cache-size=0");
            chromeOptions.addArguments("disable-popup-blocking");
            chromeOptions.addArguments("no-sandbox");
            //chromeOptions.addArguments("headless");

            Map<String, Object> userPrefences = new HashMap<>();
            userPrefences.put("intl.accept_languages", "en");
            userPrefences.put("disable-popup-blocking", true);
            //user preferences for download default directory.... need to ask
            chromeOptions.setExperimentalOption("userPrefences", userPrefences);

            //setting proxy
            Proxy chromeProxy = getProxyFromConfigFile(COGNIZANT_PROXY);
            //chromeOptions.setProxy(chromeProxy);
            capabilities.setCapability("Proxy",chromeProxy);

            capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);

            //chrome driver path
            System.setProperty(resourceRead.getResourceValueFromXML().getProperty(CHROME_DRIVERNAME_PROPERTY), resourceRead.getResourceValueFromXML().getProperty(CHROME_DRIVERPATH_PROPERTY));
            seleniumWebdriver = new ChromeDriver();
            seleniumWebdriver.manage().timeouts().pageLoadTimeout(Long.parseLong(resourceRead.getResourceValueFromXML().getProperty(TIME_OUT_PROPERTY)), TimeUnit.SECONDS);
            log.info("Exited the ChromeWebDriver method in BrowserInstanceFactory");
            return seleniumWebdriver;
        } catch (IOException e) {
            new ExceptionHandeler().genricExceptionHandeler(e);
            return null;
        } catch (ResourceCustomException e) {
            new ExceptionHandeler().resourceExceptionHandeler(e);
            return null;
        }
    }

    /**
     * @return return the instance of the web driver with the settings for Firefox
     */
    public static WebDriver firefoxWebDriver() {
        try {
            log.info("Entered the firefoxWebDriver method in BrowserInstanceFactory");
            String FIREFOX_DRIVERNAME_PROPERTY = "FireFoxDriverName";
            String FIREFOX_DRIVERPATH_PROPERTY = "FireFoxDriverPath";
            String TIME_OUT_PROPERTY = "WebDriverTimeOutInSeconds";
            WebDriver seleniumWebdriver = null;
            ResourceRead resourceRead = new ResourceRead();
            // firefox capabilities
            final DesiredCapabilities capabilities = DesiredCapabilities.firefox();
            //firefox options
            FirefoxOptions firefoxOptions = new FirefoxOptions();
            firefoxOptions.addArguments("disable-application-cache");
            firefoxOptions.addArguments("disk-cache-size=0");
            firefoxOptions.addArguments("disable-popup-blocking");
            firefoxOptions.addArguments("no-sandbox");

            FirefoxProfile firefoxProfile = new FirefoxProfile();
            firefoxProfile.setPreference("intl.accept_languages", "en");
            firefoxProfile.setPreference("disable-popup-blocking", true);
            firefoxOptions.setProfile(firefoxProfile);

            //setting proxy
            Proxy fireFoxProxy = getProxyFromConfigFile(COGNIZANT_PROXY);
            firefoxOptions.setProxy(fireFoxProxy);

            capabilities.setCapability(FirefoxOptions.FIREFOX_OPTIONS, firefoxOptions);

            //firefox driver path
            System.setProperty(resourceRead.getResourceValueFromXML().getProperty(FIREFOX_DRIVERNAME_PROPERTY), resourceRead.getResourceValueFromXML().getProperty(FIREFOX_DRIVERPATH_PROPERTY));
            seleniumWebdriver = new FirefoxDriver();
            seleniumWebdriver.manage().timeouts().pageLoadTimeout(Long.parseLong(resourceRead.getResourceValueFromXML().getProperty(TIME_OUT_PROPERTY)), TimeUnit.SECONDS);
            log.info("Exited the firefoxWebDriver method in BrowserInstanceFactory");
            return seleniumWebdriver;
        } catch (IOException e) {
            new ExceptionHandeler().genricExceptionHandeler(e);
            return null;
        } catch (ResourceCustomException e) {
            new ExceptionHandeler().resourceExceptionHandeler(e);
            return null;
        }
    }

    /**
     * @param proxyType
     * @return proxy object
     * This method returns the proxy details from the configuration file
     */
    private static Proxy getProxyFromConfigFile(String proxyType) {
        try {
            Proxy proxy = null;
            if (isConstantValuePresent(proxyType)) {
                switch (proxyType) {
                    case COGNIZANT_PROXY: {
                        String COGNIZANT_PROXY_SWITCH = new ResourceRead().getResourceValueFromXML().getProperty("CognizantProxySwitch");
                        if (isConstantValuePresent(COGNIZANT_PROXY_SWITCH) && COGNIZANT_PROXY_SWITCH.equalsIgnoreCase("enable")) {
                            String cognizantAddress = new ResourceRead().getResourceValueFromXML().getProperty("CognizantProxyAddress");
                            String cognizantAddressPort = new ResourceRead().getResourceValueFromXML().getProperty("CognizantProxyPort");
                            proxy = new Proxy();
                            proxy.setProxyType(Proxy.ProxyType.MANUAL);
                            proxy.setHttpProxy(cognizantAddress + ":" + cognizantAddressPort);
                            proxy.setSslProxy(cognizantAddress + ":" + cognizantAddressPort);
                            proxy.setFtpProxy(cognizantAddress + ":" + cognizantAddressPort);
                            proxy.setSocksProxy(cognizantAddress + ":" + cognizantAddressPort);
                        }
                        break;
                    }
                }
            }
            return proxy;
        } catch (IOException e) {
            new ExceptionHandeler().genricExceptionHandeler(e);
            return null;
        } catch (ResourceCustomException e) {
            new ExceptionHandeler().resourceExceptionHandeler(e);
            return null;
        } catch (InvalidInputException ex){
            new ExceptionHandeler().webDriverExceptionhandeler(ex);
            return null;
        }
    }
}
