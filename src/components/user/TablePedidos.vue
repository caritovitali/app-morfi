<template>
    <div>
       <h3 class="font-bold"> Fecha: {{ fechaPedido }}</h3>
        <table class="min-w-full leading-normal mx-4">
                            <thead>
                                <tr>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Producto
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Cantidad
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Precio
                                    </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Subtotal
                                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in pedido['0']" :key="i">
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div>
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                    {{item.nombre}}
                                                    </p>
                                                </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                             <div>
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                    {{item.cantidad}}
                                                    </p>
                                                </div>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            ${{item.precio}}
                                        </p>
                                    </td>	
                                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {{item.total}}
                                        </p>
                                    </td>		
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-right font-bold">Total: {{sumTotal}}</td>
                                </tr>
                            </tbody>
                        </table>
    </div>
     
</template>

<script>
 export default  {
    name: 'table-pedidos',
    props: {
         pedido: {
            type: Object,
            required: true
        },
        },
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {
      
    },
    computed: {
        sumTotal(){
            var sum=0
            this.pedido[0].forEach(item => {
                sum=parseFloat(item.total)+parseFloat(item.total)
            });
        return sum;
        },
        fechaPedido(){
            var fecha = new Date(this.pedido.createdAt)
            return fecha.toLocaleDateString();
        }
    }
}
</script>

<style>

</style>