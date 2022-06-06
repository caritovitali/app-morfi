<template>
<div>
    <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-10">
    <Producto v-for="(producto,i) in productos"
             :key="i"
             :producto="producto"
          
             @ver-producto="showProducto" />
    <ProductoDetalle :producto="producto"    @add-to-cart="updateCart"  @close-detalle="closeProducto"   />
    </div>
         

</div>

</template>

<script>
// @ is an alias to /src
import Producto from '@/components/productos/Producto.vue'
import ProductoDetalle from '@/components/productos/ProductoDetalle.vue'


export default {
  props:{
     productos: {
            type: Array,
            required: true
        },
  
  },
    data(){
      return{
        producto:{}
      }
    },
  name: 'ProductosView',
  components: {
    Producto, ProductoDetalle
  },methods:{
        updateCart(prod){
          console.log(prod)
          this.$emit('add-to-cart', prod)
          this.producto={}
       },
       showProducto(producto){
         this.producto=producto;
         
       },
       closeProducto(){
         this.producto=""
       }

  }
}
</script>
