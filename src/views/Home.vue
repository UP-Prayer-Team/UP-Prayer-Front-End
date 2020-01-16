<template>
    <div class="home">

        <div class="map">
            <v-carousel hide-delimiters :show-arrows="false" :cycle="true">
                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            
        </div>

        <div class="container"> 
            <v-btn id="button" @click="getEndos">Get Endorsements</v-btn>
            <v-btn id="button" @click="getEndo">Get current endorsement</v-btn>
            <v-btn id="button" @click="update"> Update </v-btn>
            <v-btn id="button" @click="getMonthRes">Get This Month's Reservations</v-btn>
            <endorsement v-if="currentEndorsement" v-bind:endorsement="currentEndorsement">

            </endorsement>
        </div>
        <v-sheet min-width="150" height="100"> </v-sheet>
        
    </div>
</template>

<script>
import UPClient from '../services/UPClient'
import Endorsement from '../components/Endorsement.vue'

export default {
    name: 'home',
    components: {
        'endorsement': Endorsement
    },
    data() {
        return {
            currentEndorsement: null,
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://d3nn82uaxijpm6.cloudfront.net/assets/website/heatmap/fb/heatmap-d31ff07df8339b44371bc78dee596642d9faca031132c130a03efba03aa82b57.jpg',
                },
                {
                    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Portland_and_Mt._Hood_from_Pittock_Mansion.jpg/1200px-Portland_and_Mt._Hood_from_Pittock_Mansion.jpg'
                }
            ],
        }
    },
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
                this.currentEndorsement = endorsement;
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
            });
        }
    }


}
</script>
<style lang="scss" scoped>
    #button {
        margin: 15px;
    }
</style>
