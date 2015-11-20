<?php

require_once("XmlDataAccess.php");

class Dashboard extends XmlDataAccess {

	public function __construct()
    {
    	parent::__construct();
    }

	public function GetDashboard()
	{
		$response = array();

		if(is_null($this->GetXmlRootDashboard())){
			$response["status"] = "error";
	        $response["message"] = "Technical error - Dashboard's data are not accessible!";
	        return $response;
		}

		$response["panelTitlePrincipal"] = (string)$this->GetXmlRootDashboard()->panelTitlePrincipal;
		$response["panelBodyTitle"] = (string)$this->GetXmlRootDashboard()->panelBodyTitle;
		$response["panelBodyDescription"] = (string)$this->GetXmlRootDashboard()->panelBodyDescription;
		$response["button"] = (string)$this->GetXmlRootDashboard()->button;

		$imprimerie=array();
		$imprimerie["title"] = (string)$this->GetXmlRootDashboard()->imprimerie->title;
		$imprimerie["description"] = (string)$this->GetXmlRootDashboard()->imprimerie->description;
		$response["imprimerie"] = $imprimerie;

		$papeterie=array();
		$papeterie["title"] = (string)$this->GetXmlRootDashboard()->papeterie->title;
		$papeterie["description"] = (string)$this->GetXmlRootDashboard()->papeterie->description;
		$response["papeterie"] = $papeterie;

		$enseignes=array();
		$enseignes["title"] = (string)$this->GetXmlRootDashboard()->enseignes->title;
		$enseignes["description"] = (string)$this->GetXmlRootDashboard()->enseignes->description;
		$response["enseignes"] = $enseignes;

		foreach($this->GetXmlRootDashboard()->movies->children() as $youtube)
		{
			$response["movies"][] = (string)$youtube;
		}


		return $response;
	}
}

class DashboardFactory
{
    public static function create()
    {
        return new Dashboard();
    }
}

?>