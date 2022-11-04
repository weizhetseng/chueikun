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
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
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
    {
      path: "/memberpay",
      name: "memberpay",
      component: () => import("../views/MemberPay.vue"),
    },
    {
      path: "/visitorpay",
      name: "visitorpay",
      component: () => import("../views/VisitorPay.vue"),
    },
    {
      path: "/ordercheck",
      name: "ordercheck",
      component: () => import("../views/OrderCheck.vue"),
    },
    {
      path: "/orderdone",
      name: "orderdone",
      component: () => import("../views/OrderDone.vue"),
    },
    {
      path: "/forgot",
      name: "forgot",
      component: () => import("../views/Forgot.vue"),
    },
    {
      path: "/forgotmsg",
      name: "forgotmsg",
      component: () => import("../views/ForgotMsg.vue"),
    },
    {
      path: "/phoneverify",
      name: "phoneverify",
      component: () => import("../views/PhoneVerify.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/memberonly",
      name: "memberonly",
      component: () => import("../views/MemberOnly.vue"),
    },
    {
      path: "/memberorder",
      name: "memberorder",
      component: () => import("../views/MemberOrder.vue"),
    },
  ],
});

export default router;
