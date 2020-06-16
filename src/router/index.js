import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Prayer from '../views/Prayer.vue'
import Charities from '../views/Charities.vue'
import SignUp from '../views/SignUp.vue'
import Confirm from '../views/Confirm.vue'
import Blog from '../views/Blog.vue'
import Thanks from '../views/Thanks.vue'
import ThankYou from '../views/ThankYou.vue'
import Give from '../views/Give.vue'
import Register from '../views/Register'

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
        tabText: 'Resources',
        drawerIcon: 'menu_book'
    },
    {
        path: '/updates/:id', 
        name: 'blog',
        component: Blog,
        tabText: 'Updates',
        drawerIcon: 'mdi-newspaper-variant-multiple'
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
        component: Register,
        tabText: 'Pray',
        drawerIcon: 'calendar_today'
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: Confirm
    },
    {
        path: '/thankyou',
        name: 'thank-you',
        component: ThankYou,
    },
    {
        path: '/thanks',
        name: 'thanks',
        component: Thanks,
    },
    {
        path: '/give',
        name: 'give',
        component: Give,
    },
]

const router = new VueRouter({
    routes
})

export default router
