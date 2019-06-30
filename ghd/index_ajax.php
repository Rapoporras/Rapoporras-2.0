<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["datos"])) {

    echo json_encode(select($_POST["datos"]));
}

if (isset($_POST["unidades_electricas"])) {

    echo json_encode(select($_POST["unidades_electricas"]));
}

if (isset($_POST["objetivosseleccion"])) {

    echo json_encode(select($_POST["objetivosseleccion"]));
}

if (isset($_POST["datos_generales"])) {

    echo json_encode(select($_POST["datos_generales"]));
}
