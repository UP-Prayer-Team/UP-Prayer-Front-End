<template>
    <div class="about">

        <v-container class="v-application">
            <v-col>
                <v-form v-if="showForm">
                    <v-row>
                        <v-col>
                            <v-alert v-if="error" type="error">{{error}}</v-alert>
                        </v-col>
                        
                    </v-row>

                    <v-row>
                        <v-text-field 
                        v-model="email" 
                        label="Email" 
                        outlined
                        required
                        ></v-text-field>
                    </v-row>
                    
                    <v-row justify="space-between">
                        <v-select 
                        v-model="countryCode" 
                        :items="countryCodeItems" 
                        label="Country code" 
                        class="mr-4"
                        outlined
                        
                        >
                            <template v-slot:item="{ item }">
                                {{item.displayName }}
                                {{ item.flag }}
                                
                            </template>
                        
                        </v-select>

                        <v-select 
                        v-model="districtCode" 
                        :items="districtCodeItems" 
                        label="District code"
                        outlined
                        ></v-select>
                    </v-row>
                    
                    <v-row>
                        <h3>Slots</h3>
                    </v-row>

                    <div v-if="!showDayView">
                        <v-system-bar 
                        flat
                        :min-height="100"
                        class="calendar-bar">
                            
                            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                                Today
                            </v-btn>
                            <v-btn fab icon small @click="monthViewPrevMonth">
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-toolbar-title class="ml-0">{{ new Date(this.viewDate.year, this.viewDate.month).toLocaleString('default', { month: 'long' }) }} {{ viewDate.year }}</v-toolbar-title>
                            <v-btn fab icon small @click="monthViewNextMonth">
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-system-bar>

                        <v-calendar @click:day="monthDayClick" @click:date="monthDayClick" v-bind:value="this.getCalendarDateText()" v-bind:now="today" color="primary">
                        </v-calendar>
                    </div>

                    <div v-if="showDayView">
                        <v-system-bar 
                        flat
                        :min-height="100"
                        class="calendar-bar">

                            <v-btn color="grey darken-2" style="margin-right: 1rem;" outlined @click="backToMonthView">
                                Back to Month
                            </v-btn>
                            <v-btn fab icon small @click="dayViewPrevDay">
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-toolbar-title class="ml-0">{{ new Date(this.viewDate.year, this.viewDate.month).toLocaleString('default', { month: 'long' }) }} {{ viewDate.day + 1 }}, {{ viewDate.year }}</v-toolbar-title>
                            <v-btn fab icon small @click="dayViewNextDay">
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>

                        </v-system-bar>

                        <v-calendar type="day" v-bind:value="this.getCalendarDateText()" color="primary">
                            <template v-slot:interval="{ hour }">
                                <sign-up-day-slot v-bind:slotInfo="dayViewSlotStates[hour * 2]" @input="daySlotUpdated(hour * 2)">

                                </sign-up-day-slot>

                                <sign-up-day-slot v-bind:slotInfo="dayViewSlotStates[hour * 2 + 1]" @input="daySlotUpdated(hour * 2 + 1)">

                                </sign-up-day-slot>
                            </template>
                        </v-calendar>
                    </div>
                    <br>

                    <v-list>
                        <v-list-item v-for="(slot, i) in slots" :key="i">
                            <v-list-item-content>
                                {{ new Date(slot.year, slot.monthIndex).toLocaleString('default', { month: 'long' }) }} {{ slot.dayIndex + 1 }}, {{ slot.year }} at {{ slotTimeString(slot.slotIndex) }}
                            </v-list-item-content>
                                <v-btn text icon color="grey darken-2" @click="removeSlot(i)">
                                    <v-icon>close</v-icon>
                                </v-btn>
                        </v-list-item>
                    </v-list>
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
import UPUtils from '../services/UPUtils';
import SignUpDaySlot from '../components/SignUpDaySlot.vue';
import { countries } from 'countries-list';


