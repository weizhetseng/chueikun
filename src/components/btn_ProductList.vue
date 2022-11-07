<template>
  <ul class="product_list">
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
          url: "/product ",
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
