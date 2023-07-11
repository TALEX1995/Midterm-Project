<script>
export default {
    props: {
        date: String,
    }
}
</script>


<template>
    <div class="col">
        <div class="card">
            <div class="card-body text-center">
                <h3>Coaching Sessions</h3>
                <h6><font-awesome-icon :icon="['far', 'calendar-days']" /> {{ date }}</h6>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor[...]</p>
            </div>
            <div class="text-center link-container pt-4">
                <a href="#"><font-awesome-icon :icon="['fas', 'plus']" /> Find More</a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;

.card {
    color: $dark-gray-text;
}

h3 {
    font-weight: 800;
}

.link-container {
    margin-bottom: -12px;
}

a {
    @include small-button($salmon);
    color: $white;
    box-shadow: 0 0 20px $box-shadow-color;
    font-weight: 700;
}
</style>