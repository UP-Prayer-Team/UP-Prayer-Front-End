<template>

    <v-btn @click="donate">
        Donate
    </v-btn>
  
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_live_WYk87SMj78XtusRoL72L7lhb00xjX3YWHY');

export default {

    methods: {
        async donate() {
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
            lineItems: [
                
                {price: 'price_1GsBucCO1IOF3vob7EQyOZKa', quantity: 1}
            ],
            mode: 'payment',
            successUrl: 'https://192.168.0.24:8080/#/thanks',
            cancelUrl: 'https://192.168.0.24:8080/#' + this.currentRoutePath,
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