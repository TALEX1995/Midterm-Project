<script>
import CreateCardUpcomingEvents from './CreateCardUpcomingEvents.vue';

export default {
    components: { CreateCardUpcomingEvents }
}
</script>


<template>
    <section>
        <div class="container">
            <div class="py-5">
                <img class="pb-2 small-img m-auto" src="../../assets/img/upcoming-events-calendar-icon.png" alt="Clock">
                <h1>Upcoming Events</h1>
            </div>
            <!-- Card -->
            <div class="row row-cols-3">
                <CreateCardUpcomingEvents :date="'20 May 21:30 PM'" />
                <CreateCardUpcomingEvents :date="'24 Mar 18:00 PM'" />
                <CreateCardUpcomingEvents :date="'12 Feb 13:30 PM'" />
            </div>
        </div>

        <div class="text-center pb-5 show-events-container">
            <a class="show-events" href="#">View All Events</a>
        </div>
    </section>
    <!-- Wave bottom -->
    <div class="wave-bottom">

    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;

section {
    background-color: $salmon;
    color: white;
}


h1 {
    font-size: $rem350;
    font-weight: 800;
    color: $white;
    text-align: center;
    padding-bottom: $rem150;
}

.show-events {
    @include big-button($soft-yellow);
}

.show-events-container {
    margin-top: 100px;
}

.wave-bottom {
    background-image: url(../../assets/svg/svg-1.svg);
    height: 100px;
    background-repeat: no-repeat;
}
</style>