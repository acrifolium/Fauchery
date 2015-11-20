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