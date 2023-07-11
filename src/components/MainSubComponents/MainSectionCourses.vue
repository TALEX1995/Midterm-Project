<script></script>


<template>
    <section>
        <!-- Label -->
        <div class="purchase px-2">Purchase Eduprime on Envato Market</div>
        <div class="container">
            <div class="row row-cols-2">

                <!-- Left col -->
                <div class="col">

                    <!-- Img books and content-->
                    <img class="img-books" src="../../assets/img/Books-icon.png" alt="Books">
                    <h1 class="py-3 h1-big-size">Thousands of courses for any type of student</h1>
                    <p>At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course
                        that satisfies your needs whithin a click away and applies for a course in a matter of minutes.
                        EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it
                        provides.</p>

                    <!-- Link -->
                    <div class="py-5"><a href="#">Browse through courses</a></div>
                </div>

                <!-- Right Col -->
                <div class="p-5 col">

                    <!-- Img Graduation -->
                    <img src="../../assets/img/Graduation-Illustration.png" alt="Graduation">
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;

section {
    background-image: url(../../assets/img/home-background.png);
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}

.img-books {
    width: 50px;
    height: auto;
}

.container {
    padding: 100px 0;
}


a {
    @include big-button($soft-yellow);
    color: white;
    box-shadow: 0 0 20px #f7f7f7;
}

img {
    max-width: 100%;
}

.purchase {
    background-color: $black;
    color: $white;
    width: 175px;
    border-radius: 5px;
    text-align: center;
    margin-left: $rem2;
    font-size: $rem075;
    position: absolute;
    line-height: 20px;
    top: -40px;
}

.purchase::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
    left: calc(175px / 2);
    translate: -50%;
    border: 5px #fff solid;
    border-top-color: $black;
}
</style>