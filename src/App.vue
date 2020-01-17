<template>
    <v-app id="app">
        <div id="nav">
            <v-app-bar>
            <v-tabs :grow="true">
                <v-tab @click="toHome">UP Prayer Movement</v-tab>
                <v-tab @click="toCharites">Charities</v-tab>
                <v-tab @click="toPrayer">Prayer Guide</v-tab>
                <v-tab @click="toAbout">About</v-tab>
                <v-tab @click="toSignUp">Sign Up</v-tab>
            </v-tabs>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <!-- <v-spacer></v-spacer> -->
        </v-app-bar>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
            <v-navigation-drawer></v-navigation-drawer>
        </div>
            <v-content>
                <router-view/>
            </v-content>
        <v-footer>
            <v-spacer></v-spacer>
            <div>UP Prayer Movement &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>

export default {

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
        },
        }
    }
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
    /* equal to footer height */
    margin-bottom: -30px; 
}

#app:after {
    display: block;
}

.site-footer, #app:after {
    height: 30px; 
}

html, body {
    height: 100%;
}

v-footer {
    height: 155px;
}
</style>
