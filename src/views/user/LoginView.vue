<template>
    <div class="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50  py-12 px-4 sm:px-6 lg:px-8  outline-none focus:outline-none bg-gray-800 bg-no-repeat bg-center bg-cover">
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                    Bienvenido!
                </h2>
                <p class="mt-2 text-sm text-gray-600">Inicie Sesión</p>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <div class="relative">
                
                    <label class="text-sm font-bold text-gray-700 tracking-wide">Usuario</label>
                    <input v-model="username" class="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Ingrese Usuario" >
                </div>
                <div class="mt-8 content-center">
                    <label class="text-sm font-bold text-gray-700 tracking-wide">
                        Password
                    </label>
                    <input v-model="password" class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Ingrese la clave">
                </div>
                <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded">
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                               Recordarme
                            </label>
                        </div>
                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">
                                    Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
                     <div class="flex items-center justify-between">
                        <div class="flex items-center">
                           
                            <label for="error" class="ml-2 block font-bold text-sm text-red-600">
                                {{ alert}}
                            </label>
                        </div>
               
                </div>
                <div>
                    <button @click="login()" type="button" class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                       Entrar
                    </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                      <span>No tiene cuenta aún?</span>
                      <router-link to="/registro" class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Registrarme</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import apiServices from '@/services/api.services';
export default {
    data () {
      return {
            username: '',
            password: '',
            alert: ''
      }
    },
  methods: {

    async login() {
      const users = await apiServices.getUsers();
      const user = users.find(user => user.username === this.username && user.password === this.password)

      if (user) {
        this.$emit('iniciar-sesion', user);
        this.$router.push('/')
      } else {
        this.alert = 'Usuario o contraseña incorrectos, intente nuevamente';
      }
    }
  },

}

</script>