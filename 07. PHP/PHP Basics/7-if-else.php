<!DOCTYPE html>
<html>
<body>

<?php

/*
# conditionals

  = is set to
  == equal to 
  === identical to  
*/

$num = '5';
 
if($num === 5){
  echo '5 passed' . "<br><br>";
}else echo '5 not passed' . "<br><br>";


# nesting ifs

$num = 4;
if($num >= 5) {
  if($num < 10) {
    echo $num.' passed <br><br>';
  }
  echo 'pass 1 <br><br>';
}else {
  echo 'no pass <br><br>';
};


/* logical operators
  and &&
  or ||
  xor
  */
$num = 6;
if($num > 4 xor $num < 15) {
    echo $num.' passed';
} else {
    echo $num. ' no pass';
}

?>
 
</body>
</html>