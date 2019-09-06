<?php

include './assets/functions/functionsAjax.php';

if ($_POST["mensaje"]) {

    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LcD_7YUAAAAALknOmQFhv8p5NeSIgeECDTnK290';
    $recaptcha_response = $_POST['recaptcha_response'];
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    if ($recaptcha->score >= 0.7) {
        // OK. ERES HUMANO, EJECUTA ESTE CÓDIGO
        $para = 'ignacioporras93@gmail.com';
        $titulo = $_POST["titulo"];
        $mensaje = $_POST["mensaje"];
        $cabeceras = 'From: info@rapoporras.com' . "\r\n" .
            'Reply-To:  info@rapoporras.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($para, $titulo, $mensaje, $cabeceras);
    } else {
        // KO. ERES ROBOT, EJECUTA ESTE CÓDIGO
        $para = 'ignacioporras93@gmail.com';
        $titulo = $_POST["titulo"];
        $mensaje = "Robot->".$_POST["mensaje"];
        $cabeceras = 'From: info@rapoporras.com' . "\r\n" .
            'Reply-To:  info@rapoporras.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($para, $titulo, $mensaje, $cabeceras);
    }
}
