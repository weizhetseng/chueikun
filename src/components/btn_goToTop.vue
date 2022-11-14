<template>
  <div class="toTop" @click="scrollToTop()">
    <img src="../assets/img/global/goTop.png" alt="" />
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
  mounted() {
    this.scrollToTop();
  },
};
</script>
