<template lang="html">
    <div v-if="producto.id" class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
         <div class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
      <div class="">
        <div class="text-center p-5 flex-auto justify-center">
            <svg class="w16 h-16 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>  
        </div>
      <div class="overflow-x-hidden rounded-2xl relative">
        <img class="h-40 rounded-2xl w-full object-cover" :src="producto.imagen">
         <div>
          <p class="text-lg font-semibold text-gray-900 mb-0">{{ producto.nombre}}</p>
          <p class="text-md text-gray-800 mt-0 font-bold">${{ producto.precio}}</p>
        </div>
          <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span class="m-auto text-2xl font-thin" @click="restar()">−</span>
                </button>
                <input type="number" v-model="cantidad" readonly class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" >
                <button class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span class="m-auto text-2xl font-thin" @click="sumar()">+</span>
                </button>
             </div>
        
      </div>
        <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button @click="closeDetalle()" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cerrar
            </button>
            <button @click="agregarAlCarrito()"  class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Agregar al carrito</button>
        </div>
     </div>
    </div>
    </div>
</template>

<script lang="js">


  export default  {
    name: 'producto-detalle',
      components: {

    },
    props: {
        producto:{
            type:Object,
            required:true
        }
        },
    mounted () {
    },
    data () {
      return {
          cantidad:1
      }
    },
    methods: {
        agregarAlCarrito(){
            var prod={
                id:this.producto.id,
                cantidad:this.cantidad
            }
               this.$emit('add-to-cart', prod)
               this.cantidad=1
        },closeDetalle(){
              this.$emit('close-detalle', true)
                 this.cantidad=1
        },   
         sumar(){
            this.cantidad++
        },
        restar(){
            this.cantidad--
            if (this.cantidad<0) {
                this.cantidad=1
            }
        }
    },
    computed: {
    }
}
</script>

<style scoped >

</style>