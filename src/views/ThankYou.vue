<template>

    <v-container class="thanks">
        <v-row>
            <v-col
            cols="12">

                <div class="logo">
                    <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="250" width="250" />
                    <div style="padding: 16px;"> Thank you for believing with us and signing up! </div>
                    <div style="padding: 16px;" class="subtitle"> We have sent you an email that will let you confirm your prayer slot along with some prayer resources. </div>
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

.thanks {
    margin-top: 82px;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 3.5rem;
        line-height: 1.33em;
        color: black;
}

.subtitle {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.33em;
}

   @media (max-width: 1260px) {
        .logo {
            font-size: 3rem;
        }

        .subtitle {
            font-size: 1.5rem;
        }
    }


    @media (max-width: 780px) {
        .logo {
            font-size: 2.5rem;
        }
        .subtitle {
            font-size: 1rem;
        }
    }

     @media (max-width: 660px) {
        .logo {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 560px) {
        .logo {
            font-size: 1.5rem;
        }
    }

</style>