<template>
    <div class="about">
        <v-container>
            <h1>This is a charity page plz donate</h1>
            <v-row>
                <v-col v-for="(end, i) in endorsements" v-bind:key="i" cols="6">
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
            endorsements: []
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