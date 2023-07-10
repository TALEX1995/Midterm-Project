<script>
import AppHeader from './components/AppHeader.vue'

export default {

    data() {
        return {
            headerLinks: ['Home', 'Courses', 'About Us', 'News', 'Pages', 'Contact', 'Purchase'],
            logoHeader: {
                url: './assets/img/theme_eduprime_logo.png',
                alt: 'Logo EduPrime'
            }
        }
    },


    mounted() {
        this.logoHeader.url = this.getUrl('theme_eduprime_logo', 'png')
    },

    methods: {
        getUrl(imgName, extension) {
            const url = new URL(`./assets/img/${imgName}.${extension}`, import.meta.url);

            return url.href
        },
    },

    components: {
        AppHeader,
    },
}
</script>


<template>
    <AppHeader :headerLinks="headerLinks" :logoHeader="logoHeader" />
</template>


<style lang="scss">
@use './assets/scss/style.scss' as *
</style>
