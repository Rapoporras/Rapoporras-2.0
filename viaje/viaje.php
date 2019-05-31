
<?php include './header_2.php'; ?>
<main>
    <div class="container">

        <!-- Post -->
        <div class="row my-5 py-5">

            <div class="col-12">

                <div class="card card-body mb-5 px-0 py-0">

                    <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

                        <ol class="carousel-indicators" id="carrusel">

                        </ol>

                        <div class="carousel-inner" id="imagenes" role="listbox">



                        </div>
                        <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="row px-4">

                        <div class="col-md-6 mt-4">

                            <h5 class="font-bold dark-grey-text">
                                <i class="fa fa-lg fa-clock-o mr-3 indigo-text"></i>
                                <span id="clock"></span>

                        </div>

                        <div class="col-md-6 mt-2 d-flex justify-content-end">

                            <button class="btn btn-rounded btn-blue w-100">Reservar Viaje</button>

                        </div>

                    </div>

                    <hr>
                    <h1 class="font-bold mt-3 text-center">
                        <strong id="titulodatos">holas que tal </strong>
                        <span class="text-right orange-text font-bold ml-5" id="preciodatos"></span>€
                    </h1>
                    <hr class="red title-hr">


                    <div class="row mx-md-5 px-md-4 px-5 mt-3 " id="descripciondatos">


                    </div>

                    <hr>

                    <div class="row mb-4">

                        <div class="col-md-12 text-center">

                            <h4 class="text-center font-bold dark-grey-text mt-3 mb-3">
                                <strong>Share this post: </strong>
                            </h4>

                            <button type="button" class="btn btn-fb btn-sm">
                                <i class="fa fa-facebook left"></i> Facebook</button>

                            <button type="button" class="btn btn-tw btn-sm">
                                <i class="fa fa-twitter left"></i> Twitter</button>

                            <button type="button" class="btn btn-gplus btn-sm">
                                <i class="fa fa-google-plus left"></i> Google +</button>

                        </div>

                    </div>

                </div>
            </div>

        </div>
</main>

<?php include './footer.php'; ?>
<script type="text/javascript" src="viaje.js"></script>

<script type="text/javascript">
    cargar_datos(<?php
if (isset($_GET["id"])) {
    echo $_GET["id"];
}
?>);
</script>
