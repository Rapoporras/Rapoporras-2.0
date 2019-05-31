function enviar_email() {

    var mensaje = ""

    mensaje += "Nombre: " + $("#form-contact-name").val() + "\r\n";
    mensaje += "Email: " + $("#form-contact-email").val() + "\r\n";
    mensaje += "Telefono: " + $("#form-contact-phone").val() + "\r\n";
    mensaje += "Compañia: " + $("#form-contact-company").val() + "\r\n";
    mensaje += "Mensaje: " + $("#form-contact-message").val() + "\r\n";

    if ($("#form-contact-name").val() != "" && $("#form-contact-name").val() != ""
            && $("#form-contact-name").val() != "" && $("#form-contact-name").val() != "") {

        $.ajax({
            data: {mensaje: mensaje, titulo: "Mensaje Web " + $("#form-contact-name").val()},
            url: 'contacto_Ajax.php',
            type: 'post',
            success: function (response)
            {

                $("#form-contact-name").val("");
                $("#form-contact-email").val(""); 
                $("#form-contact-phone").val("");
                $("#form-contact-company").val("");
                $("#form-contact-message").val("");



                toastr["success"]("Mensaje Enviado"); 


            }
        });
    } else {
        toastr["warning"]("Por Favor Rellena Todos los Campos");
    }
}