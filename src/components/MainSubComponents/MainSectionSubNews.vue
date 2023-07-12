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
    line-height: $rem4;
    border-radius: 40px;
    border: none;
}
</style>