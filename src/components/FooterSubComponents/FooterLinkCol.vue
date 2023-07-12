<script>
export default {
    props: {
        title: String,
        list: Array,
    }
}
</script>

<template>
    <div class="col-2">
        <h5 class="pb-4">{{ title }}</h5>
        <ul class="ps-0">
            <li v-for="item in list"><a href="#">{{ item }}</a></li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

a {
    color: $white;
}

li {
    padding-bottom: $rem1;
}

h5 {
    font-weight: 700;
}
</style>