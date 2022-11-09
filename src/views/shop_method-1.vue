<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/img/banner/v1/banner-shopinfo.jpg"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container product">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/img/global/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">線上購物</li>
      </ul>

      <div class="title">
        <h2>線上購物</h2>
        <p>Promotional &nbsp Items</p>
      </div>
      <div class="row">
        <div class="list d-none d-lg-block">
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
              <img src="../assets/img/product/computer-line.png" alt="" />
            </RouterLink>
            <RouterLink to="">
              電話訂購
              <img src="../assets/img/product/telephone-fill.png" alt="" />
            </RouterLink>
            <RouterLink to="">
              我要開團
              <img src="../assets/img/product/people-group-solid.png" alt="" />
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
                    src="../assets/img/product/logotag.png"
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
                    src="../assets/img/product/logotag.png"
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
      activeClass: 0,
      hots: [
        {
          url: "product01.jpg",
          title: "肉鬆系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "product04.jpg",
          title: "豬肉系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "product05.jpg",
          title: "魚製品系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "product06.jpg",
          title: "休閒食品系列",
          text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
        },
        {
          url: "product07.jpg",
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
      return new URL(`/src/assets/img/product-item/${name}`, import.meta.url)
        .href;
    },
  },
  components: { btnBanner, btnProductList },
};
</script>
