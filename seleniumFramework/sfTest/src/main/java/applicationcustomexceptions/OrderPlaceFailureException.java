package applicationcustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class OrderPlaceFailureException extends BaseAutomationException {

	private static final long serialVersionUID = 1L;

	public OrderPlaceFailureException(){
        super();
    }

    public OrderPlaceFailureException(String message){
        super(message);
    }

    public OrderPlaceFailureException(String message, Exception ex){
        super(message,ex);
    }

}
