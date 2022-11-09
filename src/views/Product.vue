<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/img/banner/v1/banner-shopping.jpg"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container productitem">
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
          <ul class="row">
            <li
              class="col-xl-3 col-md-4 col-sm-6"
              v-for="item in product"
              :key="item.title"
            >
              <div class="product_card">
                <img :src="imageUrl(item.img)" alt="" />
                <div class="card_text">
                  <div class="tag">
                    <span>門市限定</span>
                  </div>
                  <h4>
                    <RouterLink to="/productdetail">
                      {{ item.title }}</RouterLink
                    >
                  </h4>
                  <p class="price">單價{{ item.price }}元</p>
                  <div class="cal_btn">
                    <btncalculate></btncalculate>
                    <a href="">
                      <span class="material-icons-outlined">
                        shopping_cart
                      </span>
                      放入購物車
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <btnPagination></btnPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btnProductList from "@/components/btn_ProductList.vue";
import btncalculate from "../components/btn_calculate.vue";
import btnPagination from "../components/btn_pagination.vue";

export default {
  data() {
    return {
      product: [
        {
          img: "product01.jpg",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "product02.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "product03.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "product04.jpg",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "product01.jpg",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "product02.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "product03.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "product04.jpg",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
      ],
    };
  },
  methods: {
    imageUrl(name) {
      return new URL(`/src/assets/img/product-item/${name}`, import.meta.url)
        .href;
    },
  },
  components: { btnBanner, btnProductList, btncalculate, btnPagination },
};
</script>
