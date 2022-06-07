<template>
    <div>
        <div class="">

        <h3>Tus Pedidos:</h3>
             
        </div>
        <div>
          <TablePedidos v-for="(pedido,i) in pedidos"
             :key="i"
             :pedido="pedido" />
        </div>
       
    </div>
</template>

<script>
import apiServices from '@/services/api.services';
import TablePedidos from '@/components/user/TablePedidos.vue'
export default {
  name: 'PedidosView',
  components:{
    TablePedidos
  },
  data: () => ({
    pedidos: []
  }),

  props: {
    usuario: {
      type: Object
    },
    
  },

  mounted() {
        if (this.usuario) this.getPedidos();
    else this.$router.push('/')

  },
  
  methods: {
    // Si no hay un usuario admin loggeado, volver a home
    async getPedidos() {
      if (this.usuario) this.pedidos = await apiServices.getPedidos(this.usuario.id);
      else this.$router.push('/')
    },
      
   
  }
}
</script>

<style>

</style>