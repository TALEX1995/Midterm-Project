<script>
export default {
    props: {
        course: Object,
    }
}
</script>

<template>
    <div class="row g-3 justify-content-between">
        <div class="card">
            <!-- Img -->
            <img :src="course.imgUrl" class="card-img-top w-50 p-3 pt-5" :alt="course.name">

            <!-- Card Text -->
            <div class="card-body text-center">
                <h5 class="pb-2">{{ course.name }}</h5>
                <p><font-awesome-icon :icon="['far', 'user']" /> Teacher: <span>{{ course.teacher }}</span></p>
                <p><font-awesome-icon :icon="['far', 'money-bill-1']" /> Price: <span>{{ course.price }}</span></p>
            </div>

            <!-- Link -->
            <div class="text-center link-container">
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                    View Course
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;

img {
    margin: 0 auto;
}

h5 {
    font-weight: 800;
}

.card {
    box-shadow: 0 0 20px $box-shadow-color;
    color: $dark-gray-text;
    border: none;

    a {
        color: $white;
        @include small-button($salmon);
        box-shadow: 0 0 20px $box-shadow-color;
    }
}

.link-container {
    margin-bottom: -12px;
}

span {
    font-weight: 700;
}
</style>