<template>
    <v-app id="app">
        <!-- <div id="nav">
            <v-app-bar class="hidden-sm-and-down">
                <v-spacer></v-spacer>
                <v-tabs :right="true" v-model="activeTab">
                    <v-tab v-for="(route, i) in getTabRoutes()" v-bind:key="i" @click="tabClicked(route)" v-bind:class="{ 'home-tab': i == 0 }">
                        {{ route.tabText }}
                    </v-tab>
                </v-tabs>
            </v-app-bar>
            <v-app-bar class="hidden-md-and-up">
                <v-toolbar-title @click="toHome">{{ this.$router.options.routes[0].tabText }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text @click.stop="drawer = !drawer">
                    <v-icon>menu</v-icon>
                </v-btn>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" absolute temporary>

                <v-list>
                    <v-list-item v-for="(route, i) in getTabRoutes().slice(1)" v-bind:key="i" link @click="tabClicked(route)">
                        <v-list-item-icon>
                            <v-icon>{{ route.drawerIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title style="text-align: left">{{ route.tabText }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

            </v-navigation-drawer>
        </div> -->
        <v-content>
            <router-view/>
        </v-content>
        <v-footer>
            <v-spacer></v-spacer>
            <img src=".\assets\logo.svg" height="24" width="24">
            <div class="footer">UP Prayer Movement {{ getAppMode() }} &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>

export default {

    data() {
        return {
            activeTab: 0,
            drawer: null,
        }
    },

    methods: {
        // getTabRoutes() {
        //     return this.$router.options.routes.filter(route => route.tabText != undefined);
        // },
        // tabClicked(route) {
        //     if (this.$route.name != route.name) {
        //         this.$router.replace({ name: route.name });
        //     }
        //     this.drawer = false;
        // },
        // updateActiveTab() {
        //     this.activeTab = 0;
        //     // Count the number of tabs before the one we want
        //     for (let i = 0; i < this.$router.options.routes.length; i++) {
        //         // Stop counting if we've reached the route we're at
        //         if (this.$router.options.routes[i].name == this.$router.currentRoute.name) {
        //             break;
        //         }

        //         if (this.$router.options.routes[i].tabText != undefined) {
        //             this.activeTab++;
        //         }
        //     }
        // },
        toHome() {
            this.$router.replace({ name: 'home' });
        },
        getAppMode() {
            return process.env.VUE_APP_MODE;
        }
    },
    // mounted() {
    //     // this.updateActiveTab();
    // },
    // watch: {
    //     $route(_, __) {
    //         this.updateActiveTab();
    //     }
    // }
}
</script>

<style lang="scss">
@import '@/preset/variables.scss';

#app {
    // font-family: 'Montserrat', sans-serif;
    // font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
    /* equal to footer height */
    margin-bottom: -30px; 
}

.v-content {
    padding: 0;
    margin-top: 30px;
}

.v-toolbar__title {
    overflow: visible !important;
    text-overflow: unset !important;
    cursor: pointer;
}

#app:after {
    display: block;
}

.site-footer, #app:after {
    height: 30px; 
}

.theme--light.v-footer {
    background-color: transparent !important;
}

.home-tab {
    margin-left: 0px !important;
    margin-right: auto;
}

html, body {
    height: 100%;
    background-color: white !important;
}

.theme--light.v-application {
    background-color: white !important;
}

.footer {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.2em;
}


v-footer {
    height: 155px;
}
</style>
