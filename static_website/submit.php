<?php
require_once "Mail.php";

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
$to = 'yann.vote@gmail.com';
$email_subject = "[tradeschooltoulouse.fr]  Message de $name";
$email_body = "Nom : $name\nVille : $city\nCourriel : $email_address\n\nMessage :\n$message";
$headers = array('From' => "yann.vote@gmail.com",
  'Reply-To' => $email_address,
  'Subject' => $email_subject,
  'To' => $to);
$smtp = Mail::factory('smtp',
  array ('host' => $settings['smtp_host'],
     'port' => $settings['smtp_port'],
     'auth' => true,
     'username' => $settings['smtp_username'],
     'password' => $settings['smtp_password']));
$mail = $smtp->send($to,$headers,$email_body);
if (PEAR::isError($mail)) {
  error_log($mail->getMessage());
  return false;
} else {
  return true;
}
?>
