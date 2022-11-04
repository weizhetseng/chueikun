<template>
  <div class="banner">
    <img
      class="banner_img"
      src="../assets/image/banner/banner_member.png"
      alt=""
    />
    <btnBanner></btnBanner>
  </div>
  <div class="container memberonly">
    <ul class="breadcrumb">
      <li>
        <RouterLink to="/">
          <img src="../assets/image/other/home.png" alt="" />
        </RouterLink>
      </li>
      <li class="active">會員專區</li>
    </ul>

    <div class="title">
      <h2>會員專區</h2>
      <p>Members &nbsp Only</p>
    </div>
    <h3>OOO &nbsp&nbsp 會員您好!</h3>
    <div class="button_area">
      <RouterLink to="/memberorder" class="button">查詢訂單資料</RouterLink>
      <RouterLink to="" class="button">修改會員資料</RouterLink>
    </div>
    <div class="button_area">
      <RouterLink to="" class="button">變更密碼</RouterLink>
      <RouterLink to="" class="button">綁定其他帳號</RouterLink>
      <RouterLink to="" class="button">會員登出</RouterLink>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  components: { btnBanner },
};
</script>
