<!DOCTYPE html>
<html>
<body>

<?php

/*
VARIABLES
    - Prefix $
    - Start with letter and underscore
    - case Sensitive
*/
 
// all data types variables
// number
$x = 5;
$y = 4;
echo $x + $y . "<br>";


// float
$float = 3.4;
echo $float . "<br>";


// boolean
$bool = true;
echo $bool. "<br><br>";


// string
$string1 = "Web Dev";
$string2 = "Training";

// concatenation of string
$greet1 = $string1 . " " . $string2 . "<br>"; // method1
$greet2 = "$string1 $string2 <br><br>"; // method2 (use double string as it parse variables)
echo $greet1;
echo $greet2;

// escape character
$string3 = 'We\'r here' . "<br>";
$string4 = "We'r here" . "<br><br>";
echo $string3;
echo $string4;


// constant variable
define('GREET', "Hello This is Constant variable!!");
echo GREET;

?>

</body>
</html>