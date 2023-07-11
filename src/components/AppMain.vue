<script>
import MainSectionCourses from './MainSubComponents/MainSectionCourses.vue';
import MainSectionFaculties from './MainSubComponents/MainSectionFaculties.vue';

export default {
    components: {
        MainSectionCourses, MainSectionFaculties,
    }
}
</script>


<template>
    <main>
        <MainSectionCourses />
        <MainSectionFaculties />
    </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

section {
    color: $dark-gray-text;
}
</style>