<script>
import NavBar from './HeaderSubComponents/NavBar.vue'

export default {
    components: {
        NavBar
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
    </header>
</template>


<style lang="scss" scoped>
header {
    background-image: url(../assets/img/theme_slider2_bg-1.jpg);
}
</style>