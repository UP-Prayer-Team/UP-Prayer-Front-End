<template>
    <v-calendar v-bind:now="this.today()" v-bind:value="this.today()" color="primary">
        <template v-slot:day="{ present, past, date }">
            <v-sheet height="50%" width="100%" tile>
                {{ cellText(date) }}
            </v-sheet>
        </template>
    </v-calendar>
</template>

<script>
import UPClient  from '../services/UPClient'

export default {
    data() {
        return {
            year: new Date().getUTCFullYear(),
            month: new Date().getUTCMonth(),
            summary: []
        };
    },
    created() {
        UPClient.getMonthSummary(new Date().getUTCFullYear(), new Date().getUTCMonth(), (summary) => {
            this.summary = summary;
        }, (message) => {
            console.log("Something broke! Message: " + message);
        });
    },
    methods: {
        cellText(date) {
            let d = new Date(date);
            if (d.getUTCFullYear() == this.year && d.getUTCMonth() == this.month) {
                if (this.summary.length > 0) {
                    let summary = this.summary[d.getUTCDate() - 1];
                    return summary.count + " people praying";
                }
                else {
                    return "";
                }
            }
            else {
                return "";
            }
        },
        today() {
            return new Date().getUTCFullYear() + '-' + (new Date().getUTCMonth() + 1).toString().padStart(2, '0') + '-' + (new Date().getUTCDate() + 1).toString().padStart(2, '0');
        }
    }
}
</script>
