<?php 

$dsn = 'mysql:host=localhost;dbname=gian_luigi_wineshop';

$username = 'gian_luigi';

$password = 'Roodnepoym.93';

$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);



try {

	$db = new PDO($dsn, $username, $password, $options);

} catch (PDOException $e) {

	$error = $e->getMessage();

	echo 'FAILED PDO' . $error;

} catch (Exception $e) {

	$error = $e->getMessage();

	echo 'FAILED EXCEPTION';

}

?>