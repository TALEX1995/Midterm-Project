<script></script>


<template>
    <section>
        <div class="container h-100">
            <div class="row row-cols-2 align-items-center h-100">
                <div class="col">
                    <h1>Subscribe Now to Our Newslatter!</h1>
                </div>

                <!-- Form -->
                <div class="col">
                    <form @submit.prevent>
                        <input class="ps-4" type="e-mail" placeholder="Email address...">
                        <button type="submit"><font-awesome-icon class="plane-icon"
                                :icon="['fas', 'paper-plane']" /></button>
                    </form>
                </div>
            </div>

        </div>

    </section>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

section {
    background-color: $salmon;
    height: 200px;
}

h1 {
    color: $white;
}

input {
    width: 80%;
    margin-left: $rem5;
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
    box-shadow: -10px 0 10px $box-shadow-color;
}

.plane-icon {
    color: $white;
    font-size: $rem125;
}
</style>