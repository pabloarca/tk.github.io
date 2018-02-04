<?php

$to = "info@terrakit.es";

$nombre = htmlentities($_POST['name']);
$email = htmlentities($_POST['email']);

if($nombre == "" || $email == "");
  echo '<div class="alert alert-danger">Todos los campos son requeridos</div>';
else:
endif;
?>
