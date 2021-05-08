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
  echo '5 passed';
}else echo '5 not passed';


# nesting ifs

$num = 4;
if($num >= 5) {
  if($num < 10){
    echo $num.' passed <br>';
  }echo 'pass 1 <br>';
}else echo 'no pass <br>';


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


# switch 

$favColor = 'red';

switch($favColor){
  case 'red':
    echo 'Your fav color is red.';
    break;
  case 'yellow':
    echo 'Your fav color is yellow';
    break;
  case 'green':
    echo 'not sure';
    break;
  default:
    echo 'We don\'t know your fav color';
}



?>
 
</body>
</html>