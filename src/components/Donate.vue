<template>

    <v-btn
    tile
    :outlined="true"
    @click="donate"
    :color="color">
    ${{ price }} <v-icon right style="margin-left: 0px !important;">chevron_right</v-icon>
    </v-btn>
  
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51GsDP6DSETweKl9naTxFisLcIDO4mWlKaF9Rb9aWnKPwEgS5yQFtTbkMJD7KrG1eMhzJon9tLEtnyYIBwwb509c400cjFyAsXG');

export default {

    props: {
        color: {
            type: String,
            default: 'black'
        },
        price: {
            type: String,
        },
        priceLink: { 
            type: String,
            default: 'price_1GxGmYDSETweKl9n7Bnmh1Gl'
        }
    },

    methods: {
        async donate() {
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
            lineItems: [
                
                {price: this.priceLink, quantity: 1}
            ],
            mode: 'payment',
            successUrl: process.env.VUE_APP_HOST + '/#/thanks',
            cancelUrl: process.env.VUE_APP_HOST + '/#' + this.currentRoutePath,
            });
        }
    },
    computed: {
        currentRoutePath() {
            return this.$route.path;
        }
    }
}
</script>