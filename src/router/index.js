import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Validation from "../views/Validation.vue";
import Dashboard from "../views/Dashboard";
import RefreshOnboard from "../views/RefreshOnboard";
import Purchase from "../views/Purchase";
import Receipt from "../views/Receipt";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/validation",
    name: "Validation",
    component: Validation,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/refresh-onboard",
    name: "RefreshOnboard",
    component: RefreshOnboard,
  },
  {
    path: "/receipt",
    name: "Receipt",
    component: Receipt,
  },
  {
  path: '/:id',
  name: "Purchase",
  component: Purchase
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
