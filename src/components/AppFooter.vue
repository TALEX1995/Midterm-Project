<script>
import FooterDescription from './FooterSubComponents/FooterDescription.vue';
import FooterLinkCol from './FooterSubComponents/FooterLinkCol.vue';

export default {
    components: {
        FooterDescription, FooterLinkCol,
    },

    props: {
        logo: Object,
        linkFooterEduPrime: Array,
        linkFooterNetworking: Array,
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
}
</style>