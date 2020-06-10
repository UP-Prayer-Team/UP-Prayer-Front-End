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
        component: SignUp,
        tabText: 'Pray',
        drawerIcon: 'calendar_today'
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: Confirm
    },
    {
        path: '/thanks',
        name: 'thanks',
        component: Thanks,
    },
]

const router = new VueRouter({
    routes
})

export default router
