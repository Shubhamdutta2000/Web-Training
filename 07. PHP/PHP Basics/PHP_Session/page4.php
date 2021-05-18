<?php 

  session_start();

// to unset a session

// to unset just one value
 unset($_SESSION['name']); 

 
// to destroy all sessions
  session_destroy();

?>