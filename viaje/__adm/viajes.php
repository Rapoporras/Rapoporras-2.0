<?php
include './header.php';
?>
<script src="../ckeditor/ckeditor.js"></script>
<main>
    <div class="card">
        <div class="card-body">

            <h4 class="card-title text-center">Nuevo Viaje</h4>

            <div class="md-form mt-5">
                <input id="tituloviaje" type="text" length="25" class="form-control">
                <label for="tituloviaje">Titulo</label>
            </div>
            <div class="md-form mt-5">
                <textarea id="subtituloviaje" class="form-control md-textarea" length="100" rows="3"></textarea>
                <label for="subtituloviaje">Subtitulo</label>
            </div>

            <div class="md-form mt-5">


                <textarea name="editorviaje" id="editorviaje" rows="100" cols="80">

                </textarea>
                <label for="editorviaje">Datos Viaje</label>
                <script>
                    // Replace the <textarea id="editor1"> with a CKEditor
                    // instance, using default configuration

                    CKEDITOR.replace('editorviaje');
                </script>
            </div>

            <div class="md-form mt-5">
                <input placeholder="Selecciona un Dia" type="text" id="datepicker" class="form-control datepicker">
                <label for="date-picker-example">Fecha Expiracion</label>
            </div>

            <div class="md-form mt-5">
                <input placeholder="Selecciona Hora" type="text" id="input_starttime" class="form-control timepicker">
                <label for="input_starttime">Hora Expiracion</label>
            </div>
            <div class="md-form mt-5">
                <input type="text" id="precioviaje" class="form-control">
                <label for="precioviaje" >Precio</label>
            </div>


            <div class="mt-5">
                <table class="table">

                    <!--Table head-->
                    <thead>
                        <tr class="primary-color white-text">
                            <th>Descripción</th>
                            <th>Servicio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <!--Table head-->

                    <!--Table body-->
                    <tbody id="tablaservicios">


                    </tbody>
                    <!--Table body-->

                </table>
            </div>  
            <form>
                <div class="md-form mt-5">
                    <div class="file-field">
                        <div class="btn btn-primary btn-sm float-left">
                            <span>Buscar Foto</span>
                            <input type="file">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Sube tu Archivo">
                        </div>
                    </div>
                </div>
            </form>


            <button onclick="nuevo_viaje()" class="btn btn-primary w-100 mt-5">Crear Viaje</button>
        </div>

    </div>
</main>



<?php
include './footer.php';
?>
<script type="text/javascript" src="viajes.js"></script>
<script>
                $('#datepicker').pickadate({
                    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    monthsShort: ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                    weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
                    weekdaysShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                    showMonthsShort: undefined,
                    showWeekdaysFull: undefined,

                    today: 'Hoy',
                    clear: 'Limpiar',
                    close: 'Cerrar',

                    labelMonthNext: 'Siguiente Mes',
                    labelMonthPrev: 'Anterior Mes',
                    labelMonthSelect: 'Selecciona un Mes',
                    labelYearSelect: 'Selecciona un Año',
                    
                    format: 'yyyy-mm-dd',
                });

                $('#input_starttime').pickatime({});
                $('#input_endtime').pickatime({});

</script>