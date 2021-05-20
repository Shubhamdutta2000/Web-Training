<?php 

    // connect to db
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    // chk connection
    if(mysqli_connect_errno()){
        // connection failed
        echo 'Failed to connect to phpBlog '. mysqli_connect_errno();
    }

  ?>