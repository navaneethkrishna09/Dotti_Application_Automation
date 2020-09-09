package applicationcustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class InvalidLoginException extends BaseAutomationException {

	public InvalidLoginException()
	{
		super();
	}
	
	public InvalidLoginException(String message)
	{
		super(message);
	}
	
	public InvalidLoginException(String message,Exception ex)
	{
		super(message,ex);
	}
}
