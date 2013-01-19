<?php

session_start();

$hash = $_POST["hash"];

//echo $hash;

// Connecting, selecting database
$link = mysql_connect('localhost', 'a786_admin', 'ag-hack')
    or die('Could not connect: ' . mysql_error());
//echo 'Connected successfully';
mysql_select_db('a786_card_greetings') or die('Could not select database');

// Performing SQL query
$query = 'SELECT * FROM `CardHash` WHERE card_hash="'.$hash.'"';

$result = mysql_query($query) or die('Query failed: ' . mysql_error());

$line = mysql_fetch_array($result, MYSQL_ASSOC);

$resource = $line['resource_urls'];

echo $resource;

// Free resultset
mysql_free_result($result);

// Closing connection
mysql_close($link);

?>