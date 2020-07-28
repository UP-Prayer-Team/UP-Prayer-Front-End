<template>

    <v-btn
    tile
    large
    :outlined="true"
    @click="donate"
    :color="color">
    ${{ price }}
    </v-btn>
  
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_live_8CVRgAt7IgE8rLYLMsq0V11R00jQgfPzhm');

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