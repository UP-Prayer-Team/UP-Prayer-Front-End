<template>
    <div class="signup">

        <v-form v-if="showForm">
        <v-sheet>
            <v-container>
                <v-row>
                    <v-col
                    lg="6">

                        <div class="logo">
                            <img src="..\assets\logo.svg" height="200" width="200">
                            <div style="padding: 16px;"> Join us in prayer bringing heaven to earth </div>
                        </div>

                    </v-col>

                    <v-col
                    lg="6"
                    sm="12">
                            <v-row>
                                <v-col>
                                    <v-alert v-if="error" type="error">{{error}}</v-alert>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-text-field 
                                v-model="email" 
                                :error-messages="emailErrors"
                                label="Email" 
                                required
                                placeholder="jsmith@example.com"
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                                ></v-text-field>
                            </v-row>
                            
                            <v-row>
                                <v-autocomplete
                                v-model="countryCode" 
                                :items="countryCodeItems" 
                                :search-input.sync="countrySearch"
                                :error-messages="countryErrors"
                                required
                                label="Country" 
                                class="mr-4"
                                item-text="displayName"
                                item-value="code"
                                autocomplete="up-country-code"
                                @change="$v.countryCode.$touch()"
                                @blur="$v.countryCode.$touch()"
                                >
                                    <template v-slot:item="{ item }">
                                        {{ item.displayName }}
                                        <span class="text-right flag-adornment">{{ item.flag }}</span>
                                        
                                    </template>

                                    <template v-slot:selection="{ item }">
                                        {{ item.displayName }}
                                        <span class="text-right flag-adornment mr-4">{{ item.flag }}</span>

                                    </template>
                                
                                </v-autocomplete>

                                <v-autocomplete
                                    v-model="districtCode" 
                                    :items="countryDict[countryCode].districts"
                                    :search-input.sync="regionSearch"
                                    :error-messages="districtErrors" 
                                    :hide-no-data="true"
                                    :validate-on-blur="true"
                                    label="Region"
                                    item-text="name"
                                    item-value="shortCode"
                                    autocomplete="up-district-code"
                                    required
                                    @change="$v.districtCode.$touch()"
                                    @blur="$v.districtCode.$touch()"
                                    >
                                    <template v-slot:item="{ item }">
                                        {{ item.name }}
                                    </template>

                                    <template v-slot:selection="{ item }">
                                        {{ item.name }}
                                    </template>
                                </v-autocomplete>
                            
                            </v-row>
                            <v-row>
                                <v-select
                                :items="organizations"
                                v-model="organization"
                                label="Anti-Trafficking Organization"
                                >
                                </v-select>
                            </v-row>
                            <v-row>
                                <p> Don't see your organization of choice?</p><br>
                                <v-spacer></v-spacer>
                                
                                <v-dialog v-model="dialog" persistent max-width="600px">
                                    <template v-slot:activator="{ on }">
                                         <v-btn depressed small color="#c70098" style="color: white !important;" v-on="on">Suggest an organization</v-btn>
                                    </template>

                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">Suggest an organization</span>
                                        </v-card-title>
                                        <v-card-text>
                                        <v-container>
                                            <v-row>

                                            <v-col cols="12">
                                                <v-text-field
                                                v-model="email"
                                                :error-messages="emailErrors" 
                                                label="Email*" 
                                                required
                                                @change="$v.email.$touch()"
                                                @blur="$v.email.$touch()"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                label="Anti-Trafficking Organization*"
                                                v-model="organization"
                                                persistent
                                                required
                                                @change="$v.organization.$touch()"
                                                @blur="$v.organization.$touch()"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-textarea 
                                                :outlined="true"
                                                rows="5"
                                                no-resize="true"
                                                label="Summary"
                                                ></v-textarea>
                                            </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                        </v-card-text>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="suggest">Submit Request</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
    
                            </v-row>
                            <v-row> 
                                <v-checkbox
                                v-model="pledge"
                                label="I pledge to donate $30 to my chosen Anti-Trafficking Organization"
                                color="#a300ff"
                                hide-details
                                ></v-checkbox> 
                            </v-row>
                    </v-col>

                </v-row>

            </v-container>

        </v-sheet>
        <v-container class="v-application">
            <v-col>
                    <div v-if="!showDayView">
                        <v-system-bar 
                        flat
                        :min-height="100"
                        class="calendar-bar">
                            
                            <v-btn :outlined="true" class="mr-4" color="grey darken-2" @click="setToday">
                                Today
                            </v-btn>
                            <v-btn v-bind:disabled="this.prevMonthDisabled" fab icon small @click="monthViewPrevMonth">
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

                            <v-btn color="grey darken-2" style="margin-right: 1rem;" :outlined="true" @click="backToMonthView">
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

                    <v-expansion-panels :accordion="true" :multiple="true">
                        <v-expansion-panel v-for="(month, key) in cartMonths" :key="key">
                            <v-expansion-panel-header>
                                Month: {{ key }}
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Date</th>
                                                <th class="text-right">Time</th>
                                                <th class="text-right" style="width: 3em;"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(slot, i) in month" :key="i">
                                                <td class="text-left">{{ new Date(slot.year, slot.monthIndex).toLocaleString('default', { month: 'long' }) }} {{ slot.dayIndex + 1 }}, {{ slot.year }}</td>
                                                <td class="text-right">{{ slotTimeString(slot.slotIndex) }}</td>
                                                <td class="text-right">
                                                    <v-btn text icon color="grey darken-2" @click="removeSlot(slot)">
                                                        <v-icon>close</v-icon>
                                                    </v-btn>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                                
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <br>

                    <v-row>
                        <v-col>
                            <v-alert v-if="submitStatus == 'ERROR'" type="error"> Form not completed!</v-alert>
                        </v-col>
                    </v-row>

                    <v-btn 
                    @click="submit" 
                    :loading="submitStatus == 'PENDING'" 
                    v-bind:disabled="slots.length == 0"
                    > Sign Up For {{ slots.length }} Prayer Slot{{ slots.length == 1 ? '' : 's' }}
                    <template v-slot:submit>
                        <span>Submitting...</span>
                    </template>
                    </v-btn>
                </v-col>
            </v-container>
        </v-form>

        <div v-if="showThanks">
            <p>
                Thanks for signing up! We have sent you an email that will let you confirm your reservation.

                <br/>

                To get your heart in a place of prayer, we encourage you to read through this message from Lecia.
            </p>
        </div>
        
    </div>
