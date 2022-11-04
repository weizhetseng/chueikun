<template>
  <div class="banner">
    <img
      class="banner_img"
      src="../assets/image/banner/banner_member.png"
      alt=""
    />
    <btnBanner></btnBanner>
  </div>
  <div class="container forgot">
    <ul class="breadcrumb">
      <li>
        <RouterLink to="/">
          <img src="../assets/image/other/home.png" alt="" />
        </RouterLink>
      </li>
      <li class="active">會員專區</li>
      <li class="active">忘記密碼</li>
    </ul>

    <div class="title">
      <h2>忘記密碼</h2>
      <p>Forgot &nbsp Password</p>
    </div>
    <h3>您的新密碼已經發送到您的手機，請查看訊息</h3>
    <div class="button_area">
      <RouterLink to="/" class="button">返回登入頁</RouterLink>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  components: { btnBanner },
};
</script>
