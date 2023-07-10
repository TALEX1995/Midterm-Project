<script>
import AppHeader from './components/AppHeader.vue'

export default {

    data() {
        return {
            headerLinks: ['Home', 'Courses', 'About Us', 'News', 'Pages', 'Contact', 'Purchase'],
        }
    },

    components: {
        AppHeader,
    },
}
</script>


<template>
    <AppHeader :headerLinks="headerLinks" />
</template>


<style lang="scss">
@use './assets/scss/style.scss' as *
</style>
