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
            <h3 class="pt-3">{{ img.text }}</h3>
        </a>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

img {
    max-width: 100%;
    height: auto;
}

h3 {
    text-align: center;
    color: $salmon;
}

.col {
    border-right: 2px solid #eaeaea;
}
</style>