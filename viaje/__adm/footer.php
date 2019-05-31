
<script src="../assets/js/jquery-3.2.1.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="../assets/js/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="../assets/js/bootstrap.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="../assets/js/mdb.min.js"></script>
<!--Initializations-->
<script>
    // SideNav Initialization
    $(".button-collapse").sideNav();

    var container = document.getElementById('slide-out');
    Ps.initialize(container, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });

    // Data Picker Initialization
    $('.datepicker').pickadate();

    // Material Select Initialization
    $(document).ready(function () {
        $('.mdb-select').material_select();
    });

    // Tooltips Initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
</script>

</body>

</html>