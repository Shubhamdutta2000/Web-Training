<?php 

    // Update a cookie
    setcookie('username', 'Frank', time() + (86400 * 30)); // expires in 1 month


    //  Delete a cookie    
    // to unset just set time to a past time
    // setcookie('username', 'Frank', time() - 3600);


    // check if there are any cookies
    if(count($_COOKIE) > 0) {
        echo 'There are '.count($_COOKIE).' cookies saved ' . '<br>';
    } else {
        echo 'There are no cookies saved' . '<br>';
    }

    
    // find out if the cookie is set
    if(isset($_COOKIE['username'])){
        echo 'User '. $_COOKIE['username'] . ' is set <br>';
    } else {
        echo 'User is not set';
    }

?>