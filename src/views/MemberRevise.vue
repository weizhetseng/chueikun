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
    <div class="container memberrevise">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/img/global/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
        <li class="active">修改會員資料</li>
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
              <label for=""> 姓名 </label>
              <input type="text" placeholder="請輸入姓名" />
            </div>
            <div class="form_style sex">
              <label for="">性別 </label>
              <div class="sex_option">
                <input type="radio" />男 <input type="radio" />女
              </div>
            </div>
            <div class="form_style date">
              <label for="">生日 </label>
              <div class="date_area">
                <input type="date" />
              </div>
            </div>
            <div class="form_style">
              <label for=""> 電子信箱 </label>
              <div class="captcha_input">
                <input type="text" placeholder="請輸入電子信箱" />
                <a
                  href="#"
                  class="captcha"
                  @click="postCaptcha()"
                  v-show="!captchaStatus"
                  :style="{ 'pointer-events': captchaStatus ? 'none' : 'auto' }"
                  >發送驗證碼</a
                >
              </div>
            </div>
            <div class="form_style">
              <label for=""> 驗證碼 </label>
              <div class="captcha_input">
                <input type="text" placeholder="請輸入驗證碼" />
                <a
                  href=""
                  class="captcha"
                  v-show="captchaStatus"
                  :style="{ 'pointer-events': captchaStatus ? 'none' : 'auto' }"
                  >重發驗證碼({{ countDown }})</a
                >
              </div>
            </div>
            <div class="form_style">
              <label for="">市話 </label>
              <input type="text" placeholder="請輸入市話號碼" />
            </div>
            <div class="form_style">
              <label for="">聯絡地址 </label>
              <div class="address_area">
                <div class="select_area">
                  <select name="" id="" class="city">
                    <option value="">縣市</option>
                  </select>
                  <select name="" id="" class="country">
                    <option value="">鄉鎮市區</option>
                  </select>
                  <select name="" id="" class="street">
                    <option value="">街道名稱</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="address"
                  placeholder="請輸入詳細地址"
                />
              </div>
            </div>
            <div class="button_area">
              <button type="reset" class="button02">清除</button>
              <RouterLink to="/memberrevise-2" class="button">送出</RouterLink>
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
