$(document).ready(function () {
    var consulta = "SELECT cabeceras.codigozona, cabeceras.zona,ROUND(SUM(cabeceras.importefactura),2) AS 'total pedido',ROUND(AVG(cabeceras.importefactura),2) AS 'pedido medio', COUNT(DISTINCT cabeceras.codigocliente) AS 'clientes unicos', COUNT(DISTINCT cabeceras.numeroalbaran) AS 'numero pedidos',0 'Unidades Electricas' FROM cabeceras GROUP BY cabeceras.codigozona ORDER BY cabeceras.codigozona";

    cargar_datos(consulta);

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
var zonas = [];

function cargar_datos(query) {

    $.ajax({
        data: {
            datos: query
        },
        url: 'index_ajax.php',
        type: 'post',
        async: false,
        success: function (response) {
            console.log(response);
            var datos = new Array();
            datos = JSON.parse(response);

            var celdas = "";

            for (index = 0; index < datos.length; index++) {

                var zona = datos[index]["zona"];
                var total_pedido = datos[index]["total pedido"] + " €";
                var pedido_medio = datos[index]["pedido medio"] + " €";
                var codigozona = datos[index]["codigozona"];
                var clientes_unicos = datos[index]["clientes unicos"];
                var numero_pedidos = datos[index]["numero pedidos"];


                celdas += "<tr><td class='align-middle'>" + codigozona + "</td><td class='align-middle'>" + zona + "</td><td id='total" + codigozona + "' class='align-middle'>" +
                    total_pedido + "</td ><td id='obje" + codigozona + "' class='align-middle'></td><td class='align-middle'>" + numero_pedidos + "</td><td class='align-middle'>" + clientes_unicos +
                    "</td><td class='align-middle'>" + pedido_medio + "</td><td id='elec" + codigozona + "' class='align-middle'></td></tr>";

                zonas.push(codigozona);
                // obtener_electricas(codigozona);
            }
            document.getElementById("tabladatos").innerHTML += celdas;

            obtener_electricas();
            obtener_objetivos();

            introducir_tabla();
            datos_generales();
        }
    });
}

function introducir_tabla() {
    var table = $('#dt-select').DataTable({

        "language": {

            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }

        },
        buttons: [{
                text: 'Seleccionar todos',
                action: function () {
                    table.rows().select();
                }
            },
            {
                text: 'Seleccionar ninguno',
                action: function () {
                    table.rows().deselect();
                }
            }
        ]

    });
    $('.dataTables_length').addClass('bs-select');
}


function obtener_electricas() {

    for (let index = 0; index < zonas.length; index++) {



        var query2 = "SELECT lineas.codigofamilia,ROUND(AVG(cabeceras.importefactura),2) AS 'pedido medio' FROM cabeceras,lineas WHERE cabeceras.numeroalbaran = lineas.numeroalbaran AND lineas.codigofamilia IN (100,101,200,201, 400, 401 ,600) AND  cabeceras.codigozona = '" + zonas[index] + "' GROUP BY lineas.codigofamilia";
        // console.log(zona)
        var elec = '<ul class="list-inline">';


        $.ajax({
            data: {
                unidades_electricas: query2
            },
            url: 'index_ajax.php',
            type: 'post',
            async: false,
            success: function (response2) {
                // console.log(response2);


                var datos2 = new Array();
                datos2 = JSON.parse(response2);

                for (index2 = 0; index2 < datos2.length; index2++) {

                    var codigofamilia2 = datos2[index2]["codigofamilia"];
                    var pedido_medio_familia2 = datos2[index2]["pedido medio"];

                    elec += "<li class='list-inline-item'><strong>" + codigofamilia2 + "</strong> : " + pedido_medio_familia2 + "</li>";

                }
                elec += '</ul>';
                var id = "elec" + zonas[index];
                // console.log(id);

                $("#" + id).html(elec);


            }
        });
    }
}

function obtener_objetivos() {

    var query3 = "SELECT `areacode`, `budget`, `objetivosseleccion_id` FROM `objetivosseleccion` ORDER BY `areacode`";
    // console.log(zona)
    var elec = "";

    $.ajax({
        data: {
            objetivosseleccion: query3
        },
        url: 'index_ajax.php',
        type: 'post',
        async: false,
        success: function (response3) {
            // console.log(response2);


            var datos3 = new Array();
            datos3 = JSON.parse(response3);

            for (index3 = 0; index3 < datos3.length; index3++) {

                var objetivo = datos3[index3]["budget"];
                var zona = datos3[index3]["areacode"];

                var id = "obje" + zona;
                // console.log(id);
                var total = $("#total" + zona).text();
                total = total.replace(" €", "")
                var cumplido = total - objetivo;
                cumplido = Math.round(cumplido, 2);
                if (cumplido >= 0) {
                    $("#" + id).html(objetivo + " € " + '<i class="fas fa-circle text-success material-tooltip-main" data-toggle="tooltip" title=" Objetivo superado por ' + cumplido + ' €"></i>');
                } else {
                    $("#" + id).html(objetivo + " € " + '<i class="fas fa-circle text-danger material-tooltip-main" data-toggle="tooltip" title=" Quedan ' + Math.abs(cumplido) + ' € para cumplir objetivo"></i>');
                }


            }




        }
    });

}

function datos_generales() {
    var query4 = "SELECT ROUND(SUM(cabeceras.importefactura),2) AS 'total pedido',ROUND(AVG(cabeceras.importefactura),2) AS 'pedido medio', COUNT(DISTINCT cabeceras.codigocliente) AS 'clientes unicos', COUNT(DISTINCT cabeceras.numeroalbaran) AS 'numero pedidos' FROM cabeceras ORDER BY cabeceras.codigozona";
    // console.log(zona)
    var elec = "";

    $.ajax({
        data: {
            datos_generales: query4
        },
        url: 'index_ajax.php',
        type: 'post',
        async: false,
        success: function (response4) {
            var datos4 = new Array();
            datos4 = JSON.parse(response4);

            for (index4 = 0; index4 < datos4.length; index4++) {

                var total = datos4[index4]["total pedido"];
                var medio = datos4[index4]["pedido medio"];
                var numero = datos4[index4]["clientes unicos"];
                var usuario = datos4[index4]["numero pedidos"];

                $("#ventastotal").text(total + " €");
                $("#mediapedidos").text(medio + " €");
                $("#pedidosn").text(numero);
                $("#visitantes").text(usuario);


            }
        }
    });

}