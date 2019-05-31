<?php

include './assets/functions/functionsAjax.php';

if ($_POST["mensaje"]) {

    $para = 'ignacioporras93@gmail.com';
    $titulo = $_POST["titulo"];
    $mensaje = $_POST["mensaje"];
    $cabeceras = 'From: info@rapoporras.com' . "\r\n" .
            'Reply-To:  info@rapoporras.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

    mail($para, $titulo, $mensaje, $cabeceras);
}
?>