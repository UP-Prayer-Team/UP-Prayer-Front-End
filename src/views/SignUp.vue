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
                    </v-row>

                    <div v-if="!showDayView">
                        <v-system-bar>
                            <v-btn @click="monthViewPrevMonth">
                                &lt;
                            </v-btn>
                            {{ new Date(this.monthViewDate.year, this.monthViewDate.month).toLocaleString('default', { month: 'long' }) }} {{ monthViewDate.year }}

                            <v-btn @click="monthViewNextMonth">
                                &gt;
                            </v-btn>
                        </v-system-bar>

                        <v-calendar @click:day="monthDayClick" v-bind:value="this.getMonthViewDateText()">

                        </v-calendar>
                    </div>
                    
                    <div v-if="showDayView">
                        <v-system-bar>
                            Day And Month And Stuff

                            <v-btn @click="backToMonthView">
                                Back to Month
                            </v-btn>
                        </v-system-bar>

                        <v-calendar-daily>

                        </v-calendar-daily>
                    </div>
                    
                    <br>
                    <v-btn @click="submit" v-bind:disabled="slots.length == 0">Sign Up For {{ slots.length }} Prayer{{ slots.length == 1 ? '' : 's' }}</v-btn>
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
            showDayView: false,
            showForm: true,
            showThanks: false,
            error: null,

            monthViewDate: {
                year: new Date().getUTCFullYear(),
                month: new Date().getUTCMonth()
            },
            dayViewDate: {
                year: new Date().getUTCFullYear(),
                month: new Date().getUTCMonth(),
                day: new Date().getUTCDate()
            },

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
        monthDayClick(_) {
            //console.log("Day clicked!");
            this.showDayView = true;
        },
        backToMonthView() {
            this.showDayView = false;
        },
        monthViewPrevMonth() {
            this.monthViewDate.month -= 1;
            if (this.monthViewDate.month < 0) {
                this.monthViewDate.month += 12;
                this.monthViewDate.year -= 1;
            }
        },
        monthViewNextMonth() {
            this.monthViewDate.month += 1;
            if (this.monthViewDate.month >= 12) {
                this.monthViewDate.month -= 12;
                this.monthViewDate.year += 1;
            }
        },
        getMonthViewDateText() {
            return this.monthViewDate.year.toString() + '-' + (this.monthViewDate.month + 1).toString().padStart(2, '0') + '-01';
        },
        getDayViewDateText() {
            return this.dayViewDate.year.toString() + '-' + (this.dayViewDate.month + 1).toString().padStart(2, '0') + '-' + (this.dayViewDate.day + 1).toString().padStart(2, '0');
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