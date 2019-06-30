<?php
include './header.php';
?>

<!--
    Total de venta por zona
    cumplimiento del objetivo
    numero de pedidos
    número de clientes únicos
    pedido medio en valor
    pedido medio en unidades eléctricas
    Como definición de unidad eléctrica es todo artículo que pertenece a las familias 100,101,200,201, 400, 401 o 600
!-->

<link href="../assets/css/addons/datatables.min.css" rel="stylesheet">
<link href="../assets/css/addons/datatables-select.min.css" rel="stylesheet">
<script href="../assets/js/addons/datatables-select.min.js" rel="stylesheet"></script>
<script href="../assets/js/addons/datatables.min.js" rel="stylesheet"></script>

<main class="pt-1 mx-lg-5">
    <div class="container-fluid z-z-depth-1-half h-auto my-5">

   
            <section>

                <div class="row">

                    <div class="col-xl-3 col-md-6 mb-4">

                        <div class="card">

                            <div class="row mt-3">

                                <div class="col-md-5 col-5 text-left pl-4">

                                    <a type="button" class="btn-floating btn-lg primary-color ml-4 waves-effect waves-light">
                                        <i class="far fa-eye" style="width: auto;
                                        height: auto;
                                        margin-top: -5px;" aria-hidden="true"></i>
                                    </a>

                                </div>

                                <div class="col-md-7 col-7 text-right pr-5">

                                    <h5 class="ml-4 mt-4 mb-2 font-weight-bold" id="visitantes"></h5>

                                    <p class="font-small grey-text">Visitantes unicos</p>
                                </div>

                            </div>



                        </div>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">

                        <div class="card">

                            <div class="row mt-3">

                                <div class="col-md-5 col-5 text-left pl-4">

                                    <a type="button" class="btn-floating btn-lg warning-color ml-4 waves-effect waves-light">
                                        <i class="fas fa-boxes" style="width: auto;
                                        height: auto;
                                        margin-top: -5px;" aria-hidden="true"></i>
                                    </a>

                                </div>

                                <div class="col-md-7 col-7 text-right pr-5">

                                    <h5 class="ml-4 mt-4 mb-2 font-weight-bold" id="pedidosn" ></h5>
                                    <p class="font-small grey-text">Número Pedidos</p>

                                </div>

                            </div>



                        </div>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">

                        <div class="card">

                            <div class="row mt-3">

                                <div class="col-md-5 col-5 text-left pl-4">
                                    <a type="button" class="btn-floating btn-lg light-blue lighten-1 ml-4 waves-effect waves-light"><i class="fas fa-shopping-basket" style="width: auto;
                                height: auto;
                                margin-top: -5px;" aria-hidden="true"></i></a>
                                </div>

                                <div class="col-md-7 col-7 text-right pr-5">
                                    <h5 class="ml-4 mt-4 mb-2 font-weight-bold" id="ventastotal"></h5>
                                    <p class="font-small grey-text">Total Ventas</p>
                                </div>

                            </div>



                        </div>

                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">

                        <div class="card">

                            <div class="row mt-3">

                                <div class="col-md-5 col-5 text-left pl-4">
                                    <a type="button" class="btn-floating btn-lg red accent-2 ml-4 waves-effect waves-light"><i class="fas fa-money-bill-wave" style="width: auto;
                                height: auto;
                                margin-top: -5px;" aria-hidden="true"></i></a>
                                </div>

                                <div class="col-md-7 col-7 text-right pr-5">
                                    <h5 class="ml-4 mt-4 mb-2 font-weight-bold" id="mediapedidos"></h5>
                                    <p class="font-small grey-text">Pedido Medio</p>
                                </div>

                            </div>



                        </div>

                    </div>


                </div>


            </section>

      

        <div class="card col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">


            <div class="card-body">
                <p class="note note-info"><strong>info:</strong> Para mas información sobre los objetivos poner el raton encima del circulo de color </p>
                <div class="table-responsive text-nowrap">
                    <table id="dt-select" class="table table-striped table-bordered" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Zona</th>
                                <th>Nombre Zona</th>
                                <th>Total de Venta</th>
                                <th>Objetivo</th>
                                <th>Numero de Pedidos</th>
                                <th>Número de Clientes Únicos</th>
                                <th>Pedido Medio</th>
                                <th>Unidades Electricas</th>

                            </tr>
                        </thead>
                        <tbody id="tabladatos" class="text-center">

                        </tbody>
                    </table>
                </div>
            </div>


        </div>

    </div>
</main>
<?php
include './footer.php';
?>