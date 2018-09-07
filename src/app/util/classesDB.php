<?php //This class handles everything that has to do with categories in the database
class CategoryDB {
	//Private so that no objects can be created from this class
	private function __construct(){}
	//Function to get all the categories objects from the categories table
	static public function getCategories() {
		//Access the PDO object
		global $db;
		//The query
		$query = 'SELECT categoryID, categoryName FROM categories ORDER BY categoryID';
		try {
			$statement = $db->prepare($query);
			$statement->execute();
			$categories = array();
			//Creates categories one at a time
			while($row = $statement->fetch()){
				$categories[$row['categoryID']] = [
					'id' => +$row['categoryID'],
					'name' => $row['categoryName']
				];
			}
			$statement->closeCursor();
			//Returns the array with all the categories
			return $categories;
			//If something goes wrong
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}

//This class handles everything that has to do with types in the database
class TypeDB {
	//Private so no instances can be created from it
	private function __construct(){}

	//Function to get all the type objects from the types table
	static public function getTypes() {
		//Access the PDO object
		global $db;
		//The query
		$query = 'SELECT typeID, typeName FROM types ORDER BY typeName';
		try {
			$statement = $db->prepare($query);
			$statement->execute();
			$types = array();
			//Creates categories one at a time
			while($row = $statement->fetch()){
				$types[$row['typeID']] = [
					'id' => +$row['typeID'],
					'name' => $row['typeName']
				];
			}
			$statement->closeCursor();
			//Returns the array with all the categories
			return $types;
			//If something goes wrong
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}

//This class handles everything that has to do with countries in the database
class CountryDB {
	//Private so no instances can be created from it
	private function __construct(){}
	
	//Function to get all the country objects from the countries table
	static public function getCountries() {
		global $db;
		$query = 'SELECT countryID, countryName FROM countries ORDER BY countryName';
		try {
			$statement = $db->prepare($query);
			$statement->execute();
			//It will return an array of objects
			$countries = array();
			while($row = $statement->fetch()){
				$countries[$row['countryID']] = [
					'id' => +$row['countryID'],
					'name' => $row['countryName']
				];
			}
			$statement->closeCursor();
			return $countries;
			//If anything happens catch the exception
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}

//This class ahndles everything that has to do with regions in the database
class RegionDB {
	private function __construct(){}
	
	//Function to get all the regions in the regions table
	static public function getRegions() {
		global $db;
		$query = 'SELECT regionID, regionName, countryID FROM regions ORDER BY regionName';
		try {
			$statement = $db->prepare($query);
			$statement->execute();
			$regions = array();
			while($row = $statement->fetch()){
				$regions[$row['regionID']] = [
					'id' => +$row['regionID'],
					'name' => $row['regionName'],
					'countryID' => +$row['countryID']
				];
			}
			$statement->closeCursor();
			//Returns an array of region instances
			return $regions;
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}

//This class handles everything that has to do with producers in the database
class ProducerDB {
	//Private so no instances can be created from it
	private function __construct(){}
	
	//Function to get all the producers in the producers table
	static public function getProducers() {
		global $db;
		$query = 'SELECT producerID, producerName, producerLastName FROM producers ORDER BY producerName';
		try {
			$statement = $db->prepare($query);
			$statement->execute();
			$producers = array();
			while($row = $statement->fetch()){
				$producers[$row['producerID']] = [
					'id' => +$row['producerID'],
					'name' => html_entity_decode( $row['producerName'], ENT_QUOTES),
					'lastName'=> html_entity_decode( $row['producerLastName'], ENT_QUOTES)
				];
			}
			$statement->closeCursor();
			//Return the array of instances
			return $producers;
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
	
	static public function getProducersByDrink($drink_id) {
		//Function to get the producers associated to a defined drinkID
		global $db;
		$query = 'SELECT producerID from drinkproducer WHERE drinkID = :drink_id';
		try {
			$statement = $db->prepare($query);
			$statement->bindValue(':drink_id', $drink_id);
			$statement->execute();
			$producers = array();
			//Retrieve an insatnce of the producer for every result
			while($row = $statement->fetch()){
				$producers[] = $row['producerID'];
			}
			return $producers;
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}


//This class handles everything that has to do with grapes in the database
class GrapeDB {
	//Private so no instances can be created from it
	private function __construct(){}
	
	//Function to get all the grapes in the grapes table
	//Returns an array of instances of the Grape class for every grape in the grapes table
	static public function getGrapes(){
		global $db;
		$query = 'SELECT grapeID, grapeName FROM grapes ORDER BY grapeName';
		try {
			$statement = $db->prepare($query);
			$statement->execute();
			$grapes = array();
			while($row = $statement->fetch()) {
				$grapes[$row['grapeID']] = [
					'id' => +$row['grapeID'],
					'name' => $row['grapeName']
				];
			}
			$statement->closeCursor();
			//Return the array of instances
			return $grapes;
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
	//Function to get the grapes that are related to a drink
	static public function getGrapesByDrink($drink_id){
		global $db;
		$query = 'SELECT grapeID from drinkgrape WHERE drinkID = :drink_id';
		try {
			$statement = $db->prepare($query);
			$statement->bindValue(':drink_id', $drink_id);
			$statement->execute();
			//It will return an array of instances of the Grape object
			$grapes = array();
			while($row = $statement->fetch()) {
				$grapes[] = $row['grapeID'];
			}
			return $grapes;
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}

//This class handles everything that has to do with drinks in the database
class DrinkDB {
	//Private so no instance can be created from it
	private function __construct(){}
	//Function to get insatnces of Drink from all the records in the drinks table
	static public function getDrinks() {
		global $db;
		$query = 'SELECT drinkID, name, categoryID, countryID, regionID, year, typeID, vegan, abv, price, available, description FROM drinks WHERE available = 1 ORDER BY price, name';
		try {
			//Get other tables' content
			//All categories
			$categories = CategoryDB::getCategories();
			//All countries
			$countries = CountryDB::getCountries();
			//All regions
			$regions = RegionDB::getRegions();
			//All types
			$types = TypeDB::getTypes();
			//All grapes
			$grapes = GrapeDB::getGrapes();
			//All producers
			$producers = ProducerDB::getProducers();

			$statement = $db->prepare($query);
			$statement->execute();
			$rows = $statement->fetchAll();
			$statement->closeCursor();
			$drinks = array();
			foreach($rows as $row) {
				//Gets an array of the drink's producers' ID
				$producersID = ProducerDB::getProducersByDrink($row['drinkID']);
				//Here will be stored the actual producers
				$drinkProducers = array();
				//For every ID
				foreach($producersID as $id){
					//Retrieve and store the actual producer
					$drinkProducers[] = $producers[$id];
				}

				//Gets an array of the drink's grapes' ID
				$grapesID = GrapeDB::getGrapesByDrink($row['drinkID']);
				//Here will be stored the actual grapes
				$drinkGrapes = array();
				//For every grape
				foreach($grapesID as $id){
					//Retrieve and store the actual grape
					$drinkGrapes[] = $grapes[$id];
				}

				$drinks[] = [
					'id' => +$row['drinkID'],
					'name' => html_entity_decode($row['name'], ENT_QUOTES),
					'category' => $categories[$row['categoryID']],
					'country' => $countries[$row['countryID']],
					'region' => $regions[$row['regionID']],
					'type' => $types[$row['typeID']],
					'vegan' => $row['vegan']? true : false,
					'abv' => +$row['abv'],
					'producers' => $drinkProducers,
					'grapes' => $drinkGrapes,
					'reviews' => ReviewsDB::getAverageByDrink($row['drinkID']),
					'year' => $row['year'],
					'price' => +$row['price'],
					'description' => $row['description']
				];
			}

			//Return an array of objects
			return $drinks;
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}

class ReviewsDB {
	//Private so that instances cannot eb created from this class
	private function __construct(){}
	
	static public function getAverageByDrink($drink_id){
		global $db;
		$query = "SELECT AVG(rate) AS rate, COUNT(rate) as count FROM reviews WHERE drinkID = :drink_id";
		try {
			$statement = $db->prepare($query);
			$statement->bindValue(':drink_id', $drink_id);
			$statement->execute();
			$row = $statement->fetch();
			$average = [round($row['rate']), +$row['count']];
			if($average[1] == 0){
				return FALSE;
			}
			return $average;
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	}
}
?>