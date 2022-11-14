<template>
  <ul class="member_list d-lg-block d-none">
    <li v-for="item in links" :key="item.title">
      <RouterLink :to="item.url">{{ item.title }}</RouterLink>
    </li>
  </ul>
  <div class="d-lg-none d-block">
    <div class="mobileList" @click="overlaystatus = !overlaystatus">
      <span class="material-icons-outlined"> format_list_bulleted </span>
    </div>
    <div class="mobileOverlay" v-if="overlaystatus">
      <div class="mask">
        <div class="overlay_content">
          <div class="close">
            <span
              class="material-icons-outlined"
              @click="overlaystatus = !overlaystatus"
            >
              close
            </span>
          </div>
          <ul>
            <li v-for="item in links" :key="item.title">
              <RouterLink :to="item.url">{{ item.title }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      overlaystatus: false,
      links: [
        {
          url: "/memberorder",
          title: "查詢訂單資料",
        },
        {
          url: "/memberrevise",
          title: "修改會員資料",
        },
        {
          url: "/changepassword",
          title: "變更密碼",
        },
        {
          url: "/bindother",
          title: "綁定其他帳號",
        },
        {
          url: "/logout",
          title: "會員登出",
        },
      ],
    };
  },
};
</script>
