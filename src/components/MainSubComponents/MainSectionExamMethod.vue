<script></script>


<template>
    <section class="container">
        <div class="row row-cols-2">
            <div class="col">
                <div>
                    <img class="small-img" src="../../assets/img/Exam-icon.png" alt="Exam">
                </div>
                <h1 class="h1-big-size pb-5 pt-3">The Most Efficient examination method</h1>
                <p class="w-75">EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate
                    the evaluation
                    of our students. Every teacher from our university has an influence on how students are evaluated at
                    his/her subject.</p>
                <div class="pt-5"><a href="#">Discover the Method</a></div>
            </div>
            <div class="col p-4">
                <img src="../../assets/img/Exam-Illustration.png" alt="Exam Illustration">
            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;

.container {
    margin-top: 150px;
}


a {
    @include big-button($salmon);
    box-shadow: 0 0 20px $box-shadow-color;

    &:hover {
        background-color: $soft-yellow;
    }
}
</style>