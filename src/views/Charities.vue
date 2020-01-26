<template>
    <div class="about">
        <v-container>
            <!-- <h1>This is a charity page plz donate</h1> -->
            <v-row class="hidden-sm-and-down">
                <v-col 
                v-for="(end, i) in endorsements" 
                v-bind:key="i" 
                cols="6" 
                >
                    <v-card class="mb-5">
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
        </v-container>
        
    </div>
</template>

<script>
import UPClient from '../services/UPClient'
import Endorsement from '../components/Endorsement.vue';

export default {
    components: {
        'endorsement': Endorsement
    },
    data() {
        return {
            endorsements: [

                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },
                { homepageURL: "www.example.com", donateURL: "www.example.com/donate", summary: "This is an example charity, all donations will go to helping further examples in the future. Together we can pave a future with better examples." },


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