<template>
    <div class="home">

        <div class="landing-wrapper">
            <v-sheet
            height="200"
            color="white">

                <div class="landing">
                    <img src="..\assets\logo.svg" height="200" width="200">
                    <h1 style="padding: 16px;"> <strong>UP MOVEMENT </strong></h1>
                </div>


            </v-sheet>
        </div>
        <div class="banner-wrapper">
            <v-card class="banner">            
                <div class="banner-text-wrapper">
                    <v-card-text class="banner-text">
                    What happens when thousands around the
                    world focus their prayer on bringing an end
                    to human trafficking? It ends.
                    </v-card-text>
                    <v-card-actions class="banner-btns">
                        <v-btn
                        @click="toSignUp"
                        depressed
                        outlined="true"
                        color="white"
                        min-width="100"
                        max-width="100"
                        class="pray-btn"> 
                        pray </v-btn>
                    </v-card-actions>
                </div>
            </v-card>
        </div>

        <v-container
        >
            <v-row
            align="center"
            justify="start"
            align-content="start"
            >
                <v-col
                :md="6">
                    <v-card 
                    outlined="true"
                    min-height="325"
                    min-width="325"
                    style="padding-top: 0px; padding-bottom: 0px; float: left;">
                        <v-img contain="true" :src="require('..\\assets\\Flower_Mountain.png')" />
                    </v-card>
                </v-col>

                <v-col
                :md="6">
                    <v-card 
                    outlined="true"
                    min-height="375"
                    min-width="375"
                    style="padding-top: 0px; padding-bottom: 0px; float: left;">
                        <v-img contain="true" :src="require('..\\assets\\Tear.png')"> </v-img>
                    </v-card>
                </v-col>
            </v-row>

            <v-row
            align="start"
            justify="end">
                <v-col
                :md="5"
                :align-self="center"
                class="hidden-sm-and-down"
                >

                    <v-card
                    outlined="true"
                    class="logo-card"> 
                        <v-card-title>
                        </v-card-title>
                        
                        <v-card-text> <img src="..\assets\logo.svg"> 
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col
                 :md="7"
                 >
                    <div class="resource-card-wrapper">
                    <v-card
                    outlined="true" 
                    max-width="700"
                    class="resource">
                        <v-card-title class="resource-title">
                            24hr/day
                        </v-card-title>

                        <v-card-subtitle class="resource-subtitle">
                            Freedom found in prayer
                        </v-card-subtitle>

                        <v-card-text class="resource-text">
                            <div class="resource-text">
                                Join the Unstoppable Prayer Movement (UP Movement). Once a year (or more) commit to pray for 30 minutes and donate $30 to the anti-trafficking organization of your choice. 
                            Why 30 minutes and $30? 
                            There are 8,750 hours per year which is 17,500 30-minute segments. With that many people praying and each donating $30, human trafficking can stop. It’s not about the money. It’s about the collective force that we can create to call on the Glory of the Lord. The UP Movement breaks down this complex and overwhelming issue into 30 minutes and $30. You, along with many others, can be the movement that stops trafficking in our world.

                            </div>
                        
                        </v-card-text>

                        <v-card-actions>
                            <v-btn 
                            depressed
                            height="50px"
                            color="rgba(0, 0, 0, 100)"
                            min-width="150"
                            max-width="150"
                            class="signup-btn"
                            @click="toSignUp">
                                sign up
                            </v-btn>
                            <v-btn 
                            depressed
                            height="50px"
                            outlined=true
                            color="rgba(0, 0, 0, 100)"
                            min-width="150"
                            max-width="150"
                            class="resource-btn">
                                resources
                            </v-btn>
                        </v-card-actions>

                    </v-card>
                </div>
                 </v-col>
            </v-row>

        </v-container>

        <div>
            <v-sheet
            color="#ededee"
            class="footer-sheet">
            </v-sheet>
            <div class="up-footer">
                    <v-img contain="true" :src="require('..\\assets\\up.png')"> </v-img>
            </div>
            <div class="movement-footer"> <v-img contain="true" :src="require('..\\assets\\Movement.png')"> </v-img> </div>
        </div>

    </div>
</template>

<script>
// import UPClient from '../services/UPClient'
// import Endorsement from '../components/Endorsement.vue'
// import MonthSummaryCalendar from '../components/MonthSummaryCalendar.vue'

