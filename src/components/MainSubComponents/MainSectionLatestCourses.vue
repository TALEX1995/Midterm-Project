<script>
import CreateCardLatestCourses from './CreateCardLatestCourses.vue';
export default {
    data() {
        return {
            latestCourses:
                [
                    {
                        imgUrl: '/src/assets/img/Decisions-icon.png',
                        name: 'Make Better Decisions',
                        teacher: 'James Colins',
                        price: '$21.00'
                    },
                    {
                        imgUrl: '/src/assets/img/Speaker-icon.png',
                        name: 'How to be a speaker',
                        teacher: 'James Colins',
                        price: '$Free'
                    },
                    {
                        imgUrl: '/src/assets/img/Network-icon.png',
                        name: 'Network Introduction',
                        teacher: 'James Colins',
                        price: '$Free'
                    },
                    {
                        imgUrl: '/src/assets/img/Brand-icon.png',
                        name: 'Brand Management',
                        teacher: 'James Colins',
                        price: '$Free'
                    }
                ]
        }
    },
    components: { CreateCardLatestCourses }


}
</script>


<template>
    <section class="container">
        <!-- Title -->
        <h1 class="h1-big-size py-5">Latest Courses</h1>
        <div class="row row-cols-4 justify-content-between">
            <!-- Card -->
            <CreateCardLatestCourses v-for="course in latestCourses" :course="course" />
        </div>
    </section>
</template>


<style></style>