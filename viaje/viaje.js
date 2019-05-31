function cargar_datos(id) {
    cargar_imagenes(id);
    cargar_descripcion(id);
}

function cargar_imagenes(id) {

    $.ajax({
        data: {viaje: id},
        url: 'viaje_Ajax.php',
        type: 'post',
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);
            html = "";
            ul = "";
            for (var i = 0; i < datos.length; i++) {
                if (i == 0) {
                    html += ' <div class="carousel-item active"><img class="d-block w-100" \n\
src="' + datos[i]["Url"] + '" alt="' + datos[i]["Imagen_Alt"] + '"></div>';

                    ul += '<li data-target="#carousel-example-1z" data-slide-to="' + i + '" class="active"></li>';
                } else {
                    html += ' <div class="carousel-item"><img class="d-block w-100" \n\
src="' + datos[i]["Url"] + '" alt="' + datos[i]["Imagen_Alt"] + '"></div>';

                    ul += '<li data-target="#carousel-example-1z" data-slide-to="' + i + '"></li>';
                }

            }


            document.getElementById("imagenes").innerHTML = html;
            document.getElementById("carrusel").innerHTML = ul;


        }
    });

}

function  cargar_descripcion(id) {
    $.ajax({
        data: {datos: id},
        url: 'viaje_Ajax.php',
        type: 'post',
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);
//            alert(response)
            var titulo = "";
            var precio = "";
            var texto = ""
            var fecha = "";
            for (var i = 0; i < datos.length; i++) {
                titulo = datos[0]["Titulo"];

                precio = datos[0]["Precio"];
                texto = datos[0]["Descripcion"];

                fecha = datos[0]["Expira"];
            }


            document.getElementById("titulodatos").innerHTML = titulo;
            document.getElementById("preciodatos").innerHTML = precio;
            document.getElementById("descripciondatos").innerHTML = texto;

            fecha = new Date(Date.parse(fecha));
            countdown("clock", fecha.getTime());
        }
    });
}


function countdown(id, dia) {
    //    alert(expira)
//    dia = 1525763879000;

    hoy = new Date();
    diferencia = (dia - hoy.getTime()) / 1000;
//    alert(diferencia);
    if (diferencia > 0) {

        dias = Math.floor(diferencia / 86400)
        diferencia = diferencia - (86400 * dias)
        horas = Math.floor(diferencia / 3600)
        diferencia = diferencia - (3600 * horas)
        minutos = Math.floor(diferencia / 60)
        diferencia = diferencia - (60 * minutos)
        segundos = Math.floor(diferencia)

        var text = "";
        if (dias > 0) {
            text = "Quedan " + dias + " Dias " + horas + " Horas " + minutos + " Minutos " + segundos + " Segundos";
        } else if (horas > 0) {
            text = "Quedan " + horas + " Horas " + minutos + " Minutos " + segundos + " Segundos";
        } else if (minutos > 0) {
            text = "Quedan " + minutos + " Minutos " + segundos + " Segundos";
        } else {
            text = "Quedan " + segundos + " Segundos";
        }


        $("#" + id).text(text);
        setTimeout("countdown(\"" + id + "\"," + dia + ")", 1000);

    }
}

