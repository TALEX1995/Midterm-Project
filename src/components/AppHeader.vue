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
        <NavBar :NavBarLinks="headerLinks" :logoHeader="logoHeader" />
        <HeaderJumbo />
    </header>
</template>


<style lang="scss" scoped>
header {
    background-image: url(../assets/img/theme_slider2_bg-1.jpg);
    color: white;
}
</style>