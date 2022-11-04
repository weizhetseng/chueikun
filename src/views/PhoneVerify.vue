<template>
  <div class="banner">
    <img
      class="banner_img"
      src="../assets/image/banner/banner_member.png"
      alt=""
    />
    <btnBanner></btnBanner>
  </div>
  <div class="container phoneverify">
    <ul class="breadcrumb">
      <li>
        <RouterLink to="/">
          <img src="../assets/image/other/home.png" alt="" />
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
          <a href="" class="captcha">發送驗證碼</a>
        </div>
      </div>
      <div class="form_style">
        <label for=""><span class="text-danger">*</span> 驗證碼 </label>
        <div class="captcha_input">
          <input type="text" placeholder="請輸入簡訊驗證碼" />
          <a href="" class="captcha">重發驗證碼(59)</a>
        </div>
      </div>
      <div class="button_area">
        <RouterLink to="" class="button">送出</RouterLink>
      </div>
    </form>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  components: { btnBanner },
};
</script>
