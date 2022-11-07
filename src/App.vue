<template>
  <btnHeader></btnHeader>
  <RouterView />
  <top></top>
  <btnFooter></btnFooter>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import btnHeader from "@/components/btn_Header.vue";
import btnFooter from "@/components/btn_Footer.vue";
import top from "./components/btn_goToTop.vue";
export default {
  components: { RouterLink, RouterView, btnHeader, btnFooter, top },
};
</script>
