<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/image/banner/banner_shopping.png"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container product">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">線上購物</li>
      </ul>

      <div class="title">
        <h2>線上購物</h2>
        <p>Promotional &nbsp Items</p>
      </div>
      <div class="row">
        <div class="list">
          <btnProductList></btnProductList>
        </div>
        <div class="main">
          <div class="shop_info_link">
            <RouterLink to="/shop_method-1" class="active">訂購方式</RouterLink>
            <RouterLink to="/shop_method-2">付款方式</RouterLink>
            <RouterLink to="/shop_method-3">訂購須知</RouterLink>
          </div>
          <div class="shop_methods">
            <RouterLink to="">
              網路訂購
              <img src="../assets/image/other/computer-line.png" alt="" />
            </RouterLink>
            <RouterLink to="">
              電話訂購
              <img src="../assets/image/other/telephone-fill.png" alt="" />
            </RouterLink>
            <RouterLink to="">
              我要開團
              <img src="../assets/image/other/people-group-solid.png" alt="" />
            </RouterLink>
          </div>

          <div class="title_group">
            <div>
              <h3>熱門系列</h3>
              <div class="sm_box_group">
                <div class="sm_box box1"></div>
                <div class="sm_box box2"></div>
                <div class="sm_box box3"></div>
              </div>
            </div>
            <p>Hot &nbsp series</p>
          </div>
          <div class="expand_card">
            <div class="options">
              <div
                v-for="(item, index) in hots"
                :key="index"
                class="option"
                :class="activeClass == index ? 'active' : ''"
                @click="openImg(index)"
                :style="{
                  'background-image': 'url(' + imageUrl(item.url) + ')',
                }"
              >
                <div class="info_active">
                  <img
                    class="info_img"
                    src="../assets/image/other/logotag.png"
                    alt=""
                  />
                  <div class="info_text">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.text }}</p>
                  </div>
                </div>
                <div class="info">
                  <img
                    class="info_img"
                    src="../assets/image/other/logotag.png"
                    alt=""
                  />
                  <h3>{{ item.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btnProductList from "@/components/btn_ProductList.vue";
export default {
  data() {
    return {
      activeClass: 0, // 0為默認選擇第一個，-1為不選擇
      hots: [
        {
          url: "hot_img1.jpg",
          title: "肉鬆系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "hot_img2.png",
          title: "豬肉系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "hot_img3.png",
          title: "魚製品系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "hot_img4.jpg",
          title: "休閒食品系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "hot_img5.jpg",
          title: "餅乾系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
      ],
    };
  },
  methods: {
    openImg(item) {
      this.activeClass = item;
    },
    imageUrl(name) {
      return new URL(`/src/assets/image/other/${name}`, import.meta.url).href;
    },
  },
  components: { btnBanner, btnProductList },
};
</script>
