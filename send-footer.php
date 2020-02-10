<?php
header('Content-Type: text/html; charset=utf-8');
// Recupero datos
$name 		=	trim(htmlspecialchars($_POST["f-name"], ENT_QUOTES));
$email 		=	trim(htmlspecialchars($_POST["f-mail"], ENT_QUOTES));
$asunto =	trim(htmlspecialchars($_POST["f-subjet"], ENT_QUOTES));

$error = 0;


// Valido que los campos esten seteados
if (empty($name) || empty($asunto) || empty($email) || $name == NULL || $asunto == NULL || $email == NULL ) {
  /*
  * DEBUG
  echo '<div><p>Email: '. $name .'</p><div>';
  echo '<div><p>Email: '. $email .'</p><div>';
  echo '<div><p>Comentario: '. $asunto .'</p><div>';
  die();*/
  echo '<div class="alert alert-danger" role="alert">Todos los campos son obligatorios</div>';
  die();
}
else
{
  // VALIDACIONES
  if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/",$email)) {
    echo '<div class="alert alert-danger" role="alert">Por favor, escriba un email válido.</div>';
    $error = 1;
    die();
  }
}

// Si no hay errores
if ($error != 1) {


  // Envio al administrador del sitio
  // Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
  $email_from = "info@consultoraov.com.ar";
  $email_to = "info@consultoraov.com.ar";
  $email_subject = "Nueva solicitud de contacto";

  // Contenido del mensaje
  $email_message = "Detalles del formulario de contacto:\n\n";
  $email_message .= "Nombre: " . $name . "\n\n";
  $email_message .= "E-mail: " . $email . "\n\n";
  $email_message .= "Asunto: " . $asunto . "\n\n";
  $email_message .= "Nueva solicitud de contacto web.\n\n";

  // Ahora se envía el e-mail usando la función mail() de PHP
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  $resultado = @mail($email_to, $email_subject, $email_message, $headers);

  if ($resultado) {
    // Aviso en el formulario
    echo '<div class="alert alert-success" role="alert">El formulario fue enviado exitosamente</div>';
    echo "<script>jQuery('#btn_enviar_footer').hide();</script>";
  }else {
    echo '<div class="alert alert-danger" role="alert">Parece que hubo un error</div>';
  }


}

?>
