<?php

require_once("XmlDataAccess.php");

class Mailer extends XmlDataAccess {

	private $mailFrom;

	public function __construct()
    {
    	parent::__construct();

    	$this->mailTo = $this->GetXmlRootConfig()->contact->mail;
    }

    public function SendMail($type, $mailFrom, $content){

    	switch ($type) {

    		case "ContactForm":

    			$subject = "Site Web Fauchery";
				$body = "<html>";
				$body .= "<head>";
				$body .= "<title>Fauchery</title>";
				$body .= "</head>";
				$body .= "<body>";
				$body .= "<h1>Site Web Fauchery</h1>";
				$body .= "<h3>" . $content . "</h3>";
				$body .= "</body>";
				$body .= "</html>";

				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
				$headers .= "From: <".$mailFrom.">" . "\r\n";

				// The mail is sent to Fauchery mail store from this WebSite
				return mail($this->mailTo, $subject, $body, $headers);

    			break;
    		default:
    			# code...
    			break;
    		}

    	return false;
    }
}

class MailerFactory
{
    public static function create()
    {
        return new Mailer();
    }
}
?>