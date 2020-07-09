<template>
    <div class="confirm">
        <v-container>
            <v-row>
                <v-col
                cols="12">

                    <div class="logo">
                        <v-img style="margin: auto;" :contain="true" :src="require('../assets/logo.svg')" height="250" width="250" />
                        <div style="padding: 16px;"> {{ message }} </div>
                        <div style="padding: 16px;" class="subtitle"> You have signed up to pray on the following days: 
                        </div>
                        <ul style="list-style-type:none">
                            <li v-for="(slot, i) in confirmedSlots" v-bind:key="i">
                                {{ slot.year }}-{{ (slot.monthIndex + 1).toString().padStart(2, '0') }}-{{ (slot.dayIndex + 1).toString().padStart(2, '0') }}
                            </li>
                        </ul>
                    <br><br>
                    </div>

                </v-col>
            </v-row>
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
            this.message = "Confirmed!"
            this.confirmedSlots = slots;
        }, message => {
            console.log("Whoops, something broke! Message: " + message);
        });
    }
}
</script>

<style lang="scss" scoped>

.confirm {
    margin-top: 82px;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 3.5rem;
        line-height: 1.33em;
}

.subtitle {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.33em;
}


</style>