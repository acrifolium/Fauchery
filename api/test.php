<html>
<head>
  <meta charset="utf-8">
  <title>PHP Test</title>
</head>
<body>

<?php
//phpinfo();
	require_once('Service.php');

	/*
	 *	Encode array into JSON
	*/
	function json($data){
		if(is_array($data)){
			return json_encode($data);
		}
	}

	$response = array();
	$func = ServiceFactory::create();

	$response = json($func->GetService(4));
	
		// $result = $func->SendMail("azevedo", "olivier", "olivier.azevedo@gmail.com", "", "", "testtest");
		// if($result['status'] == "success")
		// 	$response = json($result);
		// else $response = json($result);

echo $response;

?>

</body>
</html>