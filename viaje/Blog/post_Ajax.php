<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["datos"])) {


    $consulta = "SELECT Post.Id, Post.Titulo,Post_Imagen.Imagen,Post.Descripcion,Post.Fecha"
            . ",Categoria.Nombre,Categoria.Icono, Categoria.Color "
            . "FROM Post,Post_Categoria,Post_Imagen,Categoria "
            . "WHERE Post_Categoria.Id_post= Post.Id "
            . "AND Post.Id = Post_Imagen.Id_post "
            . "AND Post_Categoria.Id_categoria = Categoria.Id "
            . "AND Post.Id = " . $_POST["datos"];


    echo json_encode(select($consulta));
}
?>
