<template>
  <footer>
    <div class="container">
      <a href="/">
        <img src="../assets/img/logo/logo_2.png" alt="" />
      </a>
      <div>
        <ul>
          <li v-for="item in link" :key="item.title">
            <RouterLink :to="item.url" class="nav-link">
              <p>{{ item.title }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <div class="footer_contact">
          <h3>客服專線：</h3>
          <p>037-867840</p>
        </div>
        <div class="footer_contact">
          <h3>客服時間：</h3>
          <div>
            <p class="mb-2">周一至周五08:00~21:00</p>
            <p>周六08:00~18:00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyRight">
      <p>垂坤食品有限公司 © 2022 All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      link: [
        {
          url: "/news",
          title: "最新消息",
        },
        {
          url: "/about",
          title: "關於垂坤",
        },
        {
          url: "/location",
          title: "營業據點",
        },
        {
          url: "/login",
          title: "會員專區",
        },
        {
          url: "/product",
          title: "線上購物",
        },
        {
          url: "",
          title: "訂單下載",
        },
      ],
    };
  },
};
</script>
