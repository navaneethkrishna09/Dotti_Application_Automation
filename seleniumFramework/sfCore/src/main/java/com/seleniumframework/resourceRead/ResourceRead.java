package com.seleniumframework.resourceRead;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.seleniumframework.customexceptions.ResourceCustomException;


import org.apache.log4j.Logger;

import java.io.File;
import java.io.FileReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * This class is used to read the property values from the XML file
 */
public class ResourceRead {
	public static String value = null;
    //Logger
    final static Logger log = Logger.getLogger(ResourceRead.class);

    /**
     * @return Properties object
     * @throws IOException
     * This method is used to fetch the properties values mentioned in the config.xml
     */
    public static Properties getResourceValueFromXML() throws ResourceCustomException, IOException  {
        log.info("Entered the getResourceValueFromXML in ResourceRead");
        File stocks = new File("../sfTest/src/main/resources/config.xml");
        Properties props = new Properties();
        if(stocks.exists()){
            FileInputStream fis = new FileInputStream(stocks);
            props.loadFromXML(fis);
        }else{
            throw new ResourceCustomException("Configuration file not found in classpath");
        }
        log.info("Exited the getResourceValueFromXML in ResourceRead");
        return props;
    }

    public static Properties getEmailConfigValue() throws ResourceCustomException, IOException  {
        log.info("Entered the getEmailConfigValue in ResourceRead");
        File stocks = new File("../sfTest/src/main/resources/email-config.xml");
        Properties props = new Properties();
        if(stocks.exists()){
            FileInputStream fis = new FileInputStream(stocks);
            props.loadFromXML(fis);
        }else{
            throw new ResourceCustomException("Configuration file not found in classpath");
        }
        log.info("Exited the getEmailConfigValue in ResourceRead");
        return props;
    }

    /**
     * @return Propeties object
     * @throws IOException
     * This method is used to fetch the properties values mentioned in the .properties Files
     */
    public Properties getResourceValueFromProperties(String propertyFileName) throws ResourceCustomException, IOException {
        log.info("Entered the getResourceValueFromProperties in ResourceRead");
        InputStream inputStream = getClass().getResourceAsStream(propertyFileName);
        Properties properties = new Properties();
        if (inputStream != null) {
            properties.load(inputStream);
          //  properties.load(new InputStreamReader(inputStream, Charset.forName("UTF-8")));
        } else {
            throw new ResourceCustomException("Property file " + propertyFileName + " not found in classpath");
        }
        log.info("Exited the getResourceValueFromProperties in ResourceRead");
        return properties;
    }
    
    public String getResourceValueFromJSON(String propertyFileName,String jsonObject,String jsonSubObject)
    {
    	log.info("Entered the getResourceValueFromJSON in ResourceRead");
    	JsonParser parser = new JsonParser();
    	JsonObject obj = new JsonObject();
    	FileReader reader;
		try {
			reader = new FileReader(propertyFileName);
			Object object = parser.parse(reader);
			JsonArray jsonlist = (JsonArray)object;
			System.out.println("&&&&&&&&&&&&&&&&&"+jsonlist);
			//jsonlist.forEach(element -> jsonGet((JsonObject)element,jsonObject,jsonSubObject));
			for(int i=0;i!=jsonlist.size()-1;i++)
			{
				JsonElement element = jsonlist.get(i);
				int flag = jsonGet((JsonObject)element,jsonObject,jsonSubObject);
				if(flag == 1)
					break;
				
			}
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} 	
		return value;
    	
    }
    
    private int jsonGet(JsonObject obj,String jsonObject,String jsonSubObject)
    {	
    	int flag = 0;
    	if(obj.has(jsonObject.toLowerCase()))
    	{
    		JsonObject mainObj = (JsonObject) obj.get(jsonObject.toLowerCase());
    		if(mainObj.has(jsonSubObject.toLowerCase()))
    		{
    				value =  mainObj.get(jsonSubObject.toLowerCase()).getAsString();
    				System.out.println(value);
    				flag = 1;
    		}
    	}
    	return flag;
    }
    /*public static void main(String[] args) throws IOException {
        String browserName = getResourceValue().getProperty("Browser");
        System.out.println(browserName);
    }*/
}






