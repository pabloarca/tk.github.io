<?php

$to = "info@terrakit.es";

$nombre = htmlentities($_POST['name']);
$email = htmlentities($_POST['email']);

echo $nombre.'<br> '.$email
?>
