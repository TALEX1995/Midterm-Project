<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {

    data() {
        return {
            headerLinks: ['Home', 'Courses', 'About Us', 'News', 'Pages', 'Contact', 'Purchase', 'VIEW COURSES'],
            logoHeader: {
                url: './assets/img/theme_eduprime_logo.png',
                alt: 'Logo EduPrime'
            },
            linkFooterEduPrime: ['Request a website', 'Browse Themes', 'Payment options', 'Support System', 'Checkout', 'Purchase Theme'],
            linkFooterNetworking: ['Purchase Theme', 'Our Benefits', 'Our Team', 'Our Services', 'Other Products', 'My Account'],
            searchCategories: ['ECONOMY', 'DESIGN', 'COACHING', 'BUSINESS', 'MEDICINE', 'LAW', 'FITNESS']
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
        AppHeader, AppMain, AppFooter
    },
}
</script>


<template>
    <AppHeader :headerLinks="headerLinks" :logoHeader="logoHeader" />
    <AppMain />
    <AppFooter :logo="logoHeader" :linkFooterEduPrime="linkFooterEduPrime" :linkFooterNetworking="linkFooterNetworking"
        :searchCategories="searchCategories" />
</template>


<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
