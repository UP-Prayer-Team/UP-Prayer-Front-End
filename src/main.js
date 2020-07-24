import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import AOS from 'aos'; // animate on scroll
import 'aos/dist/aos.css';

Vue.config.productionTip = false

AOS.init();

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
