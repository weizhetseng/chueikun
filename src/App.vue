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

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  methods: {
    processLoad() {
      const myModal = new Modal(document.getElementById("main_modal"));

      myModal.show();
    },
  },

  components: { RouterLink, RouterView, btnHeader, btnFooter, top },
  created() {
    AOS.init();
  },
};
</script>
