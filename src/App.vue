<template>
  <div id="app">
        <NavBar 
            :carrito="carrito"
            @ver-carrito="showCarritoModal" 
            :usuario="usuario"
            @log-out="logOut" 
             />
      <div class="py-12 md:px-20 sm:px-14 px-6">
        <router-view
          :productos="productos"
          :carrito="carrito"
          :usuario="usuario"
          @iniciar-sesion="login"
          @add-to-cart="updateCart"
          @add-producto="addProducto"
         />
            <CarritoModal v-show="showCarrito"
              :carrito="carrito"
               :usuario="usuario"
              @vaciar-carrito="vaciarCarrito"
              @cerrar-carrito="closeCarritoModal"
              @finalizar-compra="finalizarCompra" />
      </div>
        
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import CarritoModal from './components/carrito/CarritoModal.vue'
import apiServices from '@/services/api.services';
export default {
  name: 'App',
  components: {
    NavBar, CarritoModal
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
     this.getUsuario();
  }
  ,
  methods:{
      async getProductos() {
         this.productos = await apiServices.getProductos();
     },
      login(user){
          console.log(user)
          this.usuario=user;
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
      },
      logOut(){
            this.carrito=[];
            localStorage.removeItem('usuario');
            this.usuario=null
            location.reload()
        
      },
     getCarrito() {
      this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    },getUsuario() {
      this.usuario = JSON.parse(localStorage.getItem('usuario')) || null;
    }, 
    showCarritoModal(data){
      this.showCarrito=data
    },
    closeCarritoModal(data){
      this.showCarrito=data
    },
    async finalizarCompra(){
        var items=[this.carrito]
             await apiServices.guardarCompra(this.usuario.id,items);
             this.vaciarCarrito()
    }, 
    updateCart(prod) {
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
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
    },
    vaciarCarrito(){
      this.carrito=[];
         localStorage.removeItem('carrito');
         this.showCarrito=false;
    },
     addProducto(producto){
      this.productos.push(producto)
    }
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
