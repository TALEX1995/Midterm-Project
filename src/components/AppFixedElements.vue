<script></script>


<template>
    <!-- Later sidebar fixed -->
    <div class="lateral-sidebar d-flex flex-column">
        <font-awesome-icon class="py-3" :icon="['fas', 'cart-shopping']" />
        <font-awesome-icon :icon="['fas', 'book-open']" />
        <font-awesome-icon class="py-3" :icon="['fas', 'life-ring']" />
    </div>

    <!-- Themes Fixed -->
    <div class="themes">
        <div class="theme">
            <img src="../assets/svg/svg-3.svg" alt="Purchase Theme">
            <span class="ps-2">Purchase Theme</span>
        </div>
        <div class="theme mt-3">
            <img src="../assets/svg/svg-2.svg" alt="Related Theme">
            <span class="ps-2">Related Themes</span>
        </div>

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
</style>
