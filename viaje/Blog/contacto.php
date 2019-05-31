<?php
include './header_blog.php';
?>
<main>
    <section class="py-5 px-5">

        <!--Section heading-->
        <h2 class="font-weight-bold text-center h1 py-5">Sobre Nosotros</h2>
        <!--Section description-->
        <p class="text-center mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
            esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

        <div class="row">

            <!--Grid column-->
            <div class="col-lg-5 mb-4">

                <!--Form with header-->
                <div class="card">

                    <div class="card-body">
                        <!--Header-->
                        <div class="form-header light-blue darken-3">
                            <h3>
                                <i class="fa fa-envelope"></i> Contactanos:</h3>
                        </div>

                        <p>We'll write rarely, but only the best content.</p>
                        <br>

                        <!--Body-->
                        <div class="md-form">
                            <i class="fa fa-user prefix grey-text"></i>
                            <input type="text" id="form-name" class="form-control">
                            <label for="form-name">Nombre</label>
                        </div>

                        <div class="md-form">
                            <i class="fa fa-envelope prefix grey-text"></i>
                            <input type="text" id="form-email" class="form-control">
                            <label for="form-email">Email</label>
                        </div>

                        <div class="md-form">
                            <i class="fa fa-tag prefix grey-text"></i>
                            <input type="text" id="form-Subject" class="form-control">
                            <label for="form-Subject">Asunto</label>
                        </div>

                        <div class="md-form">
                            <i class="fa fa-pencil prefix grey-text"></i>
                            <textarea type="text" id="form-text" class="form-control md-textarea" rows="3"></textarea>
                            <label for="form-text">Mensaje</label>
                        </div>

                        <div class="text-center">
                            <button class="btn btn-primary btn-rounded w-100">Enviar</button>
                        </div>

                    </div>

                </div>
                <!--Form with header-->

            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-7">

                <!--Google map-->
                <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12794.35809608372!2d-4.454696571472165!3d36.70840053339288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70bd52a7919f9432!2sHoytours+Travel!5e0!3m2!1ses!2ses!4v1523267908535" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <br>
                <!--Buttons-->
                <div class="row text-center">
                    <div class="col-md-4">
                        <a class="btn-floating  light-blue darken-3">
                            <i class="fa fa-map-marker"></i>
                        </a>
                        <p>Av. de José Ortega y Gasset, 73,</p>
                        <p>29006 Málaga</p>
                    </div>

                    <div class="col-md-4">
                        <a class="btn-floating  light-blue darken-3">
                            <i class="fa fa-phone"></i>
                        </a>
                        <p>951 20 40 55</p>
                        <p>Lunes - Viernes, </p>
                        <p>10:30–13:30, 17:00–20:30</p>
                    </div>

                    <div class="col-md-4">
                        <a class="btn-floating  light-blue darken-3">
                            <i class="fa fa-envelope"></i>
                        </a>
                        <p>reservas@hoytravel.com</p>

                    </div>
                </div>

            </div>
            <!--Grid column-->

        </div>

    </section>
</main>
<?php
include './footer_blog.php';
?>