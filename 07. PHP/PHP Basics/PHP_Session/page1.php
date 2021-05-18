<?php 
  if(isset($_POST['submit'])){

    session_start(); // start session
    
    // put post values to session array
    $_SESSION['name'] = htmlentities($_POST['name']);
    $_SESSION['email'] = htmlentities($_POST['email']);

    // redirect to new page 
    header('Location: page2.php');
    
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PHP Sessions</title>
</head>
<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <input type="text" name="name" placeholder="Enter Name"><br>
    <input type="text" name="email" placeholder="Enter Email"><br>
    <input type="submit" name="submit" value="Submit">
  </form>
</body>
</html>