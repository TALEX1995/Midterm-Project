<script>
export default {
    props: {
        logoHeader: Object,
        NavBarLinks: Array,
    },

    computed: {

    },

    methods: {
        hasDropDown(link) {
            return link === 'Home' || link === 'Courses' || link === 'News' || link === 'Pages'
        }
    }
}
</script>


<template>
    <div class="container-fluid d-flex justify-content-between align-items-center pt-5 px-5">

        <!-- Logo -->
        <div>
            <img class="img-fluid" :src="logoHeader.url" :alt="logoHeader.alt">
        </div>

        <!-- Link NavBar -->
        <div>
            <ul class="d-flex">

                <!-- V-for on links Array -->
                <li class="mx-3" v-for="link in NavBarLinks">
                    <a href="#">{{ link }}</a>
                    <font-awesome-icon class="ms-2" v-if="hasDropDown(link)" :icon="['fas', 'caret-down']" />
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;


img {
    width: 300px;
}

.container-fluid {
    a {
        color: $white;
        font-weight: 700;
    }
}

ul li:last-child a {
    @include big-button($soft-yellow)
}
</style>