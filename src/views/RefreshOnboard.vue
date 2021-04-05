<template>
  <div class="home">
    Mmmm it looks like something went a little kooky! Would you like to try
    again?
    <div><input type="email" v-model="email" placeholder="Your email" /></div>
    <div>
      <input type="text" v-model="cost" placeholder="Amount for your reply" />
    </div>
    <div @click="createAccount()">Create an account</div>
  </div>
</template>

<script>
import { store } from "../store/index";

export default {
  name: "Home",
  methods: {
    createAccount() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        type: "onboarding",
        email: this.email,
        cost: this.cost,
        refreshURL: "https://competent-ramanujan-8ccacb.netlify.app/refresh-onboard",
        returnURL: "https://competent-ramanujan-8ccacb.netlify.app/dashboard",
      };

      this.axios
        .post(
          "https://nbmatf13x2.execute-api.us-east-1.amazonaws.com/dev/sellers",
          body,
          config
        )
        .then((response) => {
          console.log("Response", response.data);
          const body = JSON.parse(response.data.body);
          store.commit("verified", "partial");
          window.location.href = body.url;
        })
        .catch((error) => {
          console.log(error);
          this.errored = error.response.data.message;
        });
    },
  },
  mounted() {},
};
</script>
