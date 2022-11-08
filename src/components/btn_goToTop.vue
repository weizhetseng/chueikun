<template>
  <div class="toTop" @click="scrollToTop()">
    <img src="../assets/image/other/goTop.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      topBtnstatus: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
