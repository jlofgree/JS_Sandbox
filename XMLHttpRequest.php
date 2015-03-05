<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$stuff = $_GET['stuff'];
	$stuffArray = array('drums','code','music');
	if(in_array($food,$foodArray))
		echo 'I do know about '.$stuff.'!';
	elseif($stuff=='')
		echo 'Enter one of my hobbies';
	else
		echo 'Sorry, I don\'t know anything about '.$stuff.'!';
echo '</response>';
?>