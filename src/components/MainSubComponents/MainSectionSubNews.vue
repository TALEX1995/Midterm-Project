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
                        <input type="e-mail">
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
</style>