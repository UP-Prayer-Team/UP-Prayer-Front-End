<template>
    <div>
        <v-app-bar>
            <v-tabs grow=true>
                <v-tab @click="toHome">UP Prayer Movement</v-tab>
                <v-tab @click="toCharites">Charities</v-tab>
                <v-tab @click="toPrayer">Prayer Guide</v-tab>
                <v-tab @click="toAbout">About</v-tab>
                <v-tab @click="toSignUp">Sign Up</v-tab>
            </v-tabs>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <!-- <v-spacer></v-spacer> -->
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
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
        },
        toSignUp() {
            this.$router.replace({ name: "sign-up" });
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
    /* .v-toolbar__title {
        width: 350px;
    } */
</style>