<template>
    <v-sheet tile v-bind:class="{ 'blue': slot.selected }" v-bind:dark="slot.selected">
        <v-checkbox class="day-slot" v-model="slot.selected" @change="checkboxUpdated" :label="timeString" hide-details="true" :dense="true">

        </v-checkbox>
    </v-sheet>
</template>

<script>
import UPUtils from '../services/UPUtils';

export default {
    props: {
        slot: Object
    },
    data() {
        return {
            //internalValue: false
        };
    },
    computed: {
        timeString() {
            return UPUtils.slotTimeString(this.slot.slotIndex);
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