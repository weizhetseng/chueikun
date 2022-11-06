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
          url: "/productitem",
        },
        {
          title: "皇啡系列",
          url: "/productitem",
        },
        {
          title: "冷凍系列",
          url: "/productitem",
        },
        {
          title: "冷藏系列",
          url: "/productitem",
        },
        {
          title: "肉鬆系列",
          url: "/productitem",
        },
        {
          title: "豬肉系列",
          url: "/productitem",
        },
        {
          title: "牛肉系列",
          url: "/productitem",
        },
        {
          title: "堅果系列",
          url: "/productitem",
        },
        {
          title: "魚製品系列",
          url: "/productitem",
        },
        {
          title: "蜜餞系列",
          url: "/productitem",
        },
        {
          title: "休閒食品系列",
          url: "/productitem ",
        },
        {
          title: "豆干系列(非基因改造)",
          url: "/productitem",
        },
        {
          title: "穀物系列",
          url: "/productitem",
        },
        {
          title: "沖泡系列",
          url: "/productitem",
        },
        {
          title: "餅乾系列",
          url: "/productitem",
        },
        {
          title: "禮盒系列",
          url: "/productitem",
        },
        {
          title: "紙袋+塑膠袋加購",
          url: "/productitem",
        },
      ],
    };
  },
};
</script>
