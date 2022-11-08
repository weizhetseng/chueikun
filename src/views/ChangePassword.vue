<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/image/banner/banner_member.png"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container changepassword">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
        <li class="active">變更會員密碼</li>
      </ul>

      <div class="title">
        <h2>會員專區</h2>
        <p>Members &nbsp Only</p>
      </div>
      <div class="row">
        <div class="list">
          <btnMemberList></btnMemberList>
        </div>
        <div class="main">
          <form action="">
            <div class="form_style">
              <label for=""> <span class="text-danger">*</span>舊密碼 </label>
              <input type="text" placeholder="請輸入舊密碼" />
            </div>
            <div class="form_style">
              <label for=""> <span class="text-danger">*</span>新密碼 </label>
              <input type="text" placeholder="請再輸入新密碼" />
            </div>
            <div class="form_style">
              <label for="">
                <span class="text-danger">*</span>確認新密碼
              </label>
              <input type="text" placeholder="請再輸入一次新密碼" />
            </div>
            <div class="button_area">
              <RouterLink to="" class="button">清除</RouterLink>
              <RouterLink to="/changepassword-2" class="button"
                >送出</RouterLink
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btnMemberList from "@/components/btn_MemberList.vue";
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
  components: { btnBanner, btnMemberList },
};
</script>
