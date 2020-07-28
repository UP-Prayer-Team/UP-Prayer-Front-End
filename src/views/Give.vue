<template>

    <v-container class="give">
        <v-row style="padding-bottom: 0px !important;">
            <v-col
            cols="12"
            style="padding-bottom: 0px;">

                <div class="logo">
                    <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="200" width="200" />
                    <div style="padding: 16px; padding-top: 32px; padding-bottom: 0px !important;" > 
                        <div>The UP Movement operates as a non-profit. </div>
                        <div class="subtitle"> If you wish to give directly toward UP activity costs, please do so here. </div> 
                    </div>
                </div>

            </v-col>
        </v-row>
        <v-row>
                <v-col
                cols="12">
                    <v-sheet :max-height="460">
  
                        
                            <v-row>
                                <v-col cols="12">
                                
                                    <app-donate class="donate" price="5" :priceLink="this.price5"></app-donate>
                                    
                                    <app-donate class="donate" price="10" :priceLink="this.price10"></app-donate>
                                    
                                    <app-donate class="donate" price="25" :priceLink="this.price25"></app-donate>
                                    
                                    <app-donate class="donate" price="50" :priceLink="this.price50"></app-donate>
                                    
                                    <app-donate class="donate" price="100" :priceLink="this.price100"></app-donate>

                                    <app-donate class="donate" price="250" :priceLink="this.price250"></app-donate>
                                
                                </v-col>
                            </v-row>
                            <v-row> 
                                <v-col
                                cols="12"> 
                                    <div class="fine-print"><div> If you wish to give an amount not listed please contact us at info@upmovement.org </div> 
                                    <div> Unstoppable Prayer Movement is a tax-deductible, 501(3)c non-profit organization </div></div><br><br>
                                </v-col>
                            </v-row>
                        
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
            price5: 'price_1GxGwGDSETweKl9nC9Ax62Xu',
            price10: 'price_1GxGwGDSETweKl9nAvZuoQDs',
            price25: 'price_1GxGwGDSETweKl9nI379zO6f',
            price50: 'price_1GxGwGDSETweKl9n4n6fmjEX',
            price100: 'price_1GxGwGDSETweKl9nJSPJPHNE',
            price250: 'price_1GzQ3LDSETweKl9n9iuUAcCc',
        }
    },
    mounted () {
        window.scrollTo(0, 0);
}
}
</script>

<style scoped>

.give {
    margin-top: 82px;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.33em;
        word-break: keep-all;
        color: black;
}

.subtitle {
    font-size: 1.5rem;
    line-height: 1.1em;
    padding-top: 16px;
    padding-bottom: 0px !important;
}

.fine-print {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    word-break: keep-all;
    color: black;
    font-size: .8rem;
}

.donate {
    margin: 10px;
}

/* xs devices (phones, 430px width and down) */
    @media only screen and (max-width: 560px) {
        .logo {
            font-size: 1.5rem;
        }

        .subtitle {
            font-size: 1rem;
        }
    }

</style>