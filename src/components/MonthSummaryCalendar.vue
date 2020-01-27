<template>
    <v-calendar v-bind:now="this.today()" v-bind:value="this.today()" color="primary">
        <template v-slot:day="{ present, past, date }">
            <v-sheet class="day-summary-background primary" v-bind:style="{ opacity: cellOpacity(date) + '%' }" tile>
                
            </v-sheet>
            <v-sheet class="day-summary-label" tile>
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
        cellData(date) {
            let d = new Date(date);
            if (d.getUTCFullYear() == this.year && d.getUTCMonth() == this.month) {
                if (this.summary.length > 0) {
                    return this.summary[d.getUTCDate() - 1];
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        },
        cellText(date) {
            let data = this.cellData(date);

            if (data == null) {
                return "";
            }
            else {
                return data.count + " people praying";
            }
        },
        cellOpacity(date) {
            let data = this.cellData(date);

            if (data == null) {
                return 0.0;
            }
            else {
                return 100.0 * this.cellData(date).count / 48; // 48 slots per 24-hour day
            }
        },
        today() {
            return new Date().getUTCFullYear() + '-' + (new Date().getUTCMonth() + 1).toString().padStart(2, '0') + '-' + (new Date().getUTCDate() + 1).toString().padStart(2, '0');
        }
    }
}
</script>

<style lang="scss" scoped>
.day-summary-background {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
}

.day-summary-label {
    position: absolute;
    bottom: 0%;
    width: 100%;
    background-color: transparent;
}
</style>