<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["viaje"])) {


    $consulta = "SELECT Viaje_Imagen.Id, Viaje_Imagen.Id_viaje, Viaje_Imagen.Url, "
            . "Viaje_Imagen.Principal, Viaje_Imagen.Imagen_Alt "
            . "FROM Viaje_Imagen "
            . "WHERE Viaje_Imagen.Id_viaje = " . $_POST["viaje"];


    echo json_encode(select($consulta));
}

if (isset($_POST["datos"])) {


    $consulta = "SELECT Viaje.Id, Viaje.Titulo, Viaje.Subtitulo, Viaje.Descripcion, "
            . "Viaje.Precio, Viaje.Expira "
            . "FROM Viaje "
            . "WHERE Viaje.Id = " . $_POST["datos"];


    echo json_encode(select($consulta));
}
?>
