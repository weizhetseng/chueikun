<template>
  <div class="home">
    <div class="banner">
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img
            class="banner_home"
            src="../assets/image/banner/banner.png"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="banner_home"
            src="../assets/image/banner/banner2.png"
            alt=""
          />
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      <btnBanner></btnBanner>
    </div>

    <div class="container-fluid hot_news_list">
      <div class="row">
        <div class="col-lg-6 hot_news_list_item">
          <div class="title">
            <h2>最新消息</h2>
            <p>Hot news</p>
          </div>
          <ul v-for="item in news" :key="item.title">
            <li>
              <img src="../assets/image/home/hot_news_tag.png" alt="" />
              <a href="#">
                <p>{{ item.title }}</p>
                <span>{{ item.date }}</span>
              </a>
            </li>
          </ul>
          <div class="button_area">
            <RouterLink to="/news" class="button">了解更多</RouterLink>
          </div>
        </div>
        <div class="col-lg-5 hot_news_list_img">
          <img src="../assets/image/home/home01.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="recommend_list">
        <div class="title">
          <h2>推薦商品</h2>
          <p>Recommended products</p>
        </div>
        <div class="type_btn">
          <ul>
            <li>
              <a href="" class="button02">肉鬆系列</a>
            </li>
            <li>
              <a href="" class="button02">豬肉系列</a>
            </li>
            <li>
              <a href="" class="button02">魚製品系列</a>
            </li>
            <li>
              <a href="" class="button02">休閒食品系列</a>
            </li>
            <li>
              <a href="" class="button02">餅乾系列</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="swiperBox">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :scrollbar="{
            hide: true,
          }"
          :navigation="true"
          :breakpoints="{
            '375': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="recommend_swiper"
        >
          <swiper-slide v-for="item in product" :key="item.title">
            <div class="product_item">
              <img :src="item.img" alt="" />
              <div class="card_text">
                <div class="tag">
                  <span>門市限定</span>
                </div>
                <h4>{{ item.title }}</h4>
                <p class="price">單價{{ item.price }}元</p>
                <div class="cal_btn">
                  <btncalculate></btncalculate>
                  <a href="">
                    <span class="material-icons-outlined"> shopping_cart </span>
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
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btncalculate from "../components/btn_calculate.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { Pagination } from "swiper";
import { Scrollbar } from "swiper";
import { Navigation } from "swiper";
import { EffectFade } from "swiper";
import { Autoplay } from "swiper";
export default {
  data() {
    return {
      news: [
        {
          title: "即日起至7/20,皇啡咖啡任兩包免運活動開跑~",
          date: "2022-06-20",
        },
        {
          title: "缺貨商品公告區",
          date: " 2022-07-04",
        },
        {
          title: "缺貨商品公告區",
          date: " 2022-07-04",
        },
      ],
      product: [
        {
          img: "/src/assets/image/product/product01.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "/src/assets/image/product/product02.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "/src/assets/image/product/product03.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "/src/assets/image/product/product04.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "/src/assets/image/product/product01.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "/src/assets/image/product/product02.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "/src/assets/image/product/product03.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
        {
          img: "/src/assets/image/product/product04.png",
          title: "[新品]肉鬆小脆餅",
          price: "150",
        },
      ],
    };
  },
  components: { btnBanner, Swiper, SwiperSlide, btncalculate },
  setup() {
    return {
      modules: [Pagination, Scrollbar, Navigation, EffectFade, Autoplay],
    };
  },
};
</script>
