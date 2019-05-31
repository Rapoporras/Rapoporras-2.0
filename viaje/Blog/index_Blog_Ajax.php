<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["categorias"])) {


    $consulta = "SELECT Categoria.Id, Categoria.Nombre, Categoria.Icono, Categoria.Color "
            . "FROM Categoria";

    echo json_encode(select($consulta));
}

if (isset($_POST["cargar_post"])) {

    if ($_POST["cargar_post"] == 0) {
        $consulta = "SELECT Post.Id, Post.Titulo,Post_Imagen.Imagen,Categoria.Nombre,Categoria.Icono, Categoria.Color "
                . "FROM Post,Post_Categoria,Post_Imagen,Categoria "
                . "WHERE Post_Categoria.Id_post= Post.Id "
                . "AND Post.Id = Post_Imagen.Id_post "
                . "AND Post_Categoria.Id_categoria = Categoria.Id "
                . "AND Post.Publicado = 1 "
                . "ORDER BY Post.Fecha DESC";
    } else {
        $consulta = "SELECT Post.Id, Post.Titulo,Post_Imagen.Imagen,Categoria.Nombre,Categoria.Icono,"
                . "Categoria.Color "
                . "FROM Post,Post_Categoria,Post_Imagen,Categoria"
                . " WHERE Post_Categoria.Id_post= Post.Id "
                . "AND Post.Id = Post_Imagen.Id_post "
                . "AND Post_Categoria.Id_categoria = Categoria.Id "
                . "AND Categoria.Id = " . $_POST["cargar_post"] . " "
                . "AND Post.Publicado = 1 "
                . "ORDER BY Post.Fecha DESC";
    }

    echo json_encode(select($consulta));
}
?>