<!DOCTYPE html>
<html>
<body>

<?php


// Date
echo "Day is: " . date("d") . "<br>";         // day
echo "Month is: " . date("m") . "<br>";       // month
echo "Year is: " . date("Y") . "<br>";        // year
echo "Day Of the week is " . date("l"). "<br><br>";       // Day Of th eeek

// Combination od day month and year
echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br><br><br>";



// Time
echo "<b>Time</b>". "<br>";

// set time zone
date_default_timezone_set("Asia/Kolkata");

// get time zone
echo "Time Zone: ". date_default_timezone_get() . "<br>";

echo "Now Hour is " . date("h") . "<br>";
echo "Now Minute is " . date("i") . "<br>";
echo "Now Seconds is " . date("s") . "<br>";
echo "AM/PM is " . date("a") . "<br><br>";
// Full Time
echo "Today is (date and time): " . date("h:i:sa") . "<br><br><br>";



// Timestamp
/*  - It is a long integer containing number of seconds 
      between the UNIX Epoch (January 1 1970 00:00:00 GMT)
      and the time specified
*/
echo "<b>Timestamp</b>". "<br>";
$timestamp = mktime(10, 30, 50, 11, 15, 2000);
echo "Time in seconds: ". $timestamp. "<br><br><br>";



// Date and time with timestamp
echo "<b>Date with Time (by timestamp)</b>". "<br>";
echo "My Date Of Birth: ". date("d/m/Y - h:i:s a", $timestamp)


?>

</body>
</html>