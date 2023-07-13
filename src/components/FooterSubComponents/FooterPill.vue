<script>
export default {
    props: {
        text: String,
    }
}
</script>


<template>
    <a href="#" class="badge rounded-pill">{{ text }}</a>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

.badge {
    background-color: transparent;
    border: 1px solid $white;
    padding: 10px;
    margin-left: $rem1;
    margin-top: $rem1;
}
</style>