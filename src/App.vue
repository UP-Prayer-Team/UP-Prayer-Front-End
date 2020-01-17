<template>
    <v-app id="app">
        <div id="nav">
            <v-app-bar
            
            class="hidden-sm-and-down">
            <v-toolbar-title @click="toHome">UP Prayer Movement</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tabs :right="true">
                <v-tab @click="toCharites">Charities</v-tab>
                <v-tab @click="toPrayer">Prayer Guide</v-tab>
                <v-tab @click="toAbout">About</v-tab>
                <v-tab @click="toSignUp">Sign Up</v-tab>
            </v-tabs>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <!-- <v-spacer></v-spacer> -->
        </v-app-bar>
        <v-app-bar class="hidden-md-and-up">
        <v-toolbar-title @click="toHome">UP Prayer Movement</v-toolbar-title>
        <v-spacer></v-spacer>
              <v-btn text @click.stop="drawer = !drawer">
                    <v-icon>menu</v-icon>
              </v-btn>
        </v-app-bar>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
            <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >

        <v-list>

        <v-list-item
          link
          @click="toHome"
        >
          <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="text-align: left">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="toCharites"
        >

        <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="text-align: left">Charites</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="toPrayer"
        >

        <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="text-align: left">Prayer Guide</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="toAbout"
        >

        <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="text-align: left">About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="toSignUp"
        >

        <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="text-align: left">Sign Up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

            </v-navigation-drawer>
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

    data() {
        return {
            drawer: null,
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'Charities', icon: 'dashboard' },
                { title: 'Prayer Guide', icon: 'dashboard' },
                { title: 'About', icon: 'dashboard' },
                { title: 'Sign Up', icon: 'question_answer' },
            ],
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

.v-content {
    padding: 0;
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

html, body {
    height: 100%;
}

v-footer {
    height: 155px;
}
</style>
