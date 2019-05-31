<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["empresas"])) {

    echo json_encode(select($_POST["empresas"]));
}
?>