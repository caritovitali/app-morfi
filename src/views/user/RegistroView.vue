<template>
    <!-- component -->
    <div class="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50  py-12 px-4 sm:px-6 lg:px-8  outline-none focus:outline-none bg-gray-800 bg-no-repeat bg-center bg-cover">
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                    Registro
                </h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <div class="relative">
                    <label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                    <input required v-model="form.email" @keyup="validarEmail" class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="Ingrese su email" >
                </div>
                 <div class="relative">
                    <label class="text-sm font-bold text-gray-700 tracking-wide">Usuario</label>
                    <input required v-model="form.username" class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Username" >
                </div>
                <div class="mt-8 content-center">
                    <label class="text-sm font-bold text-gray-700 tracking-wide">
                        Password
                    </label>
                    <input required v-model="form.password" class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Ingrese su password">
                </div>
       
                <div>
                    <button @click="registrarUsuario()" type="button" class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                       Registrarme
                    </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                    <span>¿Ya tenés cuenta?</span>
                     <router-link to="/login" class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Iniciar Sesión</router-link>

                </p>
            </form>
        </div>
    </div>
</template>

<script>
import apiServices from '@/services/api.services';

export default {
  data: () => ({
      form:{
        email:'',
        username: '',
        password: '',
        isAdmin:0
      },
      alert: ''
  }),
  methods: {

        async registrarUsuario() {
                await apiServices.createUser(this.form);
                this.$router.push('/');
        },
          validarEmail() {
                const mailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                this.alert.email = mailRegExp.test(this.form.email) ? 
                    '' : 
                    'Formato de email inválido.';
                if (!this.form.email) this.alert.email = '';
               },
  },
}

</script>