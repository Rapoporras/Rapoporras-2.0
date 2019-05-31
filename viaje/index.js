
var dias = 0;
var horas = 0;
var minutos = 0;
var segundos = 0;
var hoy, fecha;
var diferencia = 0;
var id_viajes = new Array();
var tiempo_cuenta = new Array();

$(document).ready(function ()
{
    cargar_viajes();
    cargar_post();

});

function cargar_viajes() {

    $.ajax({
        data: {ofertas: "tipo"},
        url: 'index_Ajax.php',
        type: 'post',
        beforeSend: function (xhr) {
            $("#main").css("display", "none");
            $("#carga").css("display", "block");
        },
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);
            var indicecaja = 1;
            var indice = 0;
            var html = "<div class='row'>";

//            alert(response);
            for (var i = 0; i < datos.length; i++) {



                if (i != 0 && i % 2 == 0) {
                    html += "</div><div class='row mt-4'>";
                }


                html += crear_caja(datos[i]["Id"], datos[i]["Titulo"], datos[i]["Url"], datos[i]["Imagen_Alt"], datos[i]["Subtitulo"], datos[i]["Precio"]);
                id_viajes.push(datos[i]["Id"]);
                tiempo_cuenta.push(datos[i]["Expira"])
            }
            html += "</div>";

            document.getElementById("ofertas").innerHTML = html;
            console.log(tiempo_cuenta);

            $("#carga").css("display", "none");
            $("#main").css("display", "block");
            cargar_servicios();

//            countdown("clock2", 4);
//            countdown("clock3", 5);

            for (var i = 0; i < id_viajes.length; i++) {

                fecha = new Date(Date.parse(tiempo_cuenta[i]));
                countdown("clock" + id_viajes[i], fecha.getTime());
            }
//            alert("hola");

        }
    });

}

function crear_caja(id, titulo, imagen, imgenalt, descripcion, precio) {

    var caja = ' <div id="cardclock' + id + '" style="cursor: pointer;" onclick="viaje(' + id + ');" class="col-lg-6 col-md-12 col-sm-12 mt-5 pointer">\n\
                    <div class="card hoverable">\n\
                        <div class="card-body">\n\
                                <div class="row">\n\
                                    <h4 class="col-md-12 card-title font-italic">' + titulo + '</h4>\n\
                                </div>\n\
                                <div class="row">\n\
                                    <div class="col-md-8">\n\
                                        <img src="' + imagen + '" class="img-fluid" alt="' + imgenalt + '">\n\
                                    </div>\n\
                                    <div class="col-md-4">\n\
                                        <p class="card-text font-italic">' + descripcion + '</p>\n\
                                        \n\Servicios:\n\
                                        <div class="mt-2" id="servicios' + id + '">\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="card-footer text-center">\n\
                                <p class="float-left font-italic">\n\
                                <i class="fa fa-clock-o"></i> <span id="clock' + id + '"></span></p> \n\
                                <span class="float-right orange-text h3 font-bold">' + precio + '€</span>\n\
                            </div>\n\
                    </div>\n\
                </div>';
    return caja;
}

//
//function countdown(id, seleccionado) {
//
////    alert(dia);
////    alert(d.getFullYear())
////    alert(expira)
//    fecha = new Date(2018, 4, 2, 00, 00, 00, 00);
//    hoy = new Date();
//    diferencia = (seleccionado.getTime() - hoy.getTime()) / 1000;
////    alert("hola " + diferencia);
//    if (diferencia > 0) {
//
//        dias = Math.floor(diferencia / 86400);
//        diferencia = diferencia - (86400 * dias);
//        horas = Math.floor(diferencia / 3600);
//        diferencia = diferencia - (3600 * horas);
//        minutos = Math.floor(diferencia / 60);
//        diferencia = diferencia - (60 * minutos);
//        segundos = Math.floor(diferencia);
//
////        alert("Quedan " + dias + " D " + horas + " H " + minutos + " M " + segundos + " S");
//        $("#" + id).text("Quedan " + dias + " D " + horas + " H " + minutos + " M " + segundos + " S");
//        setTimeout("countdown(\"" + id + "," + seleccionado + "\")", 1000);
//
//    } else {
//
//        cargar_viajes()
//    }
//}

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
//        alert("countdown(\"" + id + "," + dia + "\")", 1000);
        setTimeout("countdown(\"" + id + "\"," + dia + ")", 1000);

    } else {
//        cargar_viajes();
        $("#card" + id).hide();
    }
}


function cargar_servicios() {

//    alert(id_viajes)
    for (var i = 0; i < id_viajes.length; i++) {

        var id_viaje = id_viajes[i];
        $.ajax({
            data: {servicios: id_viaje},
            url: 'index_Ajax.php',
            type: 'post',
            success: function (response)
            {
//                alert(response)
                var datos = new Array();
                datos = JSON.parse(response);
                var viaje = 0;
                var html = "<div class='row text-center'>";
                for (var j = 0; j < datos.length; j++) {



                    if (j !== 0 && j % 3 === 0) {
                        html += "</div><div class='row text-center'";
                    }


                    html += '<i class="fa ' + datos[j]["Icono"] + ' col-4 fa-2x" aria-hidden="true" title="' + datos[j]["Titulo"] + '"></i></a>';

                    viaje = datos[j]["Id_Viaje"];


                }
                html += "</div>";
                document.getElementById("servicios" + viaje).innerHTML = html;


            }
        });
    }


}

function cargar_post() {
    $.ajax({
        data: {post: "id_viaje"},
        url: 'index_Ajax.php',
        type: 'post',
        success: function (response)
        {
//            alert(response);
            var datos = new Array();
            datos = JSON.parse(response);

            var html = "";
            for (var j = 0; j < datos.length; j++) {



                if (j == 0) {
                    html += '<div class="col-lg-4 col-md-12 mb-r">';
                } else {
                    html += '<div class="col-lg-4 col-md-6 mb-r">';
                }
//                alert(datos[j]["Color"])

                html += '<div class="view overlay hm-white-slight rounded z-depth-2 mb-2">\n\
                      <img src="' + datos[j]["Imagen"] + '" class="img-fluid" alt="' + datos[j]["Alt"] + '">\n\
                         <a href="Blog/post.php?id=' + datos[j]["Id"] + '"><div class="mask"></div></a>\n\
                        </div>\n\
                       <a href="Blog/post.php?id=' + datos[j]["Id"] + '" class="' + datos[j]["Color"] + '-text">\n\
                         <h6 class="mb-3 mt-4">\n\
                         <i class="fa ' + datos[j]["Icono"] + '"></i>\n\
                          <strong>' + datos[j]["Nombre"] + '</strong>\n\
                         </h6>\n\
                         </a>\n\
                         <h4 class="mb-3 font-bold dark-grey-text">\n\
                           <strong>' + datos[j]["Titulo"] + '</strong>\n\
                         </h4>\n\
                         <a class="btn btn-' + datos[j]["Color"] + ' btn-rounded btn-md"  href="Blog/post.php?id=' + datos[j]["Id"] + '">Leer Post</a>\n\
                        </div>';
            }

            document.getElementById("post_recent").innerHTML = html;


        }
    });

}

function viaje(id) {

    window.location.href = 'https://rapoporras.com/viaje/viaje.php?id=' + id;
}