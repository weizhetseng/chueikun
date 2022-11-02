<template>
  <btnHeader></btnHeader>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import btnHeader from "@/components/btn_Header.vue";
export default {
  components: { RouterLink, RouterView, btnHeader },
};
</script>
