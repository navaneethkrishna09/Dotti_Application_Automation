package applicationcustomexceptions;

import com.seleniumframework.customexceptions.BaseAutomationException;

public class FileDownloadFailureException extends BaseAutomationException {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public FileDownloadFailureException(){
        super();
    }

    public FileDownloadFailureException(String message){
        super(message);
    }

    public FileDownloadFailureException(String message, Exception ex){
        super(message,ex);
    }

}
