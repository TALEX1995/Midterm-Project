<script>
import FooterDescription from './FooterSubComponents/FooterDescription.vue';
import FooterLinkCol from './FooterSubComponents/FooterLinkCol.vue';
import FooterSearch from './FooterSubComponents/FooterSearch.vue';

export default {
    components: {
        FooterDescription, FooterLinkCol, FooterSearch,
    },

    props: {
        logo: Object,
        linkFooterEduPrime: Array,
        linkFooterNetworking: Array,
        searchCategories: Array,
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <FooterDescription :logo="logo" />
                <FooterLinkCol :title="'Get EduPrime'" :list="linkFooterEduPrime" />
                <FooterLinkCol :title="'Networking'" :list="linkFooterNetworking" />
                <FooterSearch :categories="searchCategories" />
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

footer {
    background-color: $salmon;
    color: $white;
}

.container {
    padding-top: 150px;
    padding-bottom: 100px;
}
</style>