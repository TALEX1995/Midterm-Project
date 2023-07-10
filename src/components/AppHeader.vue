<script>
import NavBar from './HeaderSubComponents/NavBar.vue'

export default {
    components: {
        NavBar
    },

    props: {
        headerLinks: Array,
    }
}
</script>

<template>
    <header>
        <NavBar :NavBarLinks="headerLinks" />
    </header>
</template>


<style></style>