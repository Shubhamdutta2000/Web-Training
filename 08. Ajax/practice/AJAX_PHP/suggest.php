<?php 

$people = [
  "Stere", "John", "Kathy", "Even", "Anthony", "Tom", "Rhonda", "Hal", "Ernie", "Johanna", "Farrah", "Linda", "Shawn", "Olivia", "Derek", "Amanda", "Rachel", "Katie", "Jillian", "Jose", "Malcom", "Greg", "Mary", "Brad", "Mike"
];
// get query string
$q = $_REQUEST['q'];

$suggestion = "";
// get suggestion
if($q !== ""){
  $q = strtolower($q);
  $len = strlen($q);
  foreach($people as $person){
    if(stristr($q, substr($person, 0, $len))){
      if($suggestion === ""){
        $suggestion = $person;
      } else {
        $suggestion .= ", $person";
      }
    }
  }
}

echo $suggestion === "" ? "No suggestion" : $suggestion;