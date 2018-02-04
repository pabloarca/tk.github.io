<?php
require 'PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$to = "info@terrakit.es"; // Nuestro correo de contacto
// recogeremos los datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];

if($nombre == "" || $email == ""):
	echo '<div class="alert alert-danger">Todos los campos son requeridos para el envio</div>';
else:
	$mail->From = $email;
	$mail->addAddress($to);
	
	$mail->isHtml(true);
	$mail->Body = '<strong>'.$nombre.'</strong> le ha contactado desde su web, y le ha enviado el siguiente mensaje: ;
	$mail->CharSet = 'UTF-8';
	$mail->send();
endif;
?>
