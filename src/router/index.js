import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/user/LoginView.vue'
import RegistroView from '../views/user/RegistroView.vue'
import ProductoForm from '../views/admin/ProductoForm.vue'
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
    path: '/new',
    name: 'productoNew',
    component: ProductoForm,

  }, 
  {
    path: '/edit/:id',
    name: 'edit',
    component: ProductoForm,
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
