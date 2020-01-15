<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>UP Prayer Movement</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tabs grow="true">
                <v-tab @click="toHome">Home </v-tab>
                <v-tab @click="toCharites">Charities</v-tab>
                <v-tab @click="toPrayer">Prayer Guide</v-tab>
                <v-tab @click="toAbout">About</v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },

    methods : {
        toAbout() {
            this.$router.replace({ name: "about" });
            },
        toHome() {
            this.$router.replace({ name: "home" });
            },
        toCharites() {
            this.$router.replace({ name: "charities" });
        },
        toPrayer() {
            this.$router.replace({ name: "prayer" });
        }
    }
    
}
</script>

<style scoped>
    .basil {
        background-color: #FFFBE6 !important;
    }
    .basil--text {
        color: #356859 !important;
    }
    .v-toolbar__title {
        width: 350px;
    }
</style>