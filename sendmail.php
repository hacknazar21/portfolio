<?php 
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->isHTML(true);

	$mail->setFrom('client@nazarportfolio.com', 'Клиент');
	$mail->addAddress('v1lascework@gmail.com');

	$mail->Subject = 'Потенциальный клиент!';

	$body = '<h1>Вам написал потенциальный клиент</h1>';
	$body .= '<p>Имя и фамилия: </p>'.$_POST['name'];
	$body .= '<p>E-mail: </p>'.$_POST['email'];
	$body .= '<p>Телефон: </p>'.$_POST['tel'];

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Ошибка';
	}
	else $message = 'Данные отправлены!';

	$response = ['message' => $message];

	header('Content-type: application/json');

	echo json_encode($response);
 ?>