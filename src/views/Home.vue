<template>
    <div class="home">

        <div class="map">
            <v-carousel 
            :cycle="true"
            :hide-delimiters="true"
            :show-arrows="false">

                <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>

            <v-card class="banner-card">
                <v-card-text class="headline">
                    What happens when thousands around the world focus their prayer on bringing an end to human trafficking?
                    <strong class="display-1 font-weight-bold"> It. Ends. </strong>
                </v-card-text>
                <!-- <v-card-text class="display-1 font-weight-black" style="text-align: right;">
                    It. Ends. 
                </v-card-text> -->
            </v-card>
            
        </div>

        <v-container> 
            <!-- row 1 -->
            <v-row class="hidden-sm-and-down">
                <v-col>
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        :elevation="hover ? 12 : 2"
                        class="mx-auto"
                        @click="toSignUp"
                        >
                                <v-card-title class="font-weight-bold"> Join the Unstoppable Prayer Movement </v-card-title> 
                                <v-card-text class="subtitle-1"> Once a year (or more) commit to pray for 30 minutes and donate $30 to the anti-trafficking organization of your choice. </v-card-text>                 
                        </v-card>
                    </v-hover>

                </v-col>

                <v-col>
                     <v-card>
                        <v-card-title class="font-weight-bold">
                            Q: Why 30 minutes and $30?
                        </v-card-title>     
                        <v-card-text>
                            There are 8,750 hours per year which is 17,500 30-minute segments. With that many people praying and each donating $30, human trafficking can stop. It’s not about the money. It’s about the collective force that we can create to call on the Glory of the Lord. The UP Movement breaks down this complex and overwhelming issue into 30 minutes and $30. You, along with many others, can be the movement that stops trafficking in our world.
                        </v-card-text>           
                    </v-card>
                </v-col>
        
            </v-row>

            <v-row class="hidden-md-and-up" justify="center">
                <v-col>
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                        :elevation="hover ? 12 : 2"
                        class="mx-auto"
                        @click="toSignUp"
                        >
                                <v-card-title class="font-weight-bold"> Join the Unstoppable Prayer Movement </v-card-title> 
                                <v-card-text class="subtitle-1"> Once a year (or more) commit to pray for 30 minutes and donate $30 to the anti-trafficking organization of your choice. </v-card-text>                 
                        </v-card>
                    </v-hover>

                </v-col>

            </v-row>

            <v-row class="hidden-md-and-up" justify="center">

                <v-col>
                     <v-card>
                        <v-card-title class="font-weight-bold">
                            Q: Why 30 minutes and $30?
                        </v-card-title>     
                        <v-card-text>
                            There are 8,750 hours per year which is 17,500 30-minute segments. With that many people praying and each donating $30, human trafficking can stop. It’s not about the money. It’s about the collective force that we can create to call on the Glory of the Lord. The UP Movement breaks down this complex and overwhelming issue into 30 minutes and $30. You, along with many others, can be the movement that stops trafficking in our world.
                        </v-card-text>           
                    </v-card>
                </v-col>
        
            </v-row>

        </v-container>

        <v-sheet height="500">
                        <month-summary-calendar>

                        </month-summary-calendar>
                    </v-sheet>
        
    </div>
</template>

<script>
import UPClient from '../services/UPClient'
// import Endorsement from '../components/Endorsement.vue'
import MonthSummaryCalendar from '../components/MonthSummaryCalendar.vue'

export default {
    name: 'home',
    components: {
        // 'endorsement': Endorsement,
        'month-summary-calendar': MonthSummaryCalendar
    },
    data() {
        return {
            currentEndorsement: null,
            items: [
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
        },
        toSignUp() {
            this.$router.replace({ name: "sign-up" });
        },
    }


}
</script>
<style lang="scss" scoped>
    #button {
        margin: 15px;
    }

    .banner-card {
        margin: 0 auto;
        width: 80%;
        position: relative;
        top: -25px  
    }

    .v-card__title {
        word-break: keep-all;
    }
</style>
