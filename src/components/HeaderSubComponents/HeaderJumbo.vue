<script></script>


<template>
    <div class="jumbo-container">
        <div class="jumbo">
            <h1>Key to your success</h1>
            <p>Edu Prime is the most versatile WorldPress theme for educational purposes, showcasing universities, courses,
                secondary schools etc.</p>
            <div class="jumbo-button-container">
                <div class="big-button-yellow">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    <a href="#" class="ps-2">Search courses</a>
                </div>
                <div class="big-button-white">
                    <font-awesome-icon :icon="['fas', 'user-plus']" />
                    <a href="#" class="ps-2">Apply for university</a>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;
@use '../../assets/scss/mixins' as *;




h1 {
    font-size: $rem4;
    font-weight: 700;
}

p {
    font-size: $rem125;
    padding: $rem2 0;
}

.jumbo {
    max-width: 45%;
    text-align: center;
    padding-top: $rem6;
    padding-bottom: calc($rem6 + 130px)
}

.jumbo-container {
    @include flexbox(center, center, column)
}

.big-button-yellow {
    @include big-button($soft-yellow);

    a {
        color: $white;
    }
}

a {
    font-weight: 700
}

.big-button-white {
    @include big-button($white);
    color: $salmon;
    margin-left: $rem2;

    a {
        color: $salmon;
    }
}

.jumbo-button-container {
    @include flexbox(center, center, row);
    padding-bottom: $rem3;
}

.jumbo-container {
    background-image: url(../../assets/img/Wave-1.png);
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>