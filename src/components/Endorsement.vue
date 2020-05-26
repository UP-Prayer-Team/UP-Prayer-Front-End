<template>
    <div>
        <h2>{{endorsement.name}}</h2>
        <br><p class="text-left">
            {{endorsement.summary}}
        </p>
        <p>
            <a v-bind:href="endorsement.homepageURL">{{endorsement.homepageURL}}</a>
        </p>
    </div>

</template>

<script>
export default {
    name: 'endorsement',
    props: {
        endorsement: Object
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

h2 {
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 700;
}

p {
    font-family: 'Inter', sans-serif;
        line-height: 1.4em;
}

</style>