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
    <div class="row">
      <div class="col-3">
        <btnMemberList></btnMemberList>
      </div>
      <div class="col-lg-9"></div>
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
