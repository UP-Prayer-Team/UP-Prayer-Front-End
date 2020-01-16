<template>
    <v-app id="app">
        <div id="nav">
            <nav-bar></nav-bar>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
        </div>
            <router-view/>
        <v-footer>
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
import Nav from './components/Nav.vue';

export default {

    components: {
        'nav-bar': Nav
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
