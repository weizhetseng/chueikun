<template>
  <div class="toTop" @click="goTop">
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
    goTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      let speed = scrollTop / 10;

      const timeTop = setInterval(() => {
        if (document.documentElement.scrollTop !== 0) {
          document.documentElement.scrollTop -= speed;
        } else {
          clearInterval(timeTop);
        }
      }, 20);
    },
  },
};
</script>
