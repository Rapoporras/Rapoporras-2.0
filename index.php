<?php
//include('top-cache.php');
include './header.php';
?>

<main>
    <div class=" justify-content-center">

        <section id="Idatos"  class="section extra-margins text-center pb-3 col-12 ">
            <?php include './datos.php'; ?>
        </section>
        </hr>
        <section id="Iproyectos"  class="section extra-margins text-center pb-3 col-12 ">
            <?php include './proyectos.php'; ?>
        </section>
        </hr>
        <section id="Iexperiencia"  class="section extra-margins text-center pb-3 col-12 ">
            <?php include './experiencia.php'; ?>
        </section>
        </hr>
        <section id="Icontactos"  class="section extra-margins text-center pb-3 col-12 ">
            <?php include './contacto.php'; ?>
        </section>

    </div>
</main>
<?php
include './footer.php';
//include('bottom-cache.php');
?>