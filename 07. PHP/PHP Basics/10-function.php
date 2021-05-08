<!DOCTYPE html>
<html>
<body>

<?php

/*
    Camel Case: myFunction()
    Lower Case: my_Function()
    Pascal Case: ClassName()
*/

// simple func
function writeMsg() {
    echo "Hello world!";
}
writeMsg();


// func with params
function familyName($fname) {
    echo "$fname Refsnes.<br>";
}
familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");
familyName(10000);


echo "<br><br>";


// return in function
function multiplyNum($num1, $num2) {
    return $num1 * $num2 ;
}
echo multiplyNum(4, 5) . "<br><br>";


// reference in functions
$myNum = 1;
function addNum(&$num) {
    $num += 2;
}
addNum($myNum);

echo "Global value 'myNum' changed to: $myNum";

?>

</body>
</html>