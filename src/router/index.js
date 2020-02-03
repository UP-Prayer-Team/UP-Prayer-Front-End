import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Prayer from '../views/Prayer.vue'
import Charities from '../views/Charities.vue'
import SignUp from '../views/SignUp.vue'
import Confirm from '../views/Confirm.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        tabText: 'UP Prayer Movement',
        drawerIcon: 'home'
    },
    {
        path: '/charities',
        name: 'charities',
        component: Charities,
        tabText: 'Charities',
        drawerIcon: 'arrow_upward'
    },
    {
        path: '/prayer',
        name: 'prayer',
        component: Prayer,
        tabText: 'Prayer Guide',
        drawerIcon: 'menu_book'
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        tabText: 'About',
        drawerIcon: 'help'
    },
    {
        path: '/signup',
        name: 'sign-up',
        component: SignUp,
        tabText: 'Sign Up',
        drawerIcon: 'calendar_today'
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: Confirm
    }
]

const router = new VueRouter({
    routes
})

export default router
