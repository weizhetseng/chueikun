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
    <div class="container bindother">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
        <li class="active">綁定其他帳號</li>
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
          <div class="form_style">
            <label for="">
              <img src="../assets/image/other/facebook.png" alt="" />
              Facebook
            </label>
            <div class="bind_status">
              <p>已綁定</p>
              <a href="">解除綁定</a>
            </div>
          </div>
          <div class="form_style">
            <label for="">
              <img src="../assets/image/other/line.png" alt="" />
              LINE
            </label>
            <div class="bind_status">
              <p>未綁定</p>
              <a href="">綁定</a>
            </div>
          </div>
          <div class="form_style">
            <label for="">
              <img src="../assets/image/other/google.png" alt="" />
              GOOGLE
            </label>
            <div class="bind_status">
              <p>未綁定</p>
              <a href="">綁定</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btnMemberList from "@/components/btn_MemberList.vue";
export default {
  components: { btnBanner, btnMemberList },
};
</script>
