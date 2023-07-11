<script>
import MainSectionFacultiesCard from './MainSectionFacultiesCard.vue'

export default {
    data() {
        return {
            facultiesInfo:
                [
                    {
                        url: '/src/assets/img/Gavel-v2.png',
                        alt: 'Law',
                        text: 'Law Faculty'
                    },
                    {
                        url: '/src/assets/img/Coins-tabs-v2.png',
                        alt: 'Economy',
                        text: 'Economy'
                    },
                    {
                        url: '/src/assets/img/Medicine-tabs-v2.png',
                        alt: 'Medicine',
                        text: 'Medicine'
                    },
                    {
                        url: '/src/assets/img/Computer-tabs-v2.png',
                        alt: 'Computer Science',
                        text: 'Computer Science'
                    },
                    {
                        url: '/src/assets/img/Palette-tabs-v2.png',
                        alt: 'Graphic Design',
                        text: 'Graphic Design'
                    },
                ]
        }
    },

    components: {
        MainSectionFacultiesCard,
    }
}
</script>


<template>
    <section>
        <div class="text-center pt-4">
            <h1 class="h1-big-size">Faculties Avaiable at EduPrime</h1>
            <p class="py-4">A single university with a load of courses, tailored <br> to satisfy any student's needs.</p>
        </div>
        <div class="faculties-card-container">
            <div class="container">
                <div class="row row-cols-5">
                    <MainSectionFacultiesCard v-for="facultie in facultiesInfo" :img="facultie" />
                </div>
            </div>
        </div>



    </section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

.faculties-card-container {
    box-shadow: 0 0 20px $box-shadow-color;
}
</style>