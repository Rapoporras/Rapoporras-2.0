<?php

include './assets/functions/functionsAjax.php';

if (isset($_POST["ofertas"])) {


    $consulta = "SELECT Viaje.Id, Viaje.Titulo, Viaje.Subtitulo,Viaje.Descripcion, Viaje.Precio, Viaje.Expira, "
            . "Viaje_Imagen.Url, Viaje_Imagen.Imagen_Alt FROM Viaje, Viaje_Imagen "
            . "WHERE Viaje.Id = Viaje_Imagen.Id_viaje "
            . "AND Viaje_Imagen.Principal = 1 "
            . "AND Viaje.Expira > DATE_FORMAT(NOW(),'%Y-%m-%d 00:00:00')";


    echo json_encode(select($consulta));
}

if (isset($_POST["servicios"])) {


    $consulta = "SELECT Viaje_Servicio.Id_Viaje,Servicios.Icono,Servicios.Titulo "
            . "FROM Viaje_Servicio,Servicios "
            . "WHERE Viaje_Servicio.Id_Servicio = Servicios.Id "
            . "AND Viaje_Servicio.Id_Viaje = " . $_POST["servicios"];


    echo json_encode(select($consulta));
}

if (isset($_POST["post"])) {


    $consulta = "SELECT Post.Id,Post.Titulo,Post.Descripcion,Categoria.Nombre, "
            . "Categoria.Icono,Categoria.Color,Post_Imagen.Imagen,Post_Imagen.Alt "
            . "FROM Post,Categoria,Post_Categoria,Post_Imagen "
            . "WHERE Post.Id = Post_Imagen.Id_post "
            . "AND Post_Categoria.Id_post = Post.Id "
            . "AND Categoria.Id = Post_Categoria.Id_categoria "
            . "AND Post.Publicado = 1 "
            . "ORDER BY Post.Fecha DESC "
            . "LIMIT 3";



    echo json_encode(select($consulta));
}
?>