<?php

require_once("XmlDataAccess.php");

class Service extends XmlDataAccess {

	public function __construct()
    {
    	parent::__construct();
    }

	public function GetService($id)
	{
		$response = array();

		if(is_null($this->GetXmlRootService())){
			$response["status"] = "error";
	        $response["message"] = "Technical error - Service's data are not accessible!";
	        return $response;
		}

		foreach ($this->GetXmlRootService()->service  as $service) 
		{
			if (isset($service['id']) && $service['id'] == $id)
			{			
				if($id == 2) // Imprimerie
				{
					$response["title"] = (string)$service->title;
					$response["description"] = (string)$service->description;
					$response["youtube"] = (string)$service->youtube;

					$offset = array();
					$offset["title"] = (string)$service->offset->title;
					$offset["description"] = (string)$service->offset->description;
					$response["offset"] = $offset;

					$prepresse = array();
					$prepresse["title"] = (string)$service->prepresse->title;
					$prepresse["description"] = (string)$service->prepresse->description;
					$response["prepresse"] = $prepresse;

					$numerique = array();
					$numerique["title"] = (string)$service->numerique->title;
					$numerique["description"] = (string)$service->numerique->description;
					$response["numerique"] = $numerique;
					return $response;
				}
				elseif ($id == 3) // Papeterie
				{
					$response["title"] = (string)$service->title;
					$response["linkApluspapeterie"] = (string)$service->linkApluspapeterie;
					$response["linkContent"] = (string)$service->linkContent;
					$response["youtube"] = (string)$service->youtube;					
					$response["paragraphe1"] = (string)$service->paragraphe1;
					$response["paragraphe2"] = (string)$service->paragraphe2;
					$response["paragraphe3"] = (string)$service->paragraphe3;
					$response["paragraphe4"] = (string)$service->paragraphe4;
					$response["paragraphe5"] = (string)$service->paragraphe5;
					return $response;
				}
				elseif ($id == 4) // Enseignes
				{
					$response["title"] = (string)$service->title;
					$response["description"] = (string)$service->description;

					$enseignes = array();
					$enseignes["title"] = (string)$service->enseignes->title;
					$enseignes["description"] = (string)$service->enseignes->description;
					$response["enseignes"] = $enseignes;

					$bureau = array();
					$bureau["title"] = (string)$service->bureau->title;
					$bureau["description"] = (string)$service->bureau->description;
					$response["bureau"] = $bureau;

					$vehicule = array();
					$vehicule["title"] = (string)$service->vehicule->title;
					$vehicule["description"] = (string)$service->vehicule->description;
					$response["vehicule"] = $vehicule;
					return $response;
				}
			}
		}

	    $response['status'] = "error";
	    $response['message'] = 'No such Services have been stored';

		return $response;		
	}
}

class ServiceFactory
{
    public static function create()
    {
        return new Service();
    }
}

?>