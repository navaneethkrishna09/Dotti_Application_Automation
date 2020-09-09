package com.seleniumframework.emailreport;

import com.seleniumframework.base.BasePage;
import com.seleniumframework.customexceptions.ExceptionHandeler;
import com.seleniumframework.customexceptions.ResourceCustomException;
import com.seleniumframework.resourceRead.ResourceRead;
import org.apache.log4j.Logger;

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Properties;

public class SentEmailReport extends BasePage {

    final static Logger log = Logger.getLogger(SentEmailReport.class);

    public static void sendEmailWithAttachments(){
        try{
            log.info("Entered sendEmailWithAttachments method in SentEmailReport class");
            // sets SMTP server properties
            Properties properties = new Properties();
            final String username = ResourceRead.getEmailConfigValue().getProperty("senderUsername");
            final String password = ResourceRead.getEmailConfigValue().getProperty("senderPassword");
            properties.put("mail.smtp.host", ResourceRead.getEmailConfigValue().getProperty("host"));
            properties.put("mail.smtp.port", ResourceRead.getEmailConfigValue().getProperty("hostPort"));
            properties.put("mail.smtp.auth", "true");
            properties.put("mail.smtp.starttls.enable", "true");
            properties.put("mail.user", username);
            properties.put("mail.password", password);

            // creates a new session with an authenticator
            Authenticator auth = new Authenticator() {
                public PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            };
            Session session = Session.getInstance(properties, auth);

            // creates a new e-mail message
            Message msg = new MimeMessage(session);

            msg.setFrom(new InternetAddress(ResourceRead.getEmailConfigValue().getProperty("senderUsername")));
            InternetAddress[] toAddresses = InternetAddress.parse(ResourceRead.getEmailConfigValue().getProperty("recepients"));
            msg.setRecipients(Message.RecipientType.TO, toAddresses);
            LocalDate localDate = LocalDate.now();
            String testRunDate = DateTimeFormatter.ofPattern("dd/MM/yyyy").format(localDate);
            msg.setSubject(ResourceRead.getEmailConfigValue().getProperty("emailSubject") + testRunDate);
            msg.setSentDate(new Date());

            // creates message part
            MimeBodyPart messageBodyPart = new MimeBodyPart();
            messageBodyPart.setContent(ResourceRead.getEmailConfigValue().getProperty("emailMessageBody"), "text/html");

            // creates multi-part
            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(messageBodyPart);

            // adds attachments
            String[] attachFiles = new String[1];
            attachFiles[0] = ResourceRead.getResourceValueFromXML().getProperty("TestResultLocationPath") + logProjectName + ResourceRead.getResourceValueFromXML().getProperty("EmailContentLocation") + logProjectName + ".zip";
            if (attachFiles != null && attachFiles.length > 0) {
                for (String filePath : attachFiles) {
                    MimeBodyPart attachPart = new MimeBodyPart();

                    try {
                        attachPart.attachFile(filePath);
                    } catch (IOException ex) {
                        ex.printStackTrace();
                    }

                    multipart.addBodyPart(attachPart);
                }
            }

            // sets the multi-part as e-mail's content
            msg.setContent(multipart);

            // sends the e-mail
            Transport.send(msg);
            log.info("Email had sent successfully");
            log.info("Entered sendEmailWithAttachments method in SentEmailReport class");
        }catch (ResourceCustomException | MessagingException | IOException ex){
            log.info("Email had not sent successfully");
            new ExceptionHandeler().emailReportExceptionhandeler(ex);
        }
    }
}