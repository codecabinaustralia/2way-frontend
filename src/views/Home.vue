<template>
  <div class="relative overflow-hidden">
    <!-- Email modal -->
    <div v-if="showEmail"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div @click="showEmail = false"
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <div
              class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-900"
            >
              <!-- Heroicon name: outline/check -->
              <svg
                class="w-6 h-6 text-primaryGreen"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg header leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                What email should we forward to?
              </h3>

              <input
              @keyup.enter="createAccount()"
                id="email"
                type="email"
                v-model="email"
                placeholder="email address"
                class="mt-4 block w-full h-20 text-lg px-4 py-3 rounded-md border-0 text-base text-gray-900 bg-gray-200 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
              />

              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  We release this email to nobody, ever!
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">

            <div v-if="!loading" @click="createAccount()"
              class="cursor-pointer inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-2xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-xl"
            >
              Finish
            </div>

            <div v-if="loading"
              class="bg-gray-300 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-2xl font-medium text-white sm:text-xl"
            >
              Creating Account
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End email modal  -->
    <main>
      <div
        class="min-h-screen pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
            >
              <div class="mt-1">
                <logo />
                <h1
                  class="leading-none mt-4 header text-3xl tracking-tight text-white sm:mt-5 sm:text-4xl lg:mt-6 xl:text-4xl"
                >
                  <span class="block">The marketplace that helps you</span>
                  <span class="block text-primaryGreen text-6xl"
                    >buy &amp; sell replies</span
                  >
                </h1>
                <h2 class="text-white headerMedium mt-6">
                  Register for your free 2way link & attach it to your social
                  bios.
                </h2>
                <h2 class="text-white headerMedium">
                  Those wanting your time can now pay you for it.
                </h2>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                ></p>
                <div class="mt-10 sm:mt-12">
                  <div class="grid grid-cols-12 gap-2">
                    <div class="col-span-12">
                      <div class="header mb-2 text-white text-base">
                        What's your number?
                      </div>
                    </div>
                    <!-- <div class="cols-span-12 sm:col-span-4">
                              <input
                                id="email"
                                type="email"
                                v-model="email"
                                placeholder="Enter your email"
                                class="block w-full h-20 text-lg px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                              />
                            </div> -->
                    <div class="cols-span-12 sm:col-span-5">
                      <div class="bg-white rounded-lg h-20 grid grid-cols-12">
                        <div
                          class="col-span-2 text-4xl header text-gray-700 text-center pt-3"
                        >
                          $
                        </div>
                        <div class="col-span-6">
                          <input
                           @keyup.enter="showEmail = true"
                            v-model="cost"
                            type="text"
                            placeholder="50"
                            class="block w-full h-20 text-4xl header px-4 py-3 text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div
                          class="col-span-4 px-4 rounded-r-md pt-6 header leading-none bg-gray-100"
                        >
                          <span class="block text-sm text-gray-600 headerMedium"
                            >each</span
                          >reply
                        </div>
                      </div>
                    </div>
                    <div
                      class="text-white header text-sm text-center textcols-span-12 sm:col-span-5"
                    >
                      <div
                        @click="showEmail = true"
                        class="cursor-pointer text-xl block header h-20 items-center flex w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      >
                        <div class="w-full text-center">
                          Your 2way link awaits
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex mt-10">
                    <div class="flex-shrink">
                      <star class="inline-block w-6 h-6 mr-1" />
                      <star class="inline-block w-6 h-6 mr-1" />
                      <star class="inline-block w-6 h-6 mr-1" />
                      <star class="inline-block w-6 h-6 mr-1" />
                      <star class="inline-block w-6 h-6 mr-1" />
                      <div
                        class="text-yellow-500 header uppercase text-sm mt-2"
                      >
                        over 1k testers
                      </div>
                    </div>
                    <div
                      class="flex-shrink text-white font-bold header ml-4 uppercase"
                    >
                      We're crushing our BETA - JOIN US
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex items-center">
              <div class="text-center w-3/4 mx-auto">
                <h3 class="header text-3xl tracking-tight text-gray-500">
                  It's feels like magic.
                  <span class="text-white">I made $500 this morning</span> by
                  replying to my sales calls &amp; recruitment emails.
                </h3>
              </div>
            </div>
          </div>

          <div
            class="text-center leading-none mt-10 flex w-full md:w-1/2 mx-auto text-gray-600 text-sm"
          >
            2way tokens are valued at $5USD you can cashout your tokens once you
            collect 50 or more. We also rely on stripe to handle our payouts and
            charges. Upon signing up you'll be taken through the stripe process
            so we can start depositing money into your account.
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
</template>

<script>
import { store } from "../store/index";
import Star from "../components/star";
import Logo from "../components/logo";
// import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  name: "Home",
  data() {
    return {
      showEmail: false,
      email: "",
      cost: 50,
      loading: false
    };
  },
  methods: {
    createAccount() {
      this.loading = true

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        type: "onboarding",
        email: this.email,
        cost: this.cost
        // refreshURL: "https://competent-ramanujan-8ccacb.netlify.app/refresh-onboard",
        // returnURL: "https://competent-ramanujan-8ccacb.netlify.app/dashboard",
      };

      this.axios
        .post(
          "https://nbmatf13x2.execute-api.us-east-1.amazonaws.com/dev/sellers",
          body,
          config
        )
        .then((response) => {
          console.log("Create account response", response.data)
          const body = JSON.parse(response.data.body);
          store.commit("stripeAccount", body);
          if(body.Item){
            this.$router.push(`/login?autoInitiate=${body.Item.pk}`)
          }
        })
        .catch((error) => {
          console.log(error);
          this.showEmail = false
          this.loading = false
          this.errored = error.response.data.message;
        });
    },
  },
  mounted() {
    store.commit("profile", null);
  },
  components: {
    Star,
    Logo,
    // LottieAnimation
  },
};
</script>

<style >
.header {
  font-family: "GilroyBold", Helvetica, Arial !important;
}
.headerMedium {
  font-family: "GilroyMedium", Helvetica, Arial !important;
}
</style>
