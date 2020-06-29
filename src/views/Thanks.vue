<template>

    <v-container class="thanks">
        <v-row>
            <v-col
            cols="12">

                <div class="logo">
                    <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="250" width="250" />
                    <div style="padding: 16px;"> Thank you for believing with us and giving to our mission! </div>
                    <div style="max-width: 250px; margin: 0 auto; padding-top: 24px;"> <v-img src="https://media.giphy.com/media/AwLhdQZ229gRi/giphy.gif"> </v-img> </div>
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

    @media (max-width: 1260px) {
        .logo {
            font-size: 3rem;
        }
    }


    @media (max-width: 780px) {
        .logo {
            font-size: 2.5rem;
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