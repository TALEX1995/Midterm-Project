<script>
import MainSectionCourses from './MainSubComponents/MainSectionCourses.vue';
import MainSectionFaculties from './MainSubComponents/MainSectionFaculties.vue';
import MainSectionUniversityYear from './MainSubComponents/MainSectionUniversityYear.vue';
import MainUpcomingEvents from './MainSubComponents/MainUpcomingEvents.vue';

export default {
    components: {
        MainSectionCourses, MainSectionFaculties, MainSectionUniversityYear, MainUpcomingEvents,
    }
}
</script>


<template>
    <main>
        <MainSectionCourses />
        <MainSectionFaculties />
        <MainSectionUniversityYear />
        <MainUpcomingEvents />
    </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

section {
    color: $dark-gray-text;
}
</style>