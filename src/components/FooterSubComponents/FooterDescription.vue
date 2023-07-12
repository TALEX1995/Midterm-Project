<script>
export default {
    props: {
        logo: Object,
    }
}
</script>

<template>
    <div class="col-4">
        <img class="logo" :src="logo.url" :alt="logo.alt">
        <p class="pt-5">
            EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses,
            secondary schools etc.
        </p>
        <!-- Icon -->
        <div class="d-flex align-items-center pt-2">
            <div class="icon-container">
                <font-awesome-icon class="icon-brand" :icon="['fab', 'facebook-f']" />
            </div>
            <div class="icon-container">
                <font-awesome-icon class="icon-brand" :icon="['fab', 'twitter']" />
            </div>
            <div class="icon-container">
                <font-awesome-icon class="icon-brand" :icon="['fab', 'instagram']" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;

.logo {
    padding-right: 100px;
}


.icon-container {
    width: 50px;
    height: 50px;
    border: 2px solid $soft-yellow;
    border-radius: 50%;
    margin-right: 15px;
    @include flexbox(center, center)
}
</style>