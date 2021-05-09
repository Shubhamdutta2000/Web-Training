<?php 
# $_SERVER SUPERGLOBAL
// create server array
$server = [
  'Host Server Name' => $_SERVER['SERVER_NAME'],
  'Host Header' => $_SERVER['HTTP_HOST'],
  'Server Software' => $_SERVER['SERVER_SOFTWARE'],
  'Document Root' => $_SERVER['DOCUMENT_ROOT'],
  'Current Page' => $_SERVER['PHP_SELF'],
  'Script Name' => $_SERVER['SCRIPT_NAME'],
  'Absolute Path' => $_SERVER['SCRIPT_FILENAME'],
];

//echo $server['Host Server Name'];
//echo $server['Host Header'];
//echo $server['Server Software'];
// echo '$server<pre>';
// print_r($server);
// echo '</pre>';


// create client array
$client = [
  'Client System Info' => $_SERVER['HTTP_USER_AGENT'],
  'Client IP' => $_SERVER['REMOTE_ADDR'],
  'Remote Port' => $_SERVER['REMOTE_PORT'],
];

// echo '$client <pre>';
// print_r($client);
// echo '<pre>';

// phpinfo()

?>