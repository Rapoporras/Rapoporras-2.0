$(document).ready(function ()
{
    cargar_categorias();
    tags();
});
function cargar_categorias() {

    $.ajax({
        data: {cat: "tipo"},
        url: 'post_Ajax.php',
        type: 'post',
        success: function (response)
        {

            var datos = new Array();
            datos = JSON.parse(response);
//            alert(response)
            var html = "";
//            alert(response);
            for (var i = 0; i < datos.length; i++) {

                html += '<div class="form-check">\n\
<input class="form-check-input" name="group100" type="radio" id="radio' + datos[i]["Id"] + '" value="' + datos[i]["Id"] + '">\n\
<label class="form-check-label" for="radio' + datos[i]["Id"] + '"><i class="fa ' + datos[i]["Icono"] + ' mr-1" aria-hidden="true"></i>' + datos[i]["Nombre"] + '</label>\n\
</div>';

            }

            document.getElementById("categoriaschek").innerHTML = html;
//            $("#tablaservicios").text(html);
        }
    });

}
var fileExtension = "";
function nuevo_post() {

    var htmldata = CKEDITOR.instances.editor1.document.getBody().getHtml();

    var titulo = $("#titulopost").val();

    var imagen = $("#imagenpost").val();

    var catergoria = $("input:radio[name='group100']:checked").val();
    alert(catergoria)
//    $.ajax({
//        data: {titulopost: titulo, imagenpost: imagen, descripcionpost: htmldata, catpost: categoria},
//        url: 'post_Ajax.php',
//        type: 'post',
//        success: function (response)
//        {
//            alert(response);
//            window.location.href = 'https://rapoporras.com/viaje/__adm/';
//        }
//    });

}


function tags() {
    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });
}

function gettags() {
    var tagsdata = $('.chips-initial').material_chip('data');

    alert(tagsdata);
}

//function subir_fotos() {
//    var formData = new FormData($("#imagenpost").val());
//    var message = "";
//    //hacemos la petición ajax  
//    $.ajax({
//        url: 'upload.php',
//        type: 'POST',
//        // Form data
//        //datos del formulario
//        data: formData,
//        //necesario para subir archivos via ajax
//        cache: false,
//        contentType: false,
//        processData: false,
//        //mientras enviamos el archivo
//        beforeSend: function () {
//            message = $("<span class='before'>Subiendo la imagen, por favor espere...</span>");
//            showMessage(message)
//        },
//        //una vez finalizado correctamente
//        success: function (data) {
//            message = $("<span class='success'>La imagen ha subido correctamente.</span>");
//            showMessage(message);
//            if (isImage(fileExtension))
//            {
//                $(".showImage").html("<img src='files/" + data + "' />");
//            }
//        },
//        //si ha ocurrido un error
//        error: function () {
//            message = $("<span class='error'>Ha ocurrido un error.</span>");
//            showMessage(message);
//        }
//    });
//}
//
//function showMessage(message) {
//
//    console.log(message);
//}
//
////comprobamos si el archivo a subir es una imagen
////para visualizarla una vez haya subido
//function isImage(extension)
//{
//    switch (extension.toLowerCase())
//    {
//        case 'jpg':r
//        case 'gif':
//        case 'png':
//        case 'jpeg':
//            return true;
//            break;
//        default:
//            return false;
//            break;
//    }
//}