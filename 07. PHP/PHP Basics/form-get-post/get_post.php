<?php

  // xss attack
  //   -- Cross-Site Scripting (XSS) attacks are a type of injection,
  //      in which malicious scripts are injected into trusted websites.

  //   -- XSS attacks occur when an attacker uses a web application to
  //      send malicious code, generally in the form of a browser side
  //      script, to a different end user.


  // To prevent XSS attack
  //  * htmlentities()
  //      -  This function may lead to excessive encoding
  //         and may cause some content to display incorrectly.


/* 
    NOT SAFE for Form (due to XSS attack)
    GET REQUEST (add data to query string in URL)
*/
if(isset($_GET['name'])){
  $name = htmlentities($_GET['name']);
//   $email = htmlentities($_GET['email']);
  echo "<b>GET REQUEST: </b>" . "<br>";
  echo "Name: " . $name . "<br>";
//   echo "Email: " . $email ;
 };


// POST REQUEST
// if(isset($_POST["name"])){
//   $name = htmlentities($_POST['name']);
//   $email = htmlentities($_POST['email']);
//   echo "<b>POST REQUEST: </b>" . "<br>";
//   echo "Name: " . $name . "<br>";
//   echo "Email: " . $email;
// }


// $_REQUEST works with either POST/GET request
// if(isset($_REQUEST['name'])){
//   $name = htmlentities($_REQUEST['name']);
//   $email = htmlentities($_REQUEST['email']);
//   echo "<b>REQUEST: </b>" . "<br>";
//   echo "Name: " . $name . "<br>";
//   echo "Email: " . $email ;
// }


// Query String (after ? in URL)
echo "<br>" . $_SERVER['QUERY_STRING'] . "<br>";

?>