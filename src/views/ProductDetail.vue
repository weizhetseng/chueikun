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
    <div class="container productdetail">
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
          <div class="row">
            <div class="col-lg-6 thumb_area">
              <swiper
                :spaceBetween="20"
                :modules="[Thumbs]"
                :thumbs="{ swiper: thumbsSwiper }"
                class="main_swiper"
              >
                <swiper-slide
                  v-for="(item, index) in product_swiper"
                  :key="item.img"
                >
                  <div>
                    <div class="tag">
                      <p>經典熱銷</p>
                      <p>人氣推薦</p>
                    </div>
                    <img :src="imageUrl(item.img)" />

                    <span
                      class="material-icons-outlined"
                      data-bs-toggle="modal"
                      data-bs-target="#lightbox"
                      @click="toggle(item)"
                    >
                      search
                    </span>
                  </div>
                </swiper-slide>
              </swiper>

              <swiper
                :spaceBetween="10"
                :slidesPerView="3"
                :modules="[Thumbs]"
                watch-slides-progress="true"
                @swiper="setThumbsSwiper"
                class="thumb_swiper"
              >
                <swiper-slide v-for="item in product_swiper" :key="item.img">
                  <img :src="imageUrl(item.img)" />
                </swiper-slide>
              </swiper>
            </div>
            <div class="col-lg-6 detail_info">
              <h4>[新品]肉鬆小脆餅</h4>
              <p class="price">單價150元</p>
              <div class="coupon">
                <span>適用優惠</span>
                <p>滿1500享免運</p>
              </div>
              <p class="info_text">
                【產品特色】獨特調製法，香酥鬆脆的口感，
                令人一口接著一口，難以停口的美味。
              </p>
              <div class="count">數量<btncalculate></btncalculate></div>
              <a href="" class="customer">客服聊聊</a>
              <div class="button_area">
                <a href="" class="shop-cart">放入購物車</a>
                <a href="" class="shopping">立即購買</a>
              </div>
            </div>
          </div>

          <div class="feature">
            <div class="title_group">
              <div>
                <h3>產品規格</h3>
                <div class="sm_box_group">
                  <div class="sm_box box1"></div>
                  <div class="sm_box box2"></div>
                  <div class="sm_box box3"></div>
                </div>
              </div>
              <p>feature of product</p>
            </div>
            <div class="col-lg-6">
              <p>
                成分:無粉肉鬆(上等新鮮豬後腿肉(台灣).蔗糖.純釀醬油)、
                鳳片粉、馬鈴薯澱粉、海藻糖、蒟蒻粉、棕櫚油
              </p>
              <p>淨重:90公克±3公克(約14個)</p>
              <p>保存期限:4個月(未開封)</p>
              <p>原產地:台灣</p>
              <p>
                過敏原資訊:本產品含有大豆及麩質之穀類製品，
                對特殊過敏體質者可能產生過敏症狀
              </p>
            </div>
          </div>
          <div>
            <div class="swiperBox">
              <div class="title_group">
                <div>
                  <h3>其他顧客也購買這些商品</h3>
                  <div class="sm_box_group">
                    <div class="sm_box box1"></div>
                    <div class="sm_box box2"></div>
                    <div class="sm_box box3"></div>
                  </div>
                </div>
                <p>Other customers also bought these items</p>
              </div>

              <swiper
                navigation
                :slidesPerView="1"
                :spaceBetween="10"
                :breakpoints="{
                  '440': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }"
                :modules="modules"
              >
                <swiper-slide v-for="item in product" :key="item.title">
                  <div class="product_card">
                    <img :src="imageUrl(item.img)" alt="" />
                    <div class="card_text">
                      <div class="tag">
                        <span>門市限定</span>
                      </div>
                      <h4>{{ item.title }}</h4>
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
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="lightbox"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img :src="imageUrl(showList.img)" alt="" />
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
import btncalculate from "@/components/btn_calculate.vue";

import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { addClass } from "dom7";

export default {
  data() {
    return {
      overlaystatus: false,
      showList: {},
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
      product_swiper: [
        {
          img: "product01.jpg",
        },
        {
          img: "product02.png",
        },
        {
          img: "product03.png",
        },
      ],
    };
  },
  methods: {
    imageUrl(name) {
      return new URL(`/src/assets/img/product-item/${name}`, import.meta.url)
        .href;
    },
    toggle(item) {
      this.showList = { ...item };
    },
  },
  components: { btnBanner, btnProductList, btncalculate, Swiper, SwiperSlide },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Navigation],
    };
  },
};
</script>
