package applicationcustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class InvalidCheckoutEmailIDException extends BaseAutomationException {

	private static final long serialVersionUID = 1L;

	public InvalidCheckoutEmailIDException(){
        super();
    }

    public InvalidCheckoutEmailIDException(String message){
        super(message);
    }

    public InvalidCheckoutEmailIDException(String message, Exception ex){
        super(message,ex);
    }

}
