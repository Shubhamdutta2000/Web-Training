<?php 

  /* create cookie */
    
  // saving username to a cookie
  if(isset($_POST['submit'])){
    $username = htmlentities($_POST['username']);

    // to set a cookie use function setcookie()
    setcookie('username', $username, time()+3600);  // expires in 1 hour

    // header function to redirect to a different page.
    header('Location: page2.php');
  }
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>PHP Cookies</title>
    </head>

    <body>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <input type="text" name="username" placeholder="Enter Username"><br>
            <input type="submit" name="submit" value="Submit">
        </form>
    </body>

</html>