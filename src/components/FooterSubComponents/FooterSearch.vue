<script>
import FooterPill from './FooterPill.vue';

export default {
    props: {
        categories: Array,
    },
    components: { FooterPill }
}
</script>

<template>
    <div class="col-4">
        <!-- Input search -->
        <input class="ps-4" type="e-mail" placeholder="Search ...">
        <button><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>

        <div class="d-flex align-items-end pt-5 flex-column">
            <h5>Search categories</h5>
            <!-- Pills -->
            <div class="text-end">
                <FooterPill v-for="category in categories" :text="category" />
            </div>
            <p class="pt-4">ModelTheme. All rights reserved.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

input {
    width: 100%;
    line-height: 65px;
    border-radius: 40px;
    border: none;
}


button {
    text-decoration: none;
    border: none;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    margin-left: -65px;
    background-color: $soft-yellow;
    color: $white;
}

p {
    color: $soft-yellow;
}
</style>