<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["cat"])) {

    $consulta = "SELECT Categoria.Id, Categoria.Nombre, Categoria.Icono, Categoria.Color FROM Categoria";

    echo json_encode(select($consulta));
}

if (isset($_POST["titulopost"])) {

    $consulta = "INSERT INTO `Post` (`Id`, `Titulo`, `Descripcion`, `Fecha`) VALUES (NULL, '" . $_POST["titulopost"] . "', '" . $_POST["descripcionpost"] . "', NOW())";

    insert($consulta);



    $consulta2 = "INSERT INTO `Post_Categoria` (`Id`, `Id_post`, `Id_categoria`) VALUES (NULL, '', '" . $_POST["catpost"] . "')";

    insert($consulta2);

    echo $consulta;
}

