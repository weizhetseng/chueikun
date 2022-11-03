import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/News.vue"),
    },
    {
      path: "/newsdetail",
      name: "newsdetail",
      component: () => import("../views/NewsDetail.vue"),
    },
    {
      path: "/location",
      name: "location",
      component: () => import("../views/Location.vue"),
    },
    {
      path: "/member",
      name: "member",
      component: () => import("../views/Member.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/shoppingcart",
      name: "shoppingcart",
      component: () => import("../views/ShoppingCart.vue"),
    },
  ],
});

export default router;
