<template>
    <v-sheet tile v-bind:class="{ 'blue': value }" v-bind:dark="value">
        <v-checkbox class="day-slot" v-model="internalValue" @change="checkboxUpdated" :label="timeString" hide-details="true" :dense="true">

        </v-checkbox>
    </v-sheet>
</template>

<script>
import UPUtils from '../services/UPUtils';

export default {
    props: {
        index: Number,
        value: Boolean
    },
    data() {
        return {
            internalValue: false
        };
    },
    computed: {
        timeString() {
            return UPUtils.slotTimeString(this.index);
        }
    },
    methods: {
        checkboxUpdated() {
            this.$emit("input", this.internalValue);
        }
    }
}
</script>

<style scoped>
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