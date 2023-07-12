<script>
import MainSectionCourses from './MainSubComponents/MainSectionCourses.vue';
import MainSectionFaculties from './MainSubComponents/MainSectionFaculties.vue';
import MainSectionUniversityYear from './MainSubComponents/MainSectionUniversityYear.vue';
import MainUpcomingEvents from './MainSubComponents/MainUpcomingEvents.vue';
import MainSectionLatestCourses from './MainSubComponents/MainSectionLatestCourses.vue';
import MainSectionExamMethod from './MainSubComponents/MainSectionExamMethod.vue';
import MainSectionInterStudents from './MainSubComponents/MainSectionInterStudents.vue';
import MainSectionSubNews from './MainSubComponents/MainSectionSubNews.vue';

export default {
    components: {
        MainSectionCourses,
        MainSectionFaculties,
        MainSectionUniversityYear,
        MainUpcomingEvents,
        MainSectionLatestCourses,
        MainSectionExamMethod,
        MainSectionInterStudents,
        MainSectionSubNews,
    }
}
</script>


<template>
    <main>
        <MainSectionCourses />
        <MainSectionFaculties />
        <MainSectionUniversityYear />
        <MainUpcomingEvents />
        <MainSectionLatestCourses />
        <MainSectionExamMethod />
        <MainSectionInterStudents />
        <MainSectionSubNews />
    </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

section {
    color: $dark-gray-text;
}
</style>