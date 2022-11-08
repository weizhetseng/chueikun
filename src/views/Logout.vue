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
    <div class="container logout">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
        <li class="active">會員登出</li>
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
          <h3>會員已登出</h3>
          <div class="button_area">
            <RouterLink to="/" class="button">返回首頁</RouterLink>
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
