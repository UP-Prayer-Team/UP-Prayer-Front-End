<template>
    <v-sheet tile v-bind:class="{ 'blue': value }" v-bind:dark="value">
        <v-checkbox class="day-slot" v-model="internalValue" @change="checkboxUpdated" :label="((Math.floor(index / 2) + 11) % 12 + 1) + ':' + (index % 2 * 30).toString().padStart(2, '0')" hide-details="true" :dense="true">

        </v-checkbox>
    </v-sheet>
</template>

<script>
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