

$(document).ready(function ()
{
    var consulta = "SELECT experiencia.puesto, experiencia.tareas, experiencia.fecha_inicio, \n\
                    experiencia.fecha_fin, empresa.nombre , empresa.web, empresa.imagen \n\
                    FROM experiencia,empresa \n\
                    WHERE experiencia.empresa = empresa.id_empresa \n\
                    ORDER BY `experiencia`.`fecha_inicio` DESC ";

    cargar_empresas(consulta);



});

function cargar_empresas(query) {

    $.ajax({
        data: {empresas: query},
        url: 'experiencia_Ajax.php',
        type: 'post',
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);

            var html = "";
            for (var i = 0; i < datos.length; i++) {

                var caja = "";

                if (i % 2 == 0) {
                    caja += '<li class="timeline-inverted">';
                } else {
                    caja += '<li>';
                }

                caja += '<a href="' + datos[i]["web"] + '"><span class="circle grey"></span>\n\
                            </a>\n\
                            <div class="step-content z-depth-1 ml-xl-0 p-0 hoverable">\n\
                                <img src="' + datos[i]["imagen"] + '" class="img-fluid" alt="Responsive image">\n\
                                <h4 class="font-bold p-4 mb-0">' + datos[i]["puesto"] + '</h4>\n\
                                <p class="text-muted px-4 mb-0"><i class="fa fa-clock-o" aria-hidden="true"></i> ' + datos[i]["fecha_inicio"] + ' - ' + datos[i]["fecha_fin"] + '</p>\n\
                                <p class="mb-0 p-4"><b>Empresa:</b> ' + datos[i]["nombre"] + ' <br><b>Tareas:</b> ' + datos[i]["tareas"] + ' </p>\n\
                            </div>\n\
                        </li>';

                html += caja;


            }


            document.getElementById("empresas").innerHTML = html;



        }
    });
}