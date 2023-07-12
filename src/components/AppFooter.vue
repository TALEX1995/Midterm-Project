<script>
import FooterDescription from './FooterSubComponents/FooterDescription.vue';

export default {
    components: {
        FooterDescription,
    },

    props: {
        logo: Object,
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <FooterDescription :logo="logo" />
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