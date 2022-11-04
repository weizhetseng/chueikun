<template>
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
      <li class="active">查詢訂單資料</li>
    </ul>

    <div class="title">
      <h2>會員專區</h2>
      <p>Members &nbsp Only</p>
    </div>
    <div class="row">
      <div class="list d-lg-block d-none">
        <btnMemberList></btnMemberList>
      </div>
      <div class="main">
        <h3>修改密碼成功</h3>
        <div class="button_area">
          <RouterLink to="" class="button">返回上一頁</RouterLink>
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
