<?php 
// if session_start is not included we get a warning for undefined var _SESSION
  session_start();

  echo '<pre>';
  print_r($_SESSION);
  echo '</pre>';
  
  $name = isset($_SESSION['name']) ? $_SESSION['name'] : 'Guest';
  $email = isset($_SESSION['email']) ? $_SESSION['email'] : 'Not Subscribed';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>PHP Session page3</title>
        </head>
    <body>
        <h1>Hello <?php echo $name; ?></h1>
    </body>
</html>