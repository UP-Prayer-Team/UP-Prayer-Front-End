<template>

    <v-container class="contact-us">
        <v-row>
            <v-col
            cols="12">

                <div class="logo">
                    <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="200" width="200" />
                    <div style="padding: 16px;"> Contact us! </div>
                    <div style="max-width: 250px; margin: 0 auto; padding: 16px;"> <v-img src="https://media.giphy.com/media/6UbEozsUuERkQ/giphy.gif"> </v-img> </div>
                    <div style="padding: 16px;" class="subtitle"> You can reach us at info@upmovement.org </div>
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
        font-size: 4rem;
        line-height: 1.33em;
        color: black
}

.subtitle {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.33em;
}

/* xs devices (phones, 430px width and down) */
    @media only screen and (max-width: 560px) {

        .subtitle {
            font-size: 1.5rem;
        }
    }

    /* xxs devices (phones, 430px width and down) */
    @media only screen and (max-width: 370px) {

        .logo {
            font-size: 2.5rem;
        }

        .subtitle {
            font-size: 1.2rem;
        }
    }

    @media only screen and (max-width: 370px) {

        .logo {
            font-size: 2.4rem;
        }

    }

</style>