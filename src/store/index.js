import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    stripeAccount: null,
    paymentLink: null,
    stripeSession: null,
    profile: null,
  },
  mutations: {
    stripeAccount(state, payload) {
      state.stripeAccount = payload;
    },
    stripeSession(state, payload) {
      state.stripeSession = payload;
    },
    paymentLink(state, payload) {
      state.paymentLink = payload;
    },
    profile(state, payload) {
      state.profile = payload;
    },
  },
  actions: {},
  modules: {},
});
