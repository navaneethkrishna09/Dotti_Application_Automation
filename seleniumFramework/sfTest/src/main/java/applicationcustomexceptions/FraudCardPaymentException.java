package applicationcustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class FraudCardPaymentException extends BaseAutomationException {

	private static final long serialVersionUID = 1L;

	public FraudCardPaymentException(){
        super();
    }

    public FraudCardPaymentException(String message){
        super(message);
    }

    public FraudCardPaymentException(String message, Exception ex){
        super(message,ex);
    }

}
