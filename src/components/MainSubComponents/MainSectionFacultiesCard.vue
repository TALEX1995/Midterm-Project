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

.col:first-child h5 {
    color: white;
}

.col:first-child {
    color: $white;
    background-color: $salmon;
    position: relative;
}

.col:first-child img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(238deg) brightness(107%) contrast(106%);
}

.col:first-child::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -30px;
    left: 50%;
    translate: -50%;
    border: 15px transparent solid;
    border-top-color: $salmon;
}
</style>