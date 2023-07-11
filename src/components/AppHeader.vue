<script>
import NavBar from './HeaderSubComponents/NavBar.vue'
import HeaderJumbo from './HeaderSubComponents/HeaderJumbo.vue'

export default {
    components: {
        NavBar, HeaderJumbo
    },

    props: {
        headerLinks: Array,
        logoHeader: Object,
    }
}
</script>

<template>
    <header>
        <div class="overlay">
            <NavBar :NavBarLinks="headerLinks" :logoHeader="logoHeader" />
            <HeaderJumbo />
        </div>
    </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

header {
    background-image: url(../assets/img/theme_slider2_bg-1.jpg);
    color: $white;
    position: relative;
}

.overlay {
    height: 100%;
    width: 100%;
    background-color: $bkg-header-overlay;
}
</style>