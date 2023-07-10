<script>
export default {
    props: {
        logo: Object,
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
    <div class="container-fluid">
        <div>
            <!-- <img class="img-fluid" :src="logo.url" :alt="logo.text"> -->
        </div>
        <div>
            <ul>
                <li v-for="link in NavBarLinks">
                    <a href="#">{{ link }}</a>
                    <font-awesome-icon v-if="hasDropDown(link)" :icon="['fas', 'caret-down']" />
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container-fluid {
    a {
        color: black;
    }
}
</style>