<template>
    <div class="charities-wrapper">
        
        <div class="landing-wrapper">
            
            <v-sheet>
                <v-img :max-height="430" position="center" :src="bannerSrc"> 

                    <div class="landing-text">
                        <div> Warriors fighting on </div>
                        <div> the front lines </div>
                    </div>
                </v-img>


            </v-sheet>

        </div>

        <v-container>
            <v-row>
                <v-col
                cols="12">
                    <div class="title">
                        <div class="page-header" style="text-align: left">
                            Anti-Trafficking Organizations
                        </div>
                        <div class="subtitle-text" style="text-align: left"> 
                            <div> We aim to partner with organizations that are the hands and feet in the battle to end human trafficking,
                            supporting them financially and covering them in prayer.
                            Below are some of the organizations that our prayer warriors have financially supported. </div>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <v-row class="hidden-sm-and-down">
                <v-col>
                    <v-hover
                    v-slot:default="{ hover }"
                    v-for="(end, i) in endorsements.slice(0, Math.ceil(endorsements.length / 2))" 
                    v-bind:key="i">
                        <v-card class="mb-5"
                        :elevation="hover ? 12 : 2"
                        :href="'http://' + end.homepageURL" 
                        target="_blank"
                        v-if="end.name != 'Other'">
                            <v-card-text>
                                <endorsement v-bind:endorsement="end">

                                </endorsement>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col>
                    <v-hover
                    v-slot:default="{ hover }"
                    v-for="(end, i) in endorsements.slice(Math.ceil(endorsements.length / 2), endorsements.length)" 
                    v-bind:key="i">
                        <v-card class="mb-5"
                        :elevation="hover ? 12 : 2"
                        :href="'http://' + end.homepageURL" 
                        target="_blank"
                        v-if="end.name != 'Other'">
                            <v-card-text>
                                <endorsement v-bind:endorsement="end">

                                </endorsement>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

            <v-row class="hidden-md-and-up" justify="center">
                <v-col 
                v-for="(end, i) in endorsements" 
                v-bind:key="i" 
                cols="10" 
                justify="center"
                >
                    <v-card class="mb-5"
                    v-if="end.name != 'Other'">
                        <v-card-text>
                            <endorsement v-bind:endorsement="end">

                            </endorsement>
                        </v-card-text>
                    </v-card>
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

            ],
            bannerSrc: require('../assets/placeholder.jpg')
        };
    },
    mounted() {
        UPClient.getEndorsementList((currentIndex, endorsements) => {
            this.endorsements = endorsements;
        }, _ => {
            console.log(_);
        });
 
        window.scrollTo(0, 0);

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

.title {
    padding-top: 24px;
}

.page-header {
    font-family: 'Montserrat', sans-serif;   
    text-align: center;
    font-weight: 700;
    font-size: 2em;
    line-height: 2em;
    color: black !important;
}

.subtitle-text {
    font-family: 'Inter', sans-serif;
    padding-top: 16px;
    padding-bottom: 16px;
    line-height: 1.4em;
    color: black !important;
}

</style>