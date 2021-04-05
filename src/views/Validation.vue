<template>
  <div>Validating...</div>
</template>

<script>
import { store } from "../store/index";
export default {
  methods: {
    validate() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        type: "verify",
        email: this.$route.query.email,
        invite: this.$route.query.invite,
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
          store.commit("profile", body);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          this.errored = error.response.data.message;
        });
    },
  },
  mounted() {
    this.validate();
  },
};
</script>
