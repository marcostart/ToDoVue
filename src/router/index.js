import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Newpage from '../views/newpage/indexView.vue'
import ComponentP from '../views/CompoView.vue'
import Todo from '../views/newpage/todoListe'
import TodoComp from '../components/TodoComp.vue'
import CarouPage from '../views/newpage/pageCarou.vue'
import Carousel from '../components/carouselComp.vue'
import CarouselSlide from '../components/carouselSlide.vue'
const routes = [
  {
    path: '/',
    name: 'page',
    component: Newpage
  },
  {
    path: '/Todo',
    name: 'todoListe',
    component: Todo
  },
  {
    path: '/TodoComp',
    name: 'TodoComp',
    component: TodoComp
  },
  {
      path: '/carousel',
      name: 'carouPage',
      component: CarouPage
  },
  {
      path: '/carouselC',
      name: 'carousel',
      component: Carousel
  },
  {
      path: '/carouselS',
      name: 'carouselSlide',
      component: CarouselSlide
  },
  {
    path: '/HomeView',
    name: 'home',
    component: HomeView
},
{
    path: '/componentP',
    name: 'component',
    component: ComponentP
},
{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
