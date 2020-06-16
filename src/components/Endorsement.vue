<template>
    <div>
        <div class="endo-title">{{endorsement.name}}</div>
        <div class="endo-link">
            <a v-bind:href="endorsement.homepageURL">{{endorsement.homepageURL}}</a>
        </div>
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

.v-application a {
    color: #1565C0 !important;
}

.endo-title {
    font-family: 'Montserrat', sans-serif !important;
        font-weight: 700;
        font-size: 1.6666rem;
        line-height: 2rem;
    word-break: keep-all;
    padding-top: 16px; 
    padding-bottom: 10px;
}

.endo-link {
    font-family: 'Inter', sans-serif;
        line-height: 1.4em;
    padding-bottom: 16px; 
    padding-top: 10px;
}

</style>