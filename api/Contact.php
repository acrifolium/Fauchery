<?php

require_once("Mailer.php");

class Contact {

	public function __construct()
    {
    	parent::__construct();
    }

	public function SendMail($lastname, $firstname, $email, $company, $telephone, $message)
	{
		$response = array();

		if(is_null($this->GetXmlRootConfig())){
			$response["status"] = "error";
	        $response["message"] = "Technical error - Config's data are not accessible!";
	        return $response;
		}

      	$content = "Nom: " .$lastname;
      	$content .= "<br>Prénom: " .$firstname;
      	$content .= "<br>Email: " .$email;
      	$content .= "<br>Société: " .$company;
      	$content .= "<br>Téléphone: " .$telephone;
      	$content .= "<br>Message: " .$message;

		$mailer = MailerFactory::create();
		if($mailer->SendMail("ContactForm", $email, $content)){

			$response["status"] = "success";
		    $response["message"] = "L'Email a bien été envoyé.";
		}
		else{
			$response["status"] = "error";
		    $response["message"] = "L'envoie de l'Email est impossible.";
		}

		return $response;
	}
}

class ContactFactory
{
    public static function create()
    {
        return new Contact();
    }
}

?>