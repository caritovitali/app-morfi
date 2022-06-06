import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/user/LoginView.vue'
import RegistroView from '../views/user/RegistroView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView,
   
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/PedidosView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/AdminView.vue'),
    props: true
  },
  {
    path: '/producto/new',
    name: 'producto',
    component: () => import('@/views/admin/ProductoForm.vue'),
    props: true
  },
  {
    path: '/producto/edit',
    name: 'producto',
    component: () => import('@/views/admin/ProductoForm.vue'),
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
