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
    <div class="container forgot">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/img/global/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
        <li class="active">忘記密碼</li>
      </ul>

      <div class="title">
        <h2>忘記密碼</h2>
        <p>Forgot &nbsp Password</p>
      </div>
      <form action="">
        <div class="form_style">
          <label for="">
            <span class="icon material-icons"> mail </span>
            <p>帳號</p>
          </label>
          <input type="text" placeholder="請輸入手機號碼或電子信箱" />
        </div>
        <div class="button_area">
          <button type="reset" class="button02">清除</button>
          <RouterLink to="/forgotmsg" class="button"> 送出 </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  components: { btnBanner },
};
</script>
