

function cargar_datos(id) {

    $.ajax({
        data: {datos: id},
        url: 'post_Ajax.php',
        type: 'post',
        success: function (response)
        {
//            alert("hola")  
            var datos = new Array();
            datos = JSON.parse(response);
            for (var i = 0; i < datos.length; i++) {
                document.getElementById("imagen").innerHTML = '<img src="' + datos[i]["Imagen"] + '" style="width: 100%;">';
                document.getElementById("titulo").innerHTML = datos[i]["Titulo"];
                document.getElementById("descripcion").innerHTML = datos[i]["Descripcion"];
                document.getElementById("fecha").innerHTML = datos[i]["Fecha"];

                document.getElementById("categoria").innerHTML = ' <i class="fa ' + datos[i]["Icono"] + ' ' + datos[i]["Color"] + '-text ml-1"></i> <span class="' + datos[i]["Color"] + '-text">' + datos[i]["Nombre"] + '</span>';
            }
        }
    });
}

