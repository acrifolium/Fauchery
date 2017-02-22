<meta charset="utf-8" />
<?php
if (isset($_POST['lastname']) && 
	isset($_POST['firstname']) && 
	isset($_POST['email']) && 
	isset($_POST['subject']) && 
	isset($_POST['message'])) {

	$data = array('success' => true, 'message' => 'email sent');
	header('Content-Type: application/json');
    http_response_code(200);
    echo json_encode($data);
}
else {
	$data = array('success' => false, 'message' => 'email not sent');
	header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode($data);
}

?>

