$(document).ready(function ()
{

    cargar_posts(0);
    cargar_categorias();

});

function cargar_categorias() {

    $.ajax({
        data: {categorias: "tipo"},
        url: 'index_Blog_Ajax.php',
        type: 'post',
        success: function (response)
        {
//            alert("hola")
            var datos = new Array();
            datos = JSON.parse(response);
            var html = '<li class="list-group-item d-flex justify-content-between align-items-center" onclick="cargar_posts(0);">\n\
                         <span class="w-100 text-center teal-text"> <i class="fa fa-cubes mr-1" aria-hidden="true"></i>Todas</span>\n\
                        </li>';
            for (var i = 0; i < datos.length; i++) {

                html += '<li class="list-group-item d-flex justify-content-between align-items-center" onclick="cargar_posts(' + datos[i]["Id"] + ');">\n\
                         <span class="w-100 text-center ' + datos[i]["Color"] + '-text"> <i class="fa ' + datos[i]["Icono"] + ' mr-1" aria-hidden="true"></i> ' + datos[i]["Nombre"] + '</span>\n\
                        </li>';
            }

            document.getElementById("categoriasticky").innerHTML = html;
            document.getElementById("categoria").innerHTML = html;
        }
    });
}


function cargar_posts(tipo) {


    $.ajax({
        data: {cargar_post: tipo},
        url: 'index_Blog_Ajax.php',
        type: 'post',
        success: function (response)
        {
//            alert(response);
//            alert("hola")
            var datos = new Array();
            datos = JSON.parse(response);

            var html = " <div class='row'>";
            for (var i = 0; i < datos.length; i++) {

                if (i % 3 == 0) {
                    html += "</div><div class='row mt-md-3 mt-lg-3'>"
                }
                html += '<div class="col-md-4 mb-r  mt-3 mt-sm-3 mt-md-0">\n\
                        <a href="post.php?id=' + datos[i]["Id"] + '">\n\
                        <div class="card card-image " style="height: 100%;background-image: \n\
                        url(' + datos[i]["Imagen"] + '); ">\n\
                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded h-100 justify-content-center">\n\
                                                <div class="">\n\
                                                    <h6 class="' + datos[i]["Color"] + '-text">\n\
                                                        <i class="fa ' + datos[i]["Icono"] + '"></i>\n\
                                                        <strong> ' + datos[i]["Nombre"] + '</strong>\n\
                                                    </h6>\n\
                                                    <h3 class="py-3 font-bold">\n\
                                                        <strong>' + datos[i]["Titulo"] + '</strong>\n\
                                                    </h3>\n\
</div>\n\
                                            </div>\n\
                                        </div>\n\
                                    </a>\n\
                                </div>';
            }

            html += "</div>";
            document.getElementById("post").innerHTML = html;
        }
    });
}
