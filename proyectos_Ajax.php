<?php

include './assets/functions/functionsAjax.php';

if ($_POST["proyectos"]) {

    $consulta = "";

    if ($_POST["proyectos"] == "todos") {

        $consulta = "SELECT proyectos.nombre,proyectos_descripcion.descripcion, proyectos_imagenes.imagen ,"
                . "tipos.tipo, tipos.icono,tipos.color_icono,proyectos.anno "
                . "FROM proyectos,proyectos_descripcion,proyectos_imagenes,tipos "
                . "WHERE proyectos.id_proyecto = proyectos_descripcion.proyecto "
                . "AND proyectos.id_proyecto = proyectos_imagenes.proyecto "
                . "AND proyectos.tipo = tipos.id_tipos "
                . "ORDER BY `proyectos`.`anno` DESC";
    } else {
        $consulta = "SELECT proyectos.nombre,proyectos_descripcion.descripcion, proyectos_imagenes.imagen ,"
                . "tipos.tipo, tipos.icono,tipos.color_icono,proyectos.anno "
                . "FROM proyectos,proyectos_descripcion,proyectos_imagenes,tipos "
                . "WHERE proyectos.id_proyecto = proyectos_descripcion.proyecto "
                . "AND proyectos.id_proyecto = proyectos_imagenes.proyecto "
                . "AND proyectos.tipo = tipos.id_tipos "
                . "AND proyectos.tipo = '" . $_POST["proyectos"] . "' "
                . "ORDER BY `proyectos`.`anno` DESC";
    }
//    echo $consulta;

    echo json_encode(select($consulta));
}

if ($_POST["tipos"]) {
    $consulta_tipos = "SELECT `id_tipos`, `tipo`, `icono`, `color_icono` FROM `tipos`";
    echo json_encode(select($consulta_tipos));
}
?>