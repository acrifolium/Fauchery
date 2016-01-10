<?php
 	require_once("libs/Rest.inc.php");	
	require_once("Contact.php");

	class API extends REST {
	
		public $data = "";

		public function __construct(){
			parent::__construct();				// Init parent contructor
		}
		
		/*
		 * Dynmically call the method based on the query string
		 */
		public function processApi(){
			$func = strtolower(trim(str_replace("/","",$_REQUEST['x'])));
			if((int)method_exists($this,$func) > 0)
				$this->$func();
			else
				$this->response('',404); // If the method not exist with in this class "Page not found".
		}

		private function sendMail(){
			if($this->get_request_method() != "POST"){
				$this->response('',406);
			}

			$data = json_decode(file_get_contents("php://input"),true);
			$lastname = $data['lastname'];
			$firstname = $data['firstname'];
			$email = $data['email'];
			$company = $data['company'];
			$telephone = $data['telephone'];
			$message = $data['message'];

			$func = ContactFactory::create();
			if(is_null($func))
				$this->response('',406);
			else{
				$result = $func->SendMail($lastname, $firstname, $email, $company, $telephone, $message);

				if($result['status'] == "success")
					$this->response($this->json($result), 200);
				else $this->response($this->json($result), 406);
			}
		}

		/*
		 *	Encode array into JSON
		*/
		private function json($data){
			if(is_array($data)){
				return json_encode($data);
			}
		}
	}
	
	// Initiiate Library
	
	$api = new API;
	$api->processApi();
?>