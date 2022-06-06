<template lang="html">
   <table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Nombre
								</th>
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Cantidad
								</th>
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Precio
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item,i) in productos" :key="i">
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div>
												<p class="text-gray-900 whitespace-no-wrap">
												{{item.nombre}}
												</p>
											</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">	{{item.cantidad}}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{item.precio}}
									</p>
								</td>						
							</tr>
							
						</tbody>
					</table>

</template>

<script lang="js">
  export default  {
    name: 'tabla-carrito',
    props: {
         productos: {
            type: Array,
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
    }
}
</script>

<style scoped >

</style>