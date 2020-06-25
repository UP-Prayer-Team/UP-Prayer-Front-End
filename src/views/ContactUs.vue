<template>

    <v-container class="contact-us">
        <v-row>
            <v-col
            cols="12">

                <div class="logo">
                    <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="250" width="250" />
                    <div style="padding: 16px;"> Contact us! </div>
                    <div style="padding: 16px;" class="subtitle"> You can reach us at up info@upmovement.org </div>
                </div><br><br>

            </v-col>
        </v-row>
    </v-container>
  
</template>

<script>
export default {
    mounted () {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>

.contact-us {
    margin-top: 82px;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 200%;
        line-height: 1.33em;
}

.subtitle {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 70%;
        line-height: 1.33em;
}

</style>