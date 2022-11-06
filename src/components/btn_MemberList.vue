<template>
  <ul class="member_list">
    <li v-for="item in links" :key="item.title">
      <RouterLink :to="item.url">{{ item.title }}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
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
