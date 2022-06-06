<template>
  <div id="app">

        <NavBar 
            :carrito="carrito"
            @ver-carrito="showCarritoModal" 
            :usuario="usuario"
             />
      <div class="py-12 md:px-20 sm:px-14 px-6">
        <router-view
          :productos="productos"
          :carrito="carrito"
          :usuario="usuario"
          @iniciar-sesion="login"
          @add-to-cart="updateCart"
 
         
         />
      </div>
        
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import apiServices from '@/services/api.services';
export default {
  name: 'App',
  components: {
    NavBar,
  },data(){
    return{
      productos:[],
      carrito:[],
      showCarrito:false,
      showLogin:false,
      usuario:null,
       
    }
  },
 mounted() {
    this.getProductos();
    this.getCarrito();
  }
  
  ,methods:{
      async getProductos() {
         this.productos = await apiServices.getProductos();
     },
  login(user){
      console.log(user)
      this.usuario=user;
  },
     getCarrito() {
      this.cart = JSON.parse(localStorage.getItem('carrito')) || [];
    }, 
    showCarritoModal(data){
      this.showCarrito=data
    },
      closeCarritoModal(data){
      this.showCarrito=data
    },
      finalizarCompra(data){
      this.showCarrito=data
      this.carrito=[]
    }, updateCart(prod) {
        const productInCart = this.carrito.find(producto => producto.id === prod.id)             
        if (productInCart) {
          productInCart.cantidad++;
          productInCart.total = productInCart.cantidad * productInCart.precio;
              
        } else {
          const findProduct = this.productos.find(producto => producto.id === prod.id);
          const newProduct = { ...findProduct };
          this.carrito.push({
            ...newProduct,
            cantidad: prod.cantidad, 
            total: newProduct.precio
          })
        }
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
