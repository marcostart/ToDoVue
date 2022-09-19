import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact-item.vue'
import Menu from '../views/menuView/indexView.vue'
import Login from '../views/loginView/indexView.vue'
import Register from '../views/registerView/indexView.vue'

const routes = [
 /* {
    path: '/',
    name: 'home',
    component: HomeView
  },*/
  {
    path:'/',
    name:'menu',
    component:Menu
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
     path:'/register',
     name:'Register',
     component:Register
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name:'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