export default {
    name: 'home',
    components: {
        // 'endorsement': Endorsement,
        // 'month-summary-calendar': MonthSummaryCalendar
    },
    data() {
        return {
            currentEndorsement: null,
        }
    },
    methods: {
        // getEndos() {
        //     UPClient.getEndorsementList((currentIndex, endorsements) => {
        //         console.log("Endorsements: (current index: " + currentIndex + ")\n" + JSON.stringify(endorsements));
        //     }, message => {
        //         console.log("ERROR: Couldn't get endorsement list. Message: " + message);
        //     });
        // },
        // getEndo() {
        //     UPClient.getCurrentEndorsement(endorsement => {
        //         console.log("Current endorsement: \n" + JSON.stringify(endorsement));
        //         this.currentEndorsement = endorsement;
        //     }, message => {
        //         console.log("ERROR: Couldn't get current endorsement. Message: " + message);
        //     });
        // },
        // getMonthRes() {
        //     let today = new Date();
        //     UPClient.getMonthSummary(today.getUTCFullYear(), today.getUTCMonth(), data => {
        //         // Print out each day
        //         for (let i = 0; i < data.length; i++) {
        //             let dayData = data[i];
        //             console.log("Day " + i + ": "  + dayData.count + " reservations");

        //             for (let j = 0; j < dayData.locations.length; j++) {
        //                 let resData = dayData.locations[j];
        //                 console.log("  " + resData.district + ", " + resData.country);
        //             }
        //         }
        //     }, message => {
        //         console.log("ERROR: Couldn't get reservations for this month. Message: " + message);
        //     });
        // },
        toSignUp() {
            this.$router.replace({ name: "sign-up" });
        },
    }
}
</script>
<style lang="scss" scoped>
// @import '../scss/variables.scss';

    #button {
        margin: 15px;
    }

    .home {
        margin-top: 82px;
    }

    .landing-wrapper {
        height: 350px;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .landing {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        letter-spacing: 0.4em; 
        height: 350px;
        font-size: 110%;
    }

    .banner {
        padding-left: 10%;
    }

    .v-card {
        padding-top: 30px;
        padding-bottom: 30px;
        border-radius: 0px !important;
    }

    .v-btn {
        border-radius: 0px !important;
    }

    .theme--light.v-card.v-card--outlined {
        border: white;
    }

    .banner {
        background: linear-gradient(to right, #a300ff, #c70098, #f91600);
    }

    .banner-text {
        font-family: 'Montserrat', sans-serif;
        color: white !important;    
        text-align: left;
        padding-right: 10%;
        font-weight: 700;
        font-size: 200%;
        line-height: 1.33em;
        padding-left: 0px !important;
    }

    .banner-text-wrapper {
        text-align: left;
        padding-left: 10%;
        padding-right: 10%;
        color: white !important; 
    }

    .banner-btns {
        padding-left: 0px !important;
    }

    .logo-card {
        transform: translateY(110px);
    }

    .pray-btn {
        text-transform: lowercase;
    }

    .resoure-card-wrapper {
        float: right;
    }

    .resource-title {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black;
        font-size: 54pt;
        font-weight: 900;
        line-height: 1.5em;
    }

    .resource-subtitle {
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        color: black !important;
        font-size: 40pt;
        font-weight: 700;
        line-height: 1.0em;
    }

    .signup-btn {
        color: white !important; 
        font-family: 'Inter', sans-serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.0em; 
        text-transform: lowercase;
    }

    .resource-btn {
        color: rbga(0, 0, 0, 100);
        font-family: 'Inter', sans-serif;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.0em; 
        text-transform: lowercase;
    }

    .resource-text {
        font-family: 'Inter', sans-serif;
        text-align: left;
        color: black !important;
        font-size: 16pt;
        margin-top: 20px;
        padding-bottom: 35px;
        line-height: 1.4em;
    }

    .assets {
        width: 100%;
        min-width: 500px;
        height: auto;
    }

    .v-card__title {
        word-break: keep-all;
    }

    .v-card__actions {
        padding: 16px;
    }

    .footer-sheet {
        border-radius: 0px !important;
    }

    .up-footer {
        margin-right: 33.33%;
    }
    .movement-footer {
        margin-left: 2.5%;
        margin-right: 17%;
    }
</style>