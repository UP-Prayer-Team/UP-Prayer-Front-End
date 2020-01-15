<template>
    <div class="home">
        <div class="container"> 
        <v-btn id="button" @click="getEndos">Get Endorsements</v-btn>
        <v-btn id="button" @click="getEndo">Get current endorsement</v-btn>
        <v-btn id="button" @click="update"> Update </v-btn>
        <v-btn id="button" @click="getMonthRes">Get This Month's Reservations</v-btn>
        </div>
        <v-sheet min-width="150" height="100"> </v-sheet>
        
    </div>
</template>

<script>
import UPClient from '../services/UPClient'

export default {
    name: 'home',
    methods: {
        getEndos() {
            UPClient.getEndorsementList((currentIndex, endorsements) => {
                console.log("Endorsements: (current index: " + currentIndex + ")\n" + JSON.stringify(endorsements));
            }, message => {
                console.log("ERROR: Couldn't get endorsement list. Message: " + message);
            });
        },
        getEndo() {
            UPClient.getCurrentEndorsement(endorsement => {
                console.log("Current endorsement: \n" + JSON.stringify(endorsement));
            }, message => {
                console.log("ERROR: Couldn't get current endorsement. Message: " + message);
            });
        },
        update() {

        },
        getMonthRes() {
            let today = new Date();
            UPClient.getMonthSummary(today.getUTCFullYear(), today.getUTCMonth(), data => {
                // Print out each day
                for (let i = 0; i < data.length; i++) {
                    let dayData = data[i];
                    console.log("Day " + i + ": "  + dayData.count + " reservations");

                    for (let j = 0; j < dayData.locations.length; j++) {
                        let resData = dayData.locations[j];
                        console.log("  " + resData.district + ", " + resData.country);
                    }   
                }
            }, message => {
                console.log("ERROR: Couldn't get reservations for this month. Message: " + message);
            })
        }
    }


}
</script>
<style lang="scss" scoped>
    #button {
        margin: 15px;
    }
</style>
