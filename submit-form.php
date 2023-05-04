<?php
  require 'vendor/autoload.php';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'vendor/phpmailer/phpmailer/src/Exception.php';
  require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
  require 'vendor/phpmailer/phpmailer/src/SMTP.php';

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $ip = $_SERVER['REMOTE_ADDR'];
    $message = "";

    $mail = new PHPMailer(true);
    try {
      //Server settings
      $mail->SMTPDebug  = 0;                                        // Enable verbose debug output
      $mail->isSMTP();                                              // Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                         // Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                     // Enable SMTP authentication
      $mail->Username   = 'nicdef.develop@gmail.com';               // SMTP username
      $mail->Password   = 'btaeoznxncgbcojr';                       // SMTP password
      $mail->SMTPSecure = 'tls';                                    // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
      $mail->Port       = '587';                                    // TCP port to connect to

      // Recipients
      $mail->setFrom($email, $name);
      $mail->addAddress('', '');   // Add a recipient

      // Content
      $mail->isHTML(true);                                          // Set email format to HTML
      $mail->CharSet = 'UTF-8';                                     // Set CharSet to UTF-8
      $mail->Subject = 'Kontakt Formular Sendung';
      $mail->Body    = $message;

      $mail->send();
      $response = 'Nachricht wurde gesendet';
      setcookie('response', $response);
    } catch (Exception $e) {
      $response = "Nachricht konnte nicht gesendet werden. Mailer Fehler: {$mail->ErrorInfo}";
      setcookie('response', $response);
      var_dump($mail);
    }
  }

  clearstatcache();
  header("Location: kontakt.html");
?>
