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

        <!-- Faculties card -->
        <div class="faculties-card-container">
            <div class="container">
                <div class="row row-cols-5">
                    <MainSectionFacultiesCard v-for="facultie in facultiesInfo" :img="facultie" />
                </div>
            </div>
        </div>

        <!-- Faculty text and img -->
        <div class="container">
            <div class="row row-cols-2">
                <div class="col d-flex justify-content-center align-items-center">
                    <img src="../../assets/img/Gavel-Illustration-e1556884768193.png" alt="Law Faculty pic">
                </div>
                <div class="col">
                    <h3>Law Faculty</h3>
                    <p>Learning from world-leading academics and practitioners, you’ll not only receive an outstanding
                        grounding in the theory of law, but you will be able to understand how those principles are applied
                        in practice through a range of student-led activities and competitions.</p>
                    <div class="py-5"><a href="#">Read More</a></div>
                </div>

            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;

.faculties-card-container {
    box-shadow: 0 0 20px $box-shadow-color;
}

h3 {
    font-size: $rem3;
    font-weight: 700;
    padding-bottom: $rem2;
}

.row-cols-2 {
    padding: 100px 0;
}

a {
    @include big-button($salmon);
    color: white;
    box-shadow: 0 0 20px $box-shadow-color;
}
</style>