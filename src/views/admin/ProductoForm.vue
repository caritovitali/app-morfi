<template>
    <div>
 <div class="max-w-lg w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10 items-center justify-center ">
        <div class="grid  gap-8 grid-cols-1 ">
            <div class="flex flex-col ">
                    <div class="flex flex-col sm:flex-row items-center">
                        <h2 class="font-semibold text-lg mr-auto" v-if="!item">Alta de Producto</h2>
                            <h2 class="font-semibold text-lg mr-auto" v-if="item">Editar de Producto</h2>
                        <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                    </div>
                    <div class="mt-5">
                        <div class="form">
                            <form method="POST" id="formulario">
                                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <label class="font-semibold text-gray-600 py-2">Nombre Producto <abbr title="required">*</abbr> <span v-if="!alert.nombre_completo && form.nombre_completo"><svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span></label>
                                        <input v-model="form.nombre" name="nombre" placeholder="Nombre Producto" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" >
                                    <p class="text-red-500 bold text-xs " v-if="alert.nombre">{{alert.nombre}}</p>  
                                    </div>
                                  
                                </div>
                                <div class="mb-3 space-y-2 w-full text-xs">
                                        <label class="font-semibold text-gray-600 py-2"> Precio <abbr title="required">*</abbr><span v-if="!alert.email && form.email"><svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span></label>
                                        <input v-model="form.precio" placeholder="Precio " class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" >
                                         <p class="text-red-500 bold text-xs " v-if="alert.precio" >{{ alert.precio }}</p>   
                                    </div>
                                         <div class="mb-3 space-y-2 w-full text-xs">
                                        <label class="font-semibold text-gray-600 py-2"> Imagen <abbr title="required">*</abbr><span v-if="!alert.email && form.email"><svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span></label>
                                        <input v-model="form.imagen" placeholder="URL de Imagen " class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" >
                                         <p class="text-red-500 bold text-xs " v-if="alert.imagen" >{{ alert.imagen }}</p>   
                                    </div>
                                    <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div class="w-full flex flex-col mb-3">
                                            <label class="font-semibold text-gray-600 py-2">Stock<abbr title="required">*</abbr><span v-if="!alert.telefono && form.telefono"><svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span></label>
                                            <input v-model="form.stock"  name="stock"  placeholder="stock" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text">
                                            <p class="text-red-500 bold text-xs " v-if="alert.stock">{{alert.stock}}</p>  
                                         </div>
                                            
                                        </div>
                                    
                                        <p class="text-xs text-red-500 text-right my-3">Campos requeridos con asterisco <abbr title="Required field">*</abbr></p>
                                        <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" @click="resetForm()"> Cancelar </button>
                                            <button class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500" @click="guardarProducto()"  v-if="!item" >Guardar</button>
                                                                                        <button class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500" @click="actualziarProducto()"  v-if="item" >Actualizar</button>
                                        </div>
                                          </form>
                                    </div>
                                  
                                </div>
                                
                            </div>
                        </div>
			</div>
    
  
       
    </div>
</template>

<script>
import apiServices from '@/services/api.services';

export default {
  name: 'ProductoForm',

  data: () => ({
      form:{
        nombre:"",
        precio:"",
        imagen:"",
        stock:""
      },
      alert:{}
 
  }),

  props: {
    usuario: {
      type: Object
    },
    id: {
      type: String,
      required: true
    },
    item: {
      type: Object
    }
    
  },
  mounted() {
    if (this.item) {
      this.form= Object.assign({}, this.item)      
    }

  },
  
  methods: {
    // Si no hay un usuario admin loggeado, volver a home
    async getProductos() {
      if (this.usuario) this.productos = await apiServices.getProductos();
      else this.$router.push('/')
    },
       async guardarProducto() {
             await apiServices.guardarProducto(this.form);
        
                this.$router.push('/admin')
             //   this.$emit('add-producto',producto)
       },
     async actualizarProducto() {
                 await apiServices.actualizarProducto(this.form,this.id);
        
                this.$router.push('/admin')
             //   this.$emit('add-producto',producto)
    },
   
  }
}
</script>

<style>

</style>