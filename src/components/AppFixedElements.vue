<script></script>


<template>
    <!-- Later sidebar fixed -->
    <div class="lateral-sidebar d-flex flex-column align-items-center">
        <a href="#"><font-awesome-icon class="py-3" :icon="['fas', 'cart-shopping']" /></a>
        <a href="#"><font-awesome-icon :icon="['fas', 'book-open']" /></a>
        <a href="#"><font-awesome-icon class="py-3" :icon="['fas', 'life-ring']" /></a>
    </div>

    <!-- Themes Fixed -->
    <div class="themes">
        <div class="theme">
            <img src="../assets/svg/svg-3.svg" alt="Purchase Theme">
            <a href="#" class="ps-2">Purchase Theme</a>
        </div>
        <div class="theme mt-3">
            <img src="../assets/svg/svg-2.svg" alt="Related Theme">
            <a href="#" class="ps-2">Related Themes</a>
        </div>
    </div>

    <div class="back-upstairs">
        <a href="#"><font-awesome-icon class="fa-2x" :icon="['fas', 'chevron-up']" /></a>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/vars' as *;
@use '../assets/scss/mixins' as *;

.lateral-sidebar {
    width: 40px;
    background-color: $soft-yellow;
    position: fixed;
    left: 0;
    top: 50vh;
    color: $white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    translate: 0 -50%;
    box-shadow: 0 0 20px #8B8B8A;
}

img {
    width: 20px;
    height: 20px;
    display: inline;
}

.theme {
    background-color: $bkg-charcoal;
    width: 200px;
    color: white;
    border-radius: 5px;
    height: 40px;
    @include flexbox(center, center);
    box-shadow: 0 4px 10px -2px $bkg-charcoal;
}

.themes {
    position: fixed;
    left: 2vw;
    bottom: 5vh;
}

a {
    color: $white;
}

.back-upstairs {
    width: 50px;
    height: 50px;
    background-color: $soft-yellow;
    border-radius: 50%;
    @include flexbox(center, center);
    position: fixed;
    right: 2vw;
    bottom: 5vh;
}
</style>
