<template>
  <btnHeader></btnHeader>
  <RouterView />
  <btnFooter></btnFooter>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import btnHeader from "@/components/btn_Header.vue";
import btnFooter from "@/components/btn_Footer.vue";
export default {
  components: { RouterLink, RouterView, btnHeader, btnFooter },
};
</script>
