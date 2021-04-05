<template>
  <div class="bg-gray-900 h-screen w-full text-white flex ">
    <div class="container flex items-center mx-auto">
    <div class="flex flex-wrap w-full sm:w-1/3 mx-auto bg-gray-800 rounded shadow-xl p-10">
    <div class="mx-auto flex-shrink">
      <logo />  
    </div>
                <div
                  class="w-full text-center text-whitemy-4 text-lg"
                >
                <h2>Thanks for your payment, your temporary 2way email is:</h2>
    <div v-if="!loading" class="my-4 bg-gray-900 rounded p-4  header font-bold ">{{ disposableEmail }}</div>
    <div class="text-sm font-normal">To use this, simply email this address as you would any other email. We'll verify it and forward it to where it needs to go.</div>
    <div v-if="loading">Loading</div>
                </div>
                </div>
                </div>
  </div>
</template>

<script>
import Logo from "../components/logo";
import { store } from "../store/index";
export default {
  data() {
    return {
      loading: true,
      paymentLink: store.state.paymentLink,
    };
  },
  computed: {
    stripeSession() {
      return store.state.stripeSession;
    },
  },
  methods: {
    getLink() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const request = {
        type: "disposableEmail",
        paymentLink: store.state.paymentLink,
        stripeSession: this.stripeSession.id,
      };

      console.log("Params", request)

      this.axios
        .post(
          "https://nbmatf13x2.execute-api.us-east-1.amazonaws.com/dev/buyers",
          request,
          config
        )
        .then((response) => {
          console.log("Response", response.data);
          const json = JSON.parse(response.data.body);
          this.disposableEmail = json.disposableEmail;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.errored = error.response.data.message;
        });
    },
  },
  mounted() {
    console.log("Route", this.$route);
    this.getLink();
    },
    components:{
    Logo
  }
};
</script>
