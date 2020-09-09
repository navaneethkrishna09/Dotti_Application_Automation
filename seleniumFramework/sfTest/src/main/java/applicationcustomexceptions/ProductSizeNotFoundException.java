package applicationcustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class ProductSizeNotFoundException extends BaseAutomationException {

	private static final long serialVersionUID = 1L;

	public ProductSizeNotFoundException(){
        super();
    }

    public ProductSizeNotFoundException(String message){
        super(message);
    }

    public ProductSizeNotFoundException(String message, Exception ex){
        super(message,ex);
    }

}
