<?php 

    // store more than one piece of date in cookies using arrays
    $user = [
                'name' => 'Brad',
                'email' => 'test@test.com',
                'age' => 35
            ];
    /* 
        NOTE:
            - to prepare array data to be stored we need to serialize data 
              because fxn setcookie() won't take cookie name as an array since it is not a string
    */

    // serialize array data then store to cookie
    $user = serialize($user);
    setcookie('user', $user, time() + (86400 * 30));


    // unserialized so it could be read as an array
    $user = unserialize($_COOKIE['user']); 
    echo $user['name'];

?>