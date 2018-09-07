<?php 
//Set error display for testing
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


//Model file for the database connection
include("./database_connection.php");
//Include the interactions with the database
include("./classesDB.php");


$subject = filter_input(INPUT_GET, 'subject', FILTER_SANITIZE_STRING);


switch($subject){
	case 'categories':
		$categories = CategoryDB::getCategories();
		$categories = array_values($categories);
		echo json_encode($categories);
		break;
	case 'types':
		$types = TypeDB::getTypes();
		$types = array_values($types);
		echo json_encode($types);
		break;
	case 'countries':
		$countries = CountryDB::getCountries();
		$countries = array_values($countries);
		echo json_encode($countries);
		break;
	case 'regions':
		$regions = RegionDB::getRegions();
		$regions = array_values($regions);
		echo json_encode($regions);
		break;
	case 'producers':
		$producers = ProducerDB::getProducers();
		$producers = array_values($producers);
		echo json_encode($producers);
		break;
	case 'grapes':
		$grapes = GrapeDB::getGrapes();
		$grapes = array_values($grapes);
		echo json_encode($grapes);
		break;
	case 'drinks':
		$drinks = DrinkDB::getDrinks();
		echo json_encode($drinks);
		break;
}
?>