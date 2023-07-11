<script>

export default {
    props: {
        img: Object,
    }
}
</script>


<template>
    <div class="col p-5">
        <a href="#">
            <img :src="img.url" :alt="img.alt">
            <h5 class="pt-3">{{ img.text }}</h5>
        </a>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

img {
    max-width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
}

h5 {
    text-align: center;
    color: $salmon;
}

.col {
    border-right: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
}
</style>