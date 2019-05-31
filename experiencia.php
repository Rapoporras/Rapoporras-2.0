
<style>

    @media (max-width: 1025px) {
        .stepper.timeline-images li {
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end; } }

    .stepper.timeline-images li a {
        padding: 0px;
        left: 50%; }
    @media (max-width: 450px) {
        .stepper.timeline-images li a {
            left: 6%; } }
    @media (min-width: 451px) and (max-width: 1025px) {
        .stepper.timeline-images li a {
            left: 6%; } }
    .stepper.timeline-images li a .circle {
        margin-top: 0.9rem;
        width: 23px;
        height: 23px;
        line-height: 23px;
        font-size: 1em;
        text-align: center;
        position: absolute;
        top: 16px;
        margin-left: -12px;
        background-color: #ccc;
        z-index: 2; }

    .stepper.timeline-images li .step-content {
        width: 45%;
        float: left;
        border-radius: 2px;
        position: relative; }
    @media (max-width: 450px) {
        .stepper.timeline-images li .step-content {
            width: 80%;
            left: 3rem;
            margin-right: 3rem;
            margin-bottom: 2rem;
            float: right; } }
    @media (min-width: 451px) and (max-width: 1025px) {
        .stepper.timeline-images li .step-content {
            width: 85%;
            left: 3rem;
            margin-right: 3rem;
            margin-bottom: 2rem;
            float: right; } }

    .stepper.timeline-images li.timeline-inverted {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        -ms-flex-align: end;
        align-items: flex-end; }
    .stepper.timeline-images li.timeline-inverted .step-content {
        float: right; }

    .stepper.stepper-vertical.timeline-images li:not(:last-child):after {
        content: " ";
        position: absolute;
        width: 2px;
        background-color: #26c6da;
        left: 50%;
        top: 32px;
        height: 100%;
        margin-left: -1.5px; }
    @media (max-width: 450px) {
        .stepper.stepper-vertical.timeline-images li:not(:last-child):after {
            left: 6%; } }
    @media (min-width: 451px) and (max-width: 1025px) {
        .stepper.stepper-vertical.timeline-images li:not(:last-child):after {
            left: 6%; } }


</style>

<div class="container">

    <section class="section section-blog-fw pt-5 mt-4 pb-3">
        <div class="d-flex justify-content-start text-center">
            <h4 class="text-center font-up mb-5 pb-3 mt-4 wow fadeIn" data-wow-delay="0.2s" style="animation-name: none; visibility: visible;"><strong>Experiencia</strong></h4>
        </div>
        <div class="row mt-5">
            <div class="col-md-12">
                <ul id="empresas" class="stepper stepper-vertical timeline-images pl-0">
                </ul>
            </div>
        </div>
    </section>
</div>


