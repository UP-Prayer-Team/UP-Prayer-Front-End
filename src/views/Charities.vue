<template>
    <div class="charities-wrapper">
        
        <div class="landing-wrapper">
            
            <v-sheet>
                <v-img :max-height="430" position="center" :src="require('..\\assets\\placeholder.jpg')"> 

                    <div class="landing-text">
                        <div> Our partners: </div>
                        <div> Warriors fighting on </div>
                        <div> the front lines </div>
                    </div>
                </v-img>


            </v-sheet>

        </div>

        <v-container>
            <v-row class="hidden-sm-and-down">
                <v-col>
                    <v-card class="mb-5"
                        v-for="(end, i) in endorsements.slice(0, Math.ceil(endorsements.length / 2))" 
                        v-bind:key="i"
                        
                        >
                        <v-card-text>
                            <endorsement v-bind:endorsement="end">

                            </endorsement>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mb-5"
                        v-for="(end, i) in endorsements.slice(Math.ceil(endorsements.length / 2), endorsements.length)" 
                        v-bind:key="i"
                        
                        >
                        <v-card-text>
                            <endorsement v-bind:endorsement="end">

                            </endorsement>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="hidden-md-and-up" justify="center">
                <v-col 
                v-for="(end, i) in endorsements" 
                v-bind:key="i" 
                cols="10" 
                justify="center"
                >
                    <v-card class="mb-5">
                        <v-card-text>
                            <endorsement v-bind:endorsement="end">

                            </endorsement>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                cols="12">
                    <v-sheet :max-height="430" class="donate">
  
                    <div style="padding: 16px;"> You can also donate directly to us! </div>
                    <div> <donate></donate> </div>
                    
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import UPClient from '../services/UPClient';
import Endorsement from '../components/Endorsement.vue';
import Donate from '../components/Donate.vue';

export default {
    components: {
        'endorsement': Endorsement,
        'donate' : Donate
    },
    data() {
        return {
            endorsements: [
                // { homepageURL: "www.courageworldwide.org", name: "Courage Worldwide",  }, 
                // { homepageURL: "www.demandabolition.org", name: "Demand Abolition", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." } ,
                // { homepageURL: "www.ecpatusa.org", name: "ECPAT-USA", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." } , 
                // { homepageURL: "www.exoduscry.com", name: "Exodus Cry", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                // { homepageURL: "www.fairgirls.org", name: "FAIR Girls", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                // { homepageURL: "www.missingkids.org/", name: "National Center for Missing & Exploited Children", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                // { homepageURL: "www.centralusa.salvationarmy.org/metro/fight-for-justice/", name: "Salvation Army", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                // { homepageURL: "www.worldrelief.org", name: "World Relief", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
            ]
        };
    },
    mounted() {
        UPClient.getEndorsementList((currentIndex, endorsements) => {
            this.endorsements = endorsements;
        }, _ => {
            console.log(_);
        });
    }
}
</script>

<style lang="scss" scoped>

.charities-wrapper {
    margin-top: 82px;
} 

.landing-text {
    
    font-family: 'Montserrat', sans-serif;
    color: white !important;    
    text-align: center;
    font-weight: 700;
    font-size: 200%;
    line-height: 1.33em;

    position: absolute;
    left: 50%;
    top: 50%;
    
    transform: translate(-50%,-50%);
    transform: translate3d(-50%,-50%,0);
}

</style>