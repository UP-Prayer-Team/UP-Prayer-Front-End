<template>

    <v-container class="give">
        <v-row>
            <v-col
            cols="12"
            style="padding-bottom: 0px;">

                <div class="logo">
                    <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="200" width="200" />
                    <div style="padding: 16px; padding-top: 32px;"> The UP Movement operates as a non-profit. If you wish to give directly toward UP activity costs, please do so here. </div>
                </div>

            </v-col>
        </v-row>
        <v-row>
                <v-col
                cols="12">
                    <v-sheet :max-height="460">
  
                        <v-container>
                            <v-row>
                                <v-col cols="12" style="padding-bottom: 36px;">
                                
                                    <app-donate class="donate" price="5" :priceLink="this.price5"></app-donate>
                                    
                                    <app-donate class="donate" price="10" :priceLink="this.price10"></app-donate>
                                    
                                    <app-donate class="donate" price="25" :priceLink="this.price25"></app-donate>
                                    
                                    <app-donate class="donate" price="50" :priceLink="this.price50"></app-donate>
                                    
                                    <app-donate class="donate" price="100" :priceLink="this.price100"></app-donate>
                                
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-sheet>
                </v-col>
            </v-row>
    </v-container>
  
</template>

<script>
import Donate from '../components/Donate.vue';

export default {

    components: {
        'app-donate': Donate
    },
    data() {
        return {
            price5: 'price_1GxGmYDSETweKl9n7Bnmh1Gl',
            price10: 'price_1GxGmYDSETweKl9nrdkgQzow',
            price25: 'price_1GxGmYDSETweKl9nFeFMCLjL',
            price50: 'price_1GxGmYDSETweKl9nC0XCAStA',
            price100: 'price_1GxGmYDSETweKl9n0dcutW49',
        }
    },
    mounted () {
        window.scrollTo(0, 0);
}
}
</script>

<style>

.give {
    margin-top: 82px;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.33em;
        word-break: keep-all;
}

.donate {
    margin: 10px;
}

</style>