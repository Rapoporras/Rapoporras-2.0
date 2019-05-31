$(document).ready(function ()
{
    cargar_servicios();

});
var total_servicios = 0;
function cargar_servicios() {

    $.ajax({
        data: {serv: "tipo"},
        url: 'viajes_Ajax.php',
        type: 'post',
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);
//            alert(response)
            var html = "";
            total_servicios = datos.length
//            alert(response);
            for (var i = 0; i < datos.length; i++) {

                html += "<tr><th scope='row'>" + datos[i]["Titulo"] + "</th><td><i class='fa " + datos[i]["Icono"] + " fa-2x' aria-hidden='true'></i></td><td>\n\
<div class='form-check'> <input class='form-check-input filled-in' type='checkbox' value='' id='check" + datos[i]["Id"] + "'><label class='form-check-label' for='check" + datos[i]["Id"] + "'></label></div></td></tr>";
            }

            document.getElementById("tablaservicios").innerHTML = html;
//            $("#tablaservicios").text(html);
        }
    });

}

function nuevo_viaje() {
    var htmldata = CKEDITOR.instances.editorviaje.document.getBody().getHtml();
//    alert(total_servicios);

//    alert(htmldata);
    var titulo = $("#tituloviaje").val();
    var subtitulo = $("#subtituloviaje").val();
    var imagen = $("").val();
    var fecha = $("#datepicker").val();
    var hora = $("#input_starttime").val();
    var precio = $("#precioviaje").val();

//    alert(fecha + hora)

    $.ajax({
        data: {titulo: titulo, subtitulo: subtitulo, descripcion: htmldata, fecha: fecha + " " + hora, precio: precio},
        url: 'viajes_Ajax.php',
        type: 'post',
        success: function (response)
        {


        }
    });

}

