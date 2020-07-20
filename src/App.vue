<template>
    <v-app id="app">
        <div id="nav">
            <v-app-bar 
            elevate-on-scroll
            fixed
            :height="82"
            color="white"
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
                            <v-img :contain="true" :src="require('./assets/logo.svg')" height="50" width="50" />
                        </div>
                    </v-tab>
                </v-tabs>
            </v-app-bar>
            <v-app-bar
            elevate-on-scroll
            fixed
            color="white"
            :height="82"
            class="hidden-md-and-up">
                <v-tab @click="toHome"> <v-img :contain="true" :src="require('./assets/logo.svg')" height="50" width="50" /> </v-tab>
                <v-spacer></v-spacer>
                <v-btn text @click.stop="drawer = !drawer">
                    <v-icon :large="true">menu</v-icon>
                </v-btn>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" fixed temporary>

                <v-list>
                    <v-list-item v-for="(route, i) in getTabRoutes()" v-bind:key="i" link @click="tabClicked(route)">
                        <v-list-item-content>
                            <v-list-item-title class="drawer-text">{{ route.tabText }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-icon color="black" large>{{ route.drawerIcon }}</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>

                 <template v-slot:append>
                    <div class="nav-drawer-footer-logo">
                    <v-img style="margin: auto;" :src="require('./assets/logo.svg')" alt="" max-height="150" max-width="150" />
                    </div>
                </template>
            </v-navigation-drawer>
        </div>
        <v-main style="padding-bottom: 16px !important;">
            <router-view/>
        </v-main>
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
                    <v-img :src="require('./assets/logo.svg')" max-height="70" max-width="70" />
                    <div style="padding: 16px; padding-bottom: 10px; color: white;" class="footer-logo"> UP MOVEMENT </div>
                </v-row>
            </v-col>
        </v-row>
        <v-row> 
            <v-col
            cols="12"
            align-self="center">
                <div class="hidden-xs-only">
                    <v-btn
                    tile
                    :outlined="true"
                    @click="toGive"
                    color="white"
                    class="footer-buttons">
                    Give <v-icon right>chevron_right</v-icon>
                    </v-btn>

                    <v-btn 
                    tile 
                    :outlined="true"
                    color="white"
                    @click="toContactUs"
                    class="footer-buttons"> Contact Us 
                    <v-icon right>chevron_right</v-icon>
                    </v-btn> 

                    <v-btn 
                    tile 
                    :outlined="true"
                    color="white"
                    @click="toSignUp"
                    class="footer-buttons"> Pray 
                    <v-icon right>chevron_right</v-icon>
                    </v-btn> 
                </div>

                <div class="hidden-sm-and-up">

                    <v-row
                    align="center"
                    align-content="center"
                    justify="center">
                        <v-btn
                        tile
                        :outlined="true"
                        @click="toGive"
                        color="white"
                        class="footer-buttons">
                        Give <v-icon right>chevron_right</v-icon>
                        </v-btn>
                    </v-row>

                    <v-row
                    align="center"
                    align-content="center"
                    justify="center">
                        <v-btn 
                        tile 
                        :outlined="true"
                        color="white"
                        @click="toContactUs"
                        class="footer-buttons"> Contact Us 
                        <v-icon right>chevron_right</v-icon>
                        </v-btn> 
                    </v-row>

                    <v-row
                    align="center"
                    align-content="center"
                    justify="center">
                        <v-btn 
                        tile 
                        :outlined="true"
                        color="white"
                        @click="toSignUp"
                        class="footer-buttons"> Pray 
                        <v-icon right>chevron_right</v-icon>
                        </v-btn> 
                    </v-row>
                </div>

                
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
        </v-footer>
    </v-app>
</template>

<script>
import UPClient from "./services/UPClient";

export default {

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
                    to: 'updates',
                    
                },
                {
                    text: 'Resources',
                    disabled: false,
                    to: 'resources',
                    
                },
                {
                    text: 'About',
                    disabled: false,
                    to: 'about',
                },
                {
                    text: 'Pray',
                    disabled: false,
                    to: 'pray',
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
            this.$router.replace({ name: "pray" });
        },
        toContactUs() {
            this.$router.replace({ name: "contact-us" });
        },
        toGive() {
            this.$router.replace({ name: "give" });
        }
    },
    mounted() {
        this.updateActiveTab();
    },
    watch: {
        $route(_, __) {
            this.updateActiveTab();
        }
    }
}
</script>

<style lang="scss">

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
   
}

.v-tab {
    font-family: 'Inter', sans-serif !important;
}

.v-main {
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

.v-tab--active {
    color:  #c70098 !important;
}

html, body {
    height: 100%;
    background-color: white !important;
}

.v-main {
    margin-top: 0px;
}

.drawer-text {
    font-family: 'Montserrat', sans-serif !important;
        text-align: left;
        font-weight: 700;
        line-height: 1.33em;
        font-size: 1.1rem !important;
}

.footer {
    background: linear-gradient(to right, black, black, black) !important;
}

.v-footer--absolute {
    position: relative !important;
}


div.nav-drawer-footer-logo {
    padding-top: 32px;
    padding-bottom: 32px;
}

  /* xxs devices (phones, 479px width and down) */
@media only screen and (max-height: 660px) {
  div.nav-drawer-footer-logo {
    display: none;
  }
}

.footer-buttons {
    margin: 16px
}

.nav-drawer-header {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        line-height: 1.33em;
    align-self: left !important;
}

.footer-logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 2rem;
        line-height: 1.33em;
        word-break: keep-all;
        letter-spacing: .08em;
}

.logo {
    font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 3.5rem;
        line-height: 1.33em;
        color: black;
}

</style>
