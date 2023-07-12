<script></script>

<template>
    <div class="wave-top"></div>
    <section>
        <div class="container">
            <!-- Title -->
            <div>
                <img class="small-img m-auto" src="../../assets/img/Clock-and-Bell.png" alt="Clock">
                <h1>University Year</h1>
            </div>

            <!-- Datetime -->
            <div class="row justify-content-end">
                <div class="col-4 text-center demo">
                    <h5>Demo Classes</h5>
                    <p>In the first week, students try to accommodate with the teaching style and choose their optional
                        courses.</p>
                </div>
                <div class="col-4 text-center pe-5">
                    <h5>Graduation Day</h5>
                    <p>On the day of graduation, all students gather for the ceremony and then network and party among
                        others.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <img class="timeline" src="../../assets/img/Timeline-Item.png" alt="Timeline">
                </div>
            </div>
            <div class="row justify-content-around">
                <div class="col-4 text-center">
                    <h5 class="pt-2">Orientation</h5>
                    <p>First day of the university year, all students gather for the opening ceremony and then network with
                        others.</p>
                </div>
                <div class="col-4 text-center ps-5">
                    <h5 class="pt-2">Evaluation</h5>
                    <p>At the end of a semester, students take a general evaluation test for every subject they're learning
                    </p>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;


.wave-top {
    background-image: url(../../assets/svg/svg-0.svg);
    height: 185px;
    background-repeat: no-repeat;
}

section {
    background-color: $salmon;
}


h1 {
    font-size: $rem350;
    font-weight: 800;
    color: $white;
    text-align: center;
    padding-bottom: $rem3;
}

section {
    color: $white;
}

.timeline {
    width: 100%;
    height: auto;
}

.demo {
    margin-right: 120px;
}
</style>