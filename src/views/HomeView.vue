<template>
<div>
    <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-10">
    <Producto v-for="(producto,i) in productos"
             :key="i"
             :producto="producto"
             @add-to-cart="updateCart" />
    </div>
         

</div>

</template>

<script>
// @ is an alias to /src
import Producto from '@/components/productos/Producto.vue'


export default {
  props:{
     productos: {
            type: Array,
            required: true
        },
  
  },
  name: 'ProductosView',
  components: {
    Producto
  },methods:{
        updateCart(prod){
          console.log(prod)
          this.$emit('add-to-cart', prod)
       }

  }
}
</script>
