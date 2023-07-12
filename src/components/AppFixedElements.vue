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

    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

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
</style>
