<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["serv"])) {

    $consulta = "SELECT Servicios.Id, Servicios.Icono, Servicios.Titulo FROM Servicios";

    echo json_encode(select($consulta));
}

if (isset($_POST["titulo"])) {

    $consulta = "INSERT INTO `Viaje` (`Id`, `Titulo`, `Subtitulo`, `Descripcion`, `Precio`, `Expira`) "
            . "VALUES (NULL, '" . $_POST["titulo"] . "', '" . $_POST["subtitulo"] . "', '" . $_POST["descripcion"] . "', '" . $_POST["precio"] . "', '" . $_POST["fecha"] . "')";

    echo json_encode(insert($consulta));
}