</template>

<script>
import UPClient from '../services/UPClient';
import UPUtils from '../services/UPUtils';
import SignUpDaySlot from '../components/SignUpDaySlot.vue';
import flagCountries from 'countries-list';
import countries from 'country-region-data';
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'


export default {
    mixins: [validationMixin],

    components: {
        "sign-up-day-slot": SignUpDaySlot
    },
    validations: {
        email: { required, email },
        countryCode: { required },
        districtCode: { required },
        slots: { required },
        organization: { required }
    },
    data() {
        return {
            showDayView: false,
            showForm: true,
            showThanks: false,
            dialog: false,
            error: null,
            countrySearch: null,
            regionSearch: null,
            submitStatus: false,
            today: new Date().getUTCFullYear() + '-' + (new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate().toString().padStart(2, '0'),
            //true if the month and year displayed are equal to the current date
            //dissables the month prev botton
            prevMonthDisabled: true,

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

            /* form data required to sign up */
            email: '',
            countryCode: "US", // have to provide a default for the page to render
            districtCode: '',
            organization: '',
            suggestedOrg: '',
            pledge: false,
            slots: [
                // { year: null, monthIndex: null, dayIndex: null, slotIndex: null }
            ],

            organizations: [
                "Courage Worldwide",
                "FAIR Girls",
                "Demand Abolition",
                "National Center for Missing & Exploited Children",
                "ECPAT-USA",
                "Salvation Army",
                "Exodus Cry",
                "World Relief"
            ],

            countryCodeItems: [
                "Not specified",
                "USA"
            ],
            countryDict: {

            }
        };
    },
    computed: {
        cartMonths() {
            let result = {};

            for (let index in this.slots) {
                let slot = this.slots[index];
                let key = slot.year + "-" + slot.monthIndex.toString().padStart(2, "0");

                if (!result[key]) {
                    result[key] = [ slot ];
                }
                else {
                    result[key].push(slot);
                }
            }

            return result;
        },
        emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid email')
        !this.$v.email.required && errors.push('Email is required')
        return errors
      },
      countryErrors () {
        const errors = []
        if (!this.$v.countryCode.$dirty) return errors
        !this.$v.countryCode.required && errors.push('Country Code is required')
        return errors
      },
      districtErrors () {
        const errors = []
        if (!this.$v.districtCode.$dirty) return errors
        !this.$v.districtCode.required && errors.push('Region is required')
        return errors
      },
    },
    methods: {
        addSlot() {
            this.slots.push({ year: 2020, monthIndex: 0, dayIndex: 0, slotIndex: 0 });
        },
        removeSlot(slot) {
            let index = this.slots.indexOf(slot);
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
            var now = new Date();
            if(date.day - 1 < now.getUTCDay() && date.month - 1 <= now.getUTCMonth() && date.year <= now.getFullYear()) {
                alert("This date has already past");
            }
            else {
                this.loadDayView(date.year, date.month - 1, date.day - 1);
                this.showDayView = true;
            }
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
            if (this.viewDate.month ==  new Date().getUTCMonth() && this.viewDate.year ==  new Date().getUTCFullYear()) {
                this.prevMonthDisabled = true;
            }
        },
        monthViewNextMonth() {
            this.viewDate.month += 1;
            if (this.viewDate.month >= 12) {
                this.viewDate.month -= 12;
                this.viewDate.year += 1;
            }
            this.prevMonthDisabled = false;
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
        suggest() {

        },
        submit() {

            this.$v.$touch()

            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                this.submitStatus = 'PENDING'
                let slotsNumeric = this.slots.map((slot => {
                return { year: UPClient.numberOrParse(slot.year), monthIndex: UPClient.numberOrParse(slot.monthIndex), dayIndex: UPClient.numberOrParse(slot.dayIndex), slotIndex: UPClient.numberOrParse(slot.slotIndex) };
                }));

                UPClient.createReservations(this.email, this.countryCode, this.districtCode, slotsNumeric, () => {
                    this.showForm = false;
                    this.showThanks = true;
                    this.$v.$reset()
                    this.email = '';
                    this.slots = [ ];
                }, (message) => {
                    this.error = message;
                    console.log("Error: Failed to create reservations. Message: " + message);
                });


                setTimeout(() => {
                this.submitStatus = 'OK'
                }, 500)
            }

        },
        populateCountryList() {
            this.countryCodeItems = [ ];
            this.countryDict = { };
            for (let country in countries) {
                let data = {
                    displayName: countries[country].countryName,
                    code: countries[country].countryShortCode,
                    flag: flagCountries.countries[countries[country].countryShortCode].emoji,
                    districts: countries[country].regions
                };
                this.countryCodeItems.push(data);
                this.countryDict[data.code] = data;
            }
        },
        getOrganizations() {
            var data = UPClient.getEndorsementList();
            for (let organization in data) {
                this.organizations.push(organization.name);
            }
        }
    },
    mounted() {
        this.getOrganizations();
        this.populateCountryList();
    }
}
</script>

<style lang="scss" scoped>
.signup {
    margin-top: 82px;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        height: 350px;
        font-weight: 700;
        font-size: 200%;
        line-height: 1.33em;
}

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

.flag-adornment {
    position: absolute;
    right: 10px;
}

.row {
    margin-right: 0px !important; 
    margin-left: 0px !important;
}

</style>
