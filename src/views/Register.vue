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
    <div class="container register">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/img/global/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員註冊</li>
      </ul>

      <div class="title">
        <h2>會員註冊</h2>
        <p>Sign &nbsp Up</p>
      </div>
      <form>
        <div class="form_style">
          <p class="text-danger">*為必填項目</p>
          <div class="space"></div>
        </div>
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
            <input type="text" placeholder="請輸入手機驗證碼" />
            <button
              class="captcha"
              v-show="captchaStatus"
              :style="{ 'pointer-events': captchaStatus ? 'none' : 'auto' }"
            >
              重發驗證碼({{ countDown }})
            </button>
          </div>
        </div>
        <div class="form_style">
          <label for=""> <span class="text-danger">*</span>E-mail </label>
          <div class="captcha_input">
            <input type="text" placeholder="請輸入E-mail" />
            <button
              type="button"
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
            <input type="text" placeholder="請輸入E-mail信驗證碼" />
            <button
              class="captcha"
              v-show="captchaStatus"
              :style="{ 'pointer-events': captchaStatus ? 'none' : 'auto' }"
            >
              重發驗證碼({{ countDown }})
            </button>
          </div>
        </div>
        <div class="form_style">
          <label for=""> <span class="text-danger">*</span>密碼 </label>
          <input
            type="text"
            placeholder="請輸入4~12 個字元，請勿使用空白或「＠ 」等特殊符號"
          />
        </div>
        <div class="form_style">
          <label for=""> <span class="text-danger">*</span>確認密碼 </label>
          <input type="text" placeholder="請再輸入一次密碼" />
        </div>
        <div class="form_style">
          <label for=""> <span class="text-danger">*</span>姓名 </label>
          <input type="text" placeholder="請輸入姓名" />
        </div>
        <div class="form_style sex">
          <label for="">性別 </label>
          <div class="sex_option">
            <label for=""> <input type="radio" />男 </label>
            <label for=""> <input type="radio" />女 </label>
          </div>
        </div>
        <div class="form_style date">
          <label for="">生日 </label>
          <div class="date_area">
            <input type="date" />
          </div>
        </div>
        <div class="form_style">
          <label for="">電子郵件 </label>
          <input type="text" placeholder="請輸入電子信箱" />
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
            <input type="text" class="address" placeholder="請輸入詳細地址" />
          </div>
        </div>
        <div class="button_area">
          <button type="reset" class="button02">清除</button>
          <button type="submit" class="button">送出</button>
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
      user: {},
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
