<template>
    <div>
        <h3><a v-bind:href="endorsement.homepageURL">{{endorsement.homepageURL}}</a></h3>
        <p class="text-left">
            {{endorsement.summary}}
        </p>
        <p>
            Donate: <a v-bind:href="endorsement.donateURL">{{endorsement.donateURL}}</a>
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

</style>