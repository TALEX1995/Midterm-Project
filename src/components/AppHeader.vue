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


<style></style>