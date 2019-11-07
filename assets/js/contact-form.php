<?php

if (isset($_POST['submit'])) {
$name = $_POSR['name'];
$subject = $_POSR['subject'];
$mailfrom = $_POSR['mail'];
$message = $_POSR['message'];

$mailTo = "maiadacx@gmail.com";
$headers = "From: ".$mailFrom;
$txt = "You have received an email from".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);

header("Location: index.php?mailsend");

}