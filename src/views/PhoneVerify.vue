<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/img/banner/v1/banner-member.jpg"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container phoneverify">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/img/global/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
      </ul>

      <div class="title">
        <h2>會員登入</h2>
        <p>Member &nbsp Login</p>
      </div>
      <form action="">
        <h3>請輸入手機號碼完成帳號驗證。</h3>
        <div class="form_style">
          <label for=""> <span class="text-danger">*</span>手機號碼 </label>
          <div class="captcha_input">
            <input type="text" placeholder="請輸入手機號碼" />
            <button
              class="captcha"
              @click="postCaptcha()"
              v-show="!captchaStatus"
              :style="{ 'pointer-events': captchaStatus ? 'none' : 'auto' }"
            >
              發送驗證碼
            </button>
          </div>
        </div>
        <div class="form_style">
          <label for=""><span class="text-danger">*</span> 驗證碼 </label>
          <div class="captcha_input">
            <input type="text" placeholder="請輸入簡訊驗證碼" />
            <button
              class="captcha"
              v-show="captchaStatus"
              :style="{ 'pointer-events': captchaStatus ? 'none' : 'auto' }"
            >
              重發驗證碼({{ countDown }})
            </button>
          </div>
        </div>
        <div class="button_area">
          <RouterLink to="" class="button">送出</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  data() {
    return {
      captchaStatus: false,
      countDown: 0,
    };
  },
  methods: {
    postCaptcha() {
      this.captchaStatus = !this.captchaStatus;
      this.countDown = 60;
      let countDownTime = setInterval(() => {
        this.countDown--;
        if (this.countDown <= 0) {
          this.captchaStatus = !this.captchaStatus;
          clearInterval(countDownTime);
        }
      }, 1000);
    },
  },
  components: { btnBanner },
};
</script>
