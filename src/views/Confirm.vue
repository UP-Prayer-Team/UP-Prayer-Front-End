<template>
    <div class="confirm">

        <v-container>
            <v-card>
                <v-card-title class="display-1 text-center">
                    {{ message }}
                </v-card-title>
                <v-card-text class="text-left">
                    You have signed up to pray at the following times:
                    <ul>
                        <li v-for="(slot, i) in confirmedSlots" v-bind:key="i">
                            {{ slot.year }}-{{ (slot.monthIndex + 1).toString().padStart(2, '0') }}-{{ (slot.dayIndex + 1).toString().padStart(2, '0') }}
                        </li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import UPClient from '../services/UPClient';

export default {
    data() {
        return {
            message: "Confirming...",
            confirmedSlots: []
        };
    },
    mounted() {
        let paramString = window.location.hash.split("?")[1];
        let params = new URLSearchParams(paramString);
        let confirmationID = params.get("confirmation");
        UPClient.confirmReservation(confirmationID, slots => {
            this.message = "Thank you for praying!"
            this.confirmedSlots = slots;
        }, message => {
            console.log("OH NO! Message: " + message);
        });
    }
}
</script>

<style lang="scss" scoped>

.v-card {
    margin: 100px auto;
    padding: 50px;
    width: 70%;
    display: table;
}
.v-card__title {
    text-align: center;
}

</style>