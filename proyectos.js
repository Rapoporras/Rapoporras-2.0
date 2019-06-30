
$(document).ready(function ()
{
    cargar_proyectos("todos");

//    cargar_tipos();

});

function cargar_proyectos(tipo) {


    $.ajax({
        data: {proyectos: tipo},
        url: 'proyectos_Ajax.php',
        type: 'post',
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);
            var indicecaja = 1;
            var indice = 0;
            var html = "";
            for (var i = 0; i < datos.length; i++) {

                var caja = "";

                if (indice == 3) {

                    indicecaja = indicecaja * -1;
                    indice = 0;

                }


                if (indicecaja > 0) {
                    if (indice == 0) {

                        caja += '<div class="row">';
                    }
                    caja += '<div class="col-lg-4 col-md-12 mb-r">\n\
                             <div class="view overlay hm-white-slight z-depth-1-half mb-2">\n\
                                <img src="' + datos[i]["imagen"] + '" class="img-fluid" alt="First sample image">\n\
\n\ </div>\n\
                            <div class="' + datos[i]["color_icono"] + '-text"><h6 class="mb-3 mt-3">' + datos[i]["icono"] + '<strong> ' + datos[i]["tipo"] + '</strong></h6></div>\n\
                            <h4 class="mb-3">' + datos[i]["nombre"] + '</h4>\n\
                            <p>' + datos[i]["descripcion"] + '</p>\n\
                         </div>';
//<a class="btn btn-' + datos[i]["color_icono"] + ' btn-rounded">Ver Más</a>\n\

                } else {
                    if (indice == 0) {

                        caja += '</div>';
                    }
                    caja += '<div class="row">\n\
                                <div class="col-lg-4 mb-4">\n\  <div class="view overlay hm-white-slight z-depth-1-half">\n\
                                    <img src="' + datos[i]["imagen"] + '" class="img-fluid" alt="First sample image">\n\
                                </div>\n\
                            </div>\n\
                            <div class="col-lg-7 ml-xl-4 mb-4">\n\ <a href="" class="' + datos[i]["color_icono"] + '-text"><h6 class="pb-1">' + datos[i]["icono"] + '<strong> ' + datos[i]["tipo"] + ' </strong></h6></a>\n\
                                <h4 class="mb-3"><strong>' + datos[i]["nombre"] + '</strong></h4>\n\
                                <p>' + datos[i]["descripcion"] + '</p>\n\</div>\n\
                        </div>\n\
                        <hr class="mb-5">';

                }
                html += caja;
                indice++

            }

            document.getElementById("proyectos").innerHTML = html;

        }
    });
}

function buscar_proyectos(tipo) {

    cargar_proyectos(tipo);
}

function cargar_tipos() {

    $.ajax({
        data: {tipos: "consulta"},
        url: 'proyectos_Ajax.php',
        type: 'post',
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);

            var html = "";
            for (var i = 0; i < datos.length; i++) {

                var caja = "";


                caja += '<li onclick="buscar_proyectos(' + datos[i]["id_tipos"] + ')">\n\
                        <a class="btn-floating btn-sm ' + datos[i]["color_icono"] + ' waves-effect waves-light"  data-toggle="tooltip" title="' + datos[i]["tipo"] + '"  data-placement="left" \n\
                        style="transform: scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0px); opacity: 0;" >\n\
                        ' + datos[i]["icono"] + '</a></li>';


                html += caja;


            }

            document.getElementById("floating").innerHTML += html;



        }
    });
}

