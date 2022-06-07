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
    path: '/admin/producto/new',
    name: 'new',
    component: () => import('@/views/admin/ProductoForm.vue'),
    props: true
  }, 
  {
    path: '/admin/producto/edit/:id',
    name: 'edit',
    component: () => import('@/views/admin/ProductoForm.vue'),
    props: true
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import('@/views/user/PedidosView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/AdminView.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
