<!DOCTYPE html>
<html>
<body>

<?php 

/*

for-loop
while-loop
do-while-loop
foreach-loop

*/ 

# for-loop
# @params - init, condition, increment
echo "FOR loop" . "<br><br>";
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}


echo "<br><br><br>";


# while loop
# @params - condition
echo "WHILE loop<br><br>";
$i = 5;
while($i < 10) {
    echo $i . "<br>";
    $i++;
}


echo "<br><br><br>";


# do-while loop
# @params - condition
echo "Do.While loop<br><br>";
$i = 1;
do{
    echo $i . "<br>";
    $i++;
}while($i < 10);


echo "<br><br><br>";


# foreach loop
# @params - for arrays
echo "Foreach loop<br><br>";
$people = ["Shubham", "John", "William"];
foreach ($people as $person) {
    # code...
    echo $person . "<br>";
}


echo "<br><br><br>";


# @params - for associative arrays
echo "Foreach loop in associative array <br><br>";
$people = ["Shubham" => "sd@gmail.com", "John" => "john@gmaail.com", "William" => "will@gmail.com"];
foreach ($people as $person => $email) {
    # code...
    echo $person . " : " . $email . "<br>";
}

echo "<br><br><br>";

?>

</body>
</html>