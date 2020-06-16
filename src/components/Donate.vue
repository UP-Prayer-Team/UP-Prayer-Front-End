<template>

    <v-btn
    tile
    :outlined="true"
    @click="donate"
    :color="color">
    Give <v-icon right>chevron_right</v-icon>
    </v-btn>
  
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_live_WYk87SMj78XtusRoL72L7lhb00xjX3YWHY');

export default {

    props: {
        color: {
            type: String,
            default: 'black'
        }
    },

    methods: {
        async donate() {
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
            lineItems: [
                
                {price: 'price_1GsBucCO1IOF3vob7EQyOZKa', quantity: 1}
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

<style>

</style>