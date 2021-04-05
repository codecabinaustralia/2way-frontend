<template>
  <div class="bg-gray-900">
<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div v-if="!sentInvite" class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class=" w-full text-center justify-center flex">
      <div class="flex-shrink">
        <logo />
      </div>
    </div>
    <h2 class="mt-6 text-center text-3xl header text-white">
      Sign in to your 2way account
    </h2>
  </div>

  <div v-if="!sentInvite" class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg">
          </div>
        </div>

        <div>
          <button @click="login()" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
      </div>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              We'll send you a secure link to your dashboard
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="sentInvite" class="sm:mx-auto sm:w-full sm:max-w-md  text-center text-white header">
      We have sent a secure sign in link to <span class="block">{{ email }}</span>
    </div>
</div>




    
  </div>
</template>

<script>
import { store } from "../store/index";
import Logo from "../components/logo"
export default {
  data() {
    return {
      email: this.email,
      sentInvite: false,
    };
  },
  methods: {
    login() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        type: "login",
        email: this.email,
        url: "https://competent-ramanujan-8ccacb.netlify.app/validation",
      };

      this.axios
        .post(
          "https://nbmatf13x2.execute-api.us-east-1.amazonaws.com/dev/sellers",
          body,
          config
        )
        .then((response) => {
          console.log("Response", response.data);
          this.sentInvite = true;
        })
        .catch((error) => {
          console.log(error);
          this.errored = error.response.data.message;
        });
    },
  },
  mounted() {
    store.commit("profile", null);
    if(this.$route.query.autoInitiate){
      console.log("test")
      this.email = this.$route.query.autoInitiate;
      this.login();
    }
  },
  components:{
    Logo
  }
};
</script>
