<template>
  <div class="product_list">
    <div class="search">
      <div class="search_input">
        <input id="search" type="text" placeholder="關鍵字商品搜尋" />
      </div>
      <label for="search">
        <img src="../assets/image/other/search.png" alt="" />
      </label>
    </div>
    <ul>
      <li v-for="item in links" :key="item.title">
        <RouterLink :to="item.url">{{ item.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "呷卡鶴系列",
          url: "/product",
        },
        {
          title: "皇啡系列",
          url: "/product",
        },
        {
          title: "冷凍系列",
          url: "/product",
        },
        {
          title: "冷藏系列",
          url: "/product",
        },
        {
          title: "肉鬆系列",
          url: "/product",
        },
        {
          title: "豬肉系列",
          url: "/product",
        },
        {
          title: "牛肉系列",
          url: "/product",
        },
        {
          title: "堅果系列",
          url: "/product",
        },
        {
          title: "魚製品系列",
          url: "/product",
        },
        {
          title: "蜜餞系列",
          url: "/product",
        },
        {
          title: "休閒食品系列",
          url: "/product",
        },
        {
          title: "豆干系列(非基因改造)",
          url: "/product",
        },
        {
          title: "穀物系列",
          url: "/product",
        },
        {
          title: "沖泡系列",
          url: "/product",
        },
        {
          title: "餅乾系列",
          url: "/product",
        },
        {
          title: "禮盒系列",
          url: "/product",
        },
        {
          title: "紙袋+塑膠袋加購",
          url: "/product",
        },
      ],
    };
  },
};
</script>
