<?php include './header.php'; ?>
<!--Main Navigation-->
<script src="../ckeditor/ckeditor.js"></script>
<main>
    <div class="container-fluid">

        <!-- Section: Create Page -->
        <section class="section mt-5">
            <!-- First row -->
            <div class="row">
                <div class="col-lg-12 row">

                    <!--Card-->
                    <div class="card card-cascade narrower mb-r col-lg-5">

                        <!--Card image-->
                        <div class="view gradient-card-header blue-gradient">
                            <h4 class="mb-0">Publicar</h4>
                        </div>
                        <!--/Card image-->

                        <!--Card content-->
                        <div class="card-body">
                            <div class="col-12 text-center mt-2">
                                <div class="btn-group-vertical w-50" role="group" aria-label="Vertical button group">
                                    <button type="button" class="btn btn-primary ml-0 " onclick="nuevo_post();">Publicar</button>
                                    <!--<button type="button" class="btn btn-teal btn-rounded ">Guardar</button>-->
                                    <!--<button type="button" class="btn btn-grey btn-rounded ">Cancelar</button>-->
                                </div>

                            </div>

                        </div>

                        <!--/.Card content-->

                    </div>
                    <!--/.Card-->
                    <div class="col-2"></div>
                    <!--Card-->
                    <div class="card card-cascade narrower mb-r col-lg-5 mt-5 mt-sm-5 ">

                        <div class="view gradient-card-header blue-gradient">
                            <h4 class="mb-0">Categorias</h4>
                        </div>

                        <div class="card-body" id="categoriaschek">

                        </div>
                    </div>
                    <!--/.Card-->
                </div>
                <!-- /.Second col -->
                <!-- First col -->
                <div class="col-lg-12 mt-5">
                    <!-- First card -->
                    <div class="card mb-r post-title-panel">
                        <div class="card-body">
                            <div class="md-form mt-1 mb-0">
                                <input type="text" id="titulopost" class="form-control" value="">
                                <label for="form1" class="">Titulo del Post</label>
                            </div>

                            <!-- /.First card -->
                            <form>
                                <div class="md-form mt-5">
                                    <div class="file-field">
                                        <div class="btn btn-primary btn-sm float-left">
                                            <span>Choose file</span>
                                            <input type="file">
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text"id="imagenpost" placeholder="Upload your file">
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <!-- Second card -->
                            <div class=" col-12 mt-5">
                                <textarea name="editor1" id="editor1" rows="10" cols="80">

                                </textarea>

                                <script>

                                    CKEDITOR.replace('editor1');
                                </script>
                            </div>
                            <div class="chips chips-placeholder mt-5"></div>
                        </div>
                    </div>
                    <!-- /.Second card -->

                </div>
                <!-- /.First col -->
                <!-- Second col -->

            </div>
            <!-- /.First row -->
        </section>
        <!-- /.Section: Create Page -->

    </div>
</main>

<?php include './footer.php'; ?>

<script type="text/javascript" src="post.js"></script>