export default {
    components: {
        "sign-up-day-slot": SignUpDaySlot
    },
    data() {
        return {
            showDayView: false,
            showForm: true,
            showThanks: false,
            error: null,
            today: new Date().getUTCFullYear() + '-' + (new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate().toString().padStart(2, '0'),

            viewDate: {
                year: new Date().getUTCFullYear(),
                month: new Date().getUTCMonth(),
                day: new Date().getUTCDate()
            },
            dayViewSlotStates: function() {
                let result = [];
                for (let i = 0; i < 48; i++) {
                    result.push({ slotIndex: i, selected: false });
                }
                return result;
            }(),

            email: "test@example.com",
            countryCode: "USA",
            districtCode: "OR",
            slots: [
                // { year: null, monthIndex: null, dayIndex: null, slotIndex: null }
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
            let slot = this.slots[index];

            this.slots.splice(index, 1);

            // Check whether the slot list needs to be regenerated
            if (slot.year == this.viewDate.year
                && slot.monthIndex == this.viewDate.month
                && slot.dayIndex == this.viewDate.day) {
                this.loadDayView(this.viewDate.year, this.viewDate.month, this.viewDate.day);
            }
        },
        loadDayView(year, month, day) {
            this.viewDate.year = year;
            this.viewDate.month = month;
            this.viewDate.day = day;

            for (let i = 0; i < this.dayViewSlotStates.length; i++) {
                this.dayViewSlotStates[i].selected = false;
            }

            for (let i = 0; i < this.slots.length; i++) {
                let slot = this.slots[i];

                if (slot.year == year && slot.monthIndex == month && slot.dayIndex == day) {
                    this.dayViewSlotStates[slot.slotIndex].selected = true;
                }
            }
        },
        slotTimeString: UPUtils.slotTimeString,
        monthDayClick(date) {
            this.loadDayView(date.year, date.month - 1, date.day - 1);
            this.showDayView = true;
        },
        backToMonthView() {
            this.showDayView = false;
        },
        monthViewPrevMonth() {
            this.viewDate.month -= 1;
            if (this.viewDate.month < 0) {
                this.viewDate.month += 12;
                this.viewDate.year -= 1;
            }
        },
        monthViewNextMonth() {
            this.viewDate.month += 1;
            if (this.viewDate.month >= 12) {
                this.viewDate.month -= 12;
                this.viewDate.year += 1;
            }
        },
        dayViewNextDay() {
            let date = new Date(this.viewDate.year, this.viewDate.month, this.viewDate.day + 1 + 1);
            this.loadDayView(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() - 1);
        },
        dayViewPrevDay() {
            let date = new Date(this.viewDate.year, this.viewDate.month, this.viewDate.day + 1 - 1);
            this.loadDayView(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() - 1);
        },
        getCalendarDateText() {
            return this.viewDate.year.toString() + '-' + (this.viewDate.month + 1).toString().padStart(2, '0') + '-' + (this.viewDate.day + 1).toString().padStart(2, '0');
        },
        setToday() {
            this.viewDate.month = new Date().getUTCMonth();
            this.viewDate.year = new Date().getUTCFullYear();
        },
        daySlotClick(index) {
            this.dayViewSlotStates[index].selected = !this.dayViewSlotStates[index].selected;
            this.$forceUpdate();
        },
        daySlotUpdated(index) {
            // Remove the slot from the list to reserve
            this.slots = this.slots.filter(slot => {
                return slot.year != this.viewDate.year
                    || slot.monthIndex != this.viewDate.month
                    || slot.dayIndex != this.viewDate.day
                    || slot.slotIndex != index;
            });

            if (this.dayViewSlotStates[index].selected) {
                // Ensure the slot is in the list to reserve
                this.slots.push({ year: this.viewDate.year, monthIndex: this.viewDate.month, dayIndex: this.viewDate.day, slotIndex: index });
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
        },
        populateCountryList() {
            this.countryCodeItems.clear;
            for (let country in countries) {
                this.countryCodeItems.push({ 
                    displayName: countries[country].name,
                    code: country,
                    flag: countries[country].emoji
                 });
            }
        }
    },
    mounted() {
        this.populateCountryList();

    }
}
</script>

<style lang="scss" scoped>
.calendar-bar {
    height: 70px !important;
    background-color: rgba(0,0,0,0) !important;
}

.v-toolbar__title {
    margin-left: 1rem;
}

.theme--light.v-calendar-daily {
    border: #e0e0e0 1px solid;
}

</style>