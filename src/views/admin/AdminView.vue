<template>
    <div>
        <div class="">

          <router-link :to="{ name: 'new' }" class="mb-4 float-left bg-red-600 hover:bg-red-700 text-white text-sm  px-4 py-2  border rounded-full"> Nuevo Producto</router-link> 

             
        </div>
        <div>
             <table class="min-w-full leading-normal mx-4">
                            <thead>
                                <tr>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Imagen
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Precio
                                    </th>
                                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Stock
                                    </th>
                                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Acciones
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
                                        <img class="rounded-xl w-36  object-cover" :src="item.imagen" :alt="item.nombre">								
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            ${{item.precio}}
                                        </p>
                                    </td>	
                                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {{item.stock}}
                                        </p>
                                    </td>		
                                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                          <div class="flex">
                                            
                                              <router-link   :to="{ 
                                                          name: 'edit', 
                                                          params: { 
                                                            id: item.id.toString(),
                                                            item 
                                                          } 
                                                        }" 
                                                        class="btn btn-success"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></router-link> 

                                             
                                               <a @click="deleteProducto(item.id,i)"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a>
                                          </div>
                                    </td>			
                                </tr>
                                
                            </tbody>
                        </table>
        </div>
       
    </div>
</template>

<script>
import apiServices from '@/services/api.services';

export default {
  name: 'AdminView',
  
  data: () => ({
    productos: []
  }),

  props: {
    usuario: {
      type: Object
    },
    
  },

  mounted() {
    if (this.usuario) this.getProductos();
    else this.$router.push('/')
    
    
  },
  
  methods: {
    // Si no hay un usuario admin loggeado, volver a home
    async getProductos() {
      if (this.usuario) this.productos = await apiServices.getProductos();
      else this.$router.push('/')
    },
       async deleteProducto(id,i) {
                await apiServices.deleteProducto(id);
                this.productos.splice(this.productos.indexOf(i), 1);
           
        },
   
  }
}
</script>

<style>

</style>