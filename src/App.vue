<template>
    <v-app id="app">
        <div id="nav">
            <v-app-bar 
            elevate-on-scroll
            fixed
            :height="82"
            class="hidden-sm-and-down">
                <v-spacer></v-spacer>
                <v-tabs 
                optional
                :hide-slider="true"
                :right="true" v-model="activeTab">
                    <v-tab v-for="(route, i) in getTabRoutes()" v-bind:key="i" @click="tabClicked(route)" v-bind:class="{ 'home-tab': i == 0 }">
                        <div v-if="route.name != 'home'">
                            {{ route.tabText }}
                        </div>
                        <div v-if="route.name == 'home'">
                            <img src=".\assets\logo.svg" height="50" width="50">
                        </div>
                    </v-tab>
                </v-tabs>
            </v-app-bar>
            <v-app-bar
            elevate-on-scroll
            fixed
            :height="82"
            class="hidden-md-and-up">
                <v-tab @click="toHome"> <img src=".\assets\logo.svg" height="50" width="50"> </v-tab>
                <v-spacer></v-spacer>
                <v-btn text @click.stop="drawer = !drawer">
                    <v-icon :large="true">menu</v-icon>
                </v-btn>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" fixed temporary>

                <v-list>
                    <v-list-item v-for="(route, i) in getTabRoutes().slice(1)" v-bind:key="i" link @click="tabClicked(route)">
                        <v-list-item-icon>
                            <v-icon>{{ route.drawerIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="drawer-text">{{ route.tabText }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                
            </v-navigation-drawer>
        </div>
        <v-content>
            <router-view/>
        </v-content>
        <v-footer
        :absolute="true"
        :padless="true"
        :app="true"
        class="footer"
        >

        <v-container>
        <v-row
        >
            <v-col
            cols="12">
                <v-row
                justify="center"
                align="end">
                    
                    <img src=".\assets\logo.svg" height="70" width="70">
                    <div style="padding: 16px; color: white;" class="logo"> UP Movement </div>
                   
                </v-row>
            </v-col>
        </v-row>
        <v-row> 
            <v-col>
                <v-row
                justify="center"
                align="center"
                class="desktop-footer">
                    
                    <!-- <v-col><img src=".\assets\logo.svg" height="75" width="75"></v-col> -->
                    <v-col lg="3"></v-col>
                    <v-col>
                        <donate color="white"></donate>
                    </v-col>

                    <v-col> 
                        <v-btn 
                        tile 
                        :outlined="true"
                        color="white"> Contact Us 
                        <v-icon right>chevron_right</v-icon></v-btn> 
                    </v-col>

                    <v-col> 
                        <v-btn 
                        tile 
                        :outlined="true"
                        color="white"
                        @click="toSignUp"> Pray 
                        <v-icon right>chevron_right</v-icon></v-btn> 
                    </v-col>
                    <v-col lg="3"></v-col>
                </v-row>

                    <v-row justify="center"
                align="center"
                class="mobile-footer"> <donate color="white"></donate> </v-row>
                    <v-row justify="center"
                align="center"
                class="mobile-footer"> <v-btn 
                    tile 
                    :outlined="true"
                    color="white"> Contact Us 
                    <v-icon right>chevron_right</v-icon></v-btn> </v-row>
                    <v-row justify="center"
                align="center"
                class="mobile-footer"><v-btn 
                    tile 
                    :outlined="true"
                    color="white"> Pray 
                    <v-icon right>chevron_right</v-icon></v-btn> </v-row>
                    <v-spacer></v-spacer>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            >
                <v-row
                justify="center"
                align="center">
            
                <v-breadcrumbs
                :dark="true" 
                :items="siteMap">
                    <template v-slot:siteMap="{ item }">
                        <v-breadcrumbs-item
                            :to="item.to"
                            :disabled="item.disabled"
                            :exact-active-class="true"
                        >
                            {{ item.text }}
                        </v-breadcrumbs-item>
                    </template>
                </v-breadcrumbs>
                
                </v-row>
            </v-col>
        </v-row>
    </v-container>
            <!-- <v-spacer></v-spacer>
            <img src=".\assets\logo.svg" height="24" width="24">
            <div class="footer">UP Prayer Movement {{ getAppMode() }} &copy; {{ new Date().getFullYear() }}</div> -->
        </v-footer>
    </v-app>
</template>

<script>
import UPClient from "./services/UPClient";
import Donate from './components/Donate.vue';

export default {

    components: {
        'donate' : Donate
    },

    data() {
        return {
            activeTab: 0,
            drawer: null,
            latestBlogID: "",
            siteMap: [
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Charities',
                    disabled: false,
                    to: 'charities',
                },
                {
                    text: 'Updates',
                    disabled: false,
                    to: 'blog',
                    
                },
                {
                    text: 'Resources',
                    disabled: false,
                    to: 'prayer',
                    
                },
                {
                    text: 'About',
                    disabled: false,
                    to: 'about',
                },
                {
                    text: 'Pray',
                    disabled: false,
                    to: 'signup',
                }
            ]
        }
    },

    methods: {
        getTabRoutes() {
            return this.$router.options.routes.filter(route => route.tabText != undefined);
        },
        tabClicked(route) {
            if (this.$route.name != route.name) {
                // The blog tab links to the latest blog
                if (route.name == "blog") {
                    if (this.latestBlogID) {
                        this.$router.push({ name: "blog", params: { id: this.latestBlogID } });
                    }
                }
                else {
                    this.$router.push({ name: route.name });
                }

            }
            this.drawer = false;
        },
        updateActiveTab() {
            this.activeTab = 0;
            // Count the number of tabs before the one we want
            for (let i = 0; i < this.$router.options.routes.length; i++) {
                // Stop counting if we've reached the route we're at
                if (this.$router.options.routes[i].name == this.$router.currentRoute.name) {
                    break;
                }

                if (this.$router.options.routes[i].tabText != undefined) {
                    this.activeTab++;
                }
            }
        },
        toHome() {
            this.$router.push({ name: 'home' });
        },
        getAppMode() {
            return process.env.VUE_APP_MODE;
        },
        toSignUp() {
            this.$router.replace({ name: "sign-up" });
        },
    },
    mounted() {
        this.updateActiveTab();
        UPClient.listPosts(posts => {
            this.latestBlogID = posts.length > 0 ? posts[0].id : null;
        }, message => {
            console.log("Couldn't get latest blog post: " + message);
        });
    },
    watch: {
        $route(_, __) {
            this.updateActiveTab();
        }
    }
}
</script>

<style lang="scss">
@import '@/preset/variables.scss';

.v-application a {
    color: white !important;
}

.theme--light.v-application {
    background-color: white !important;
}

.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled {
    color: rgba(255, 255, 255, 0.5) !important;
}

#app {
    // font-family: 'Montserrat', sans-serif;
    // font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
   
}

.v-tab {
    font-family: 'Inter', sans-serif !important;
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

.v-toolbar__content {
    padding-left: 0px !important;
}

#app:after {
    display: block;
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

.v-content {
    margin-top: 0px;
}

.drawer-text {
    font-family: 'Inter', sans-serif !important;
    text-align: left;
}

.footer {
    background: linear-gradient(to right, black, black, black) !important;
}

div.mobile-footer {
    margin: 16px !important;
  }

/* xxs devices (phones, 430px width and down) */
@media only screen and (max-width: 479px) {
  div.desktop-footer {
    display: none;
  }
}

/* xxs devices (phones, 430px width and up) */
@media only screen and (min-width: 480px) {
  div.mobile-footer {
    display: none;
    margin: 16px !important;
  }
}

</style>
