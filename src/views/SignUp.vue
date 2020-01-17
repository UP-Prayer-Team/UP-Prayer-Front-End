<template>
    <div class="about">
        
        <v-container class="v-application">
            <v-col>
                <h1>This is a signup page</h1>
                <v-form v-if="showForm">
                    <v-row>
                        <v-col>
                            <v-alert v-if="error" type="error">{{error}}</v-alert>
                        </v-col>
                        
                    </v-row>

                    <v-row>
                        <v-text-field v-model="email" label="Email" required>
                        </v-text-field>
                    </v-row>
                    
                    <v-row justify="space-between">
                        <v-select v-model="countryCode" :items="countryCodeItems" label="Country code" class="mr-4">
                        </v-select>
                        <v-select v-model="districtCode" :items="districtCodeItems" label="District code">
                        </v-select>
                    </v-row>
                    
                    <v-row>
                        <h3>Slots</h3>
                        <v-btn @click="addSlot" class="ml-4">Add Slot</v-btn>
                    </v-row>
                    

                    <v-row v-for="(slot, i) in slots" v-bind:key="i">
                        <v-text-field v-model="slot.year" label="Year" type="number" class="mr-4">
                        </v-text-field>
                        <v-text-field v-model="slot.monthIndex" label="Month Index" type="number" class="mr-4">
                        </v-text-field>
                        <v-text-field v-model="slot.dayIndex" label="Day Index" type="number" class="mr-4">
                        </v-text-field>
                        <v-text-field v-model="slot.slotIndex" label="Slot Index" type="number" class="mr-4">
                        </v-text-field>
                        <v-btn @click="removeSlot(i)">Remove</v-btn>
                    </v-row>
                    
                    <v-btn @click="submit">Submit</v-btn>
                </v-form>
                <div v-if="showThanks">
                    <p>
                        Thanks for signing up! We have sent you an email that will let you confirm your reservation.

                        <br/>

                        To get your heart in a place of prayer, we encourage you to read through this message from Lecia.
                    </p>
                </div>
            </v-col>
            
        </v-container>
        
    </div>
</template>

<script>
import UPClient from '../services/UPClient';

export default {
    data() {
        return {
            showForm: true,
            showThanks: false,
            error: null,

            email: "test@example.com",
            countryCode: "USA",
            districtCode: "OR",
            slots: [
                { year: new Date().getUTCFullYear(), monthIndex: new Date().getUTCMonth(), dayIndex: new Date().getUTCDate(), slotIndex: 0 }
            ],

            countryCodeItems: [
                "Not specified",
                "USA"
            ],
            districtCodeItems: [
                "Not specified",
                "WA",
                "OR"
            ]
        };
    },
    methods: {
        addSlot() {
            this.slots.push({ year: 2020, monthIndex: 0, dayIndex: 0, slotIndex: 0 });
        },
        removeSlot(index) {
            this.slots.splice(index, 1);
        },
        submit() {
            // TODO: Disable form

            let slotsNumeric = this.slots.map((slot => {
                return { year: UPClient.numberOrParse(slot.year), monthIndex: UPClient.numberOrParse(slot.monthIndex), dayIndex: UPClient.numberOrParse(slot.dayIndex), slotIndex: UPClient.numberOrParse(slot.slotIndex) };
            }));

            UPClient.createReservations(this.email, this.countryCode, this.districtCode, slotsNumeric, () => {
                this.showForm = false;
                this.showThanks = true;
            }, (message) => {
                this.error = message;
                // TODO: Enable form

                console.log("Error: Failed to create reservations. Message: " + message);
            });
        }
    }
}
</script>