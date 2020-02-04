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
                        <v-system-bar 
                        flat color="white"
                        :min-height="100"
                        class="calander-bar">
                            
                            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                                Today
                            </v-btn>
                            <v-btn fab icon small @click="monthViewPrevMonth">
                                &lt;
                            </v-btn>
                            <v-btn fab icon small @click="monthViewNextMonth">
                                &gt;
                            </v-btn>
                            <v-toolbar-title>{{ new Date(this.monthViewDate.year, this.monthViewDate.month).toLocaleString('default', { month: 'long' }) }} {{ monthViewDate.year }}</v-toolbar-title>
                            <v-spacer></v-spacer>

                        </v-system-bar>

                        <v-calendar @click:day="monthDayClick" @click:date="monthDayClick" v-bind:value="this.getMonthViewDateText()">

                        </v-calendar>
                    </div>

                    <div v-if="showDayView">
                        <v-system-bar 
                        flat color="white"
                        :min-height="100"
                        class="calander-bar"> 

                            <div>
                                <v-btn color="grey darken-2" outlined @click="backToMonthView">
                                    Back to Month
                                </v-btn>
                            </div>
                            <v-toolbar-title>{{ new Date(this.monthViewDate.year, this.dayViewDate.month).toLocaleString('default', { month: 'long' }) }} {{ dayViewDate.day }}, {{ dayViewDate.year }}</v-toolbar-title>
                            <v-spacer></v-spacer>

                        </v-system-bar>

                        <v-calendar type="day" v-bind:value="this.getDayViewDateText()">
                            <template v-slot:interval="{ hour }">
                                <v-sheet tile v-bind:class="{ 'blue': dayViewSlotStates[hour * 2] }" v-bind:dark="dayViewSlotStates[hour * 2]">
                                    <v-checkbox class="day-slot" v-model="dayViewSlotStates[hour * 2]" @change="daySlotUpdated(hour * 2)" :label="hour + ' o\' clock'" hide-details="true" :dense="true">

                                    </v-checkbox>
                                </v-sheet>

                                <v-sheet tile v-bind:class="{ 'blue': dayViewSlotStates[hour * 2 + 1] }" v-bind:dark="dayViewSlotStates[hour * 2 + 1]">
                                    <v-checkbox class="day-slot" v-model="dayViewSlotStates[hour * 2 + 1]" @change="daySlotUpdated(hour * 2 + 1)" :label="hour + ' o\' clock'" hide-details="true" :dense="true">

                                    </v-checkbox>
                                </v-sheet>
                                
                            </template>
                        </v-calendar>
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
            dayViewSlotStates: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ],

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
        loadDayView(year, month, day) {
            this.dayViewDate.year = year;
            this.dayViewDate.month = month;
            this.dayViewDate.day = day;

            for (let i = 0; i < this.dayViewSlotStates.length; i++) {
                this.dayViewSlotStates[i] = false;
            }

            for (let i = 0; i < this.slots.length; i++) {
                let slot = this.slots[i];

                if (slot.year == year && slot.monthIndex == month && slot.dayIndex == day) {
                    this.dayViewSlotStates[slot.slotIndex] = true;
                }
            }
        },
        monthDayClick(date) {
            this.loadDayView(this.monthViewDate.year, this.monthViewDate.month, date.day - 1);
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
        setToday() {
            this.monthViewDate.month = new Date().getUTCMonth();
            this.monthViewDate.year = new Date().getUTCFullYear();
        },
        daySlotClick(index) {
            this.dayViewSlotStates[index] = !this.dayViewSlotStates[index];
            this.$forceUpdate();
        },
        daySlotUpdated(index) {
            // Remove the slot from the list to reserve
            this.slots = this.slots.filter(slot => {
                return slot.year != this.dayViewDate.year
                    || slot.monthIndex != this.dayViewDate.month
                    || slot.dayIndex != this.dayViewDate.day
                    || slot.slotIndex != index;
            });

            if (this.dayViewSlotStates[index]) {
                // Ensure the slot is in the list to reserve
                this.slots.push({ year: this.dayViewDate.year, monthIndex: this.dayViewDate.month, dayIndex: this.dayViewDate.day, slotIndex: index });
            }
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

<style lang="scss" scoped>
.calander-bar {
    height: 70px !important;
}

.v-toolbar__title {
    margin-left: 1rem;
}

.day-slot {
    height: 50%;
    margin: 0px;
    padding: 0px;
    cursor: pointer;
}

.day-slot .active {
    background-color: red;
}
</style>