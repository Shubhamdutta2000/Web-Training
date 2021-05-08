<!DOCTYPE html>
<html>
<body>

<?php

// method 1
$cars = array("Volvo", 10, "Toyota"); 
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . "." . "<br><br>";

// method 2
$people = ["John", "Ram", "Jennifer"];
echo $people[2] . "<br><br>";

//Add items 
$people[3] = "Sam";
$people[] = "Shubham";  // by default add data to last

// count
echo count($people) . "<br><br>";

// print the whole array
print_r($people);

echo "<br><br>";

// print the whole array and also tell about data type of each value in the array
// it dumbs the information of the variable
var_dump($people);

echo "<br><br>";

// Assciative Array
$person = ["Shubham" => 20, "John" => 20];
$person["Ram"] = 18;
var_dump($person);

echo "<br><br>";


// Multi-Dimensional Array
$cars = array(
    array("Honda", 22, 11),
    array("Toyota", 22, 11),
    array("Swift", 22, 11)
);
echo $cars[1][0];

?>

</body>
</html>