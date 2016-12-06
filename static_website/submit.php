<?php
require_once "class.phpmailer.php";

$settings = parse_ini_file('config/config.ini');

// Check for empty fields
if(empty($_POST['name']) ||
   empty($_POST['city']) ||
   empty($_POST['email']) ||
   empty($_POST['message']) ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
  error_log("No arguments Provided!");
  return false;
   }

$name = $_POST['name'];
$city = $_POST['city'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'tradeschooltoulouse@gmail.com';
$email_subject = "[tradeschooltoulouse.fr]  Message de $name";
$email_body = "Nom : $name\nVille : $city\nCourriel : $email_address\n\nMessage :\n$message";
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->SMTPDebug = 1;
$mail->Host = $settings['smtp_host'];
$mail->Port = $settings['smtp_port'];
$mail->Username = $settings['smtp_username'];
$mail->Password = $settings['smtp_password'];
$mail->SetFrom('contact@tradeschooltoulouse.fr');
$mail->Subject = $email_subject;
$mail->AddAddress($to);
$mail->AddReplyTo($email_address);
$mail->MsgHTML($email_body);
if ($mail->Send()) {
  return true;
} else {
  error_log($mail->ErrorInfo);
  return false;
}
?>
