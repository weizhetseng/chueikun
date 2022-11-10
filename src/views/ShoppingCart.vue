<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/img/banner/v1/banner-cart.jpg"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container shopping_cart">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/img/global/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">購物車</li>
      </ul>

      <div class="title">
        <h2>購物車</h2>
        <p>Shopping &nbsp Cart</p>
      </div>
      <h3>您的購物清單如下</h3>
      <div class="table product_table">
        <div class="thead">
          <div class="tr">
            <div class="th">商品名稱</div>
            <div class="th">數量</div>
            <div class="th">單價</div>
            <div class="th">合計</div>
            <div class="th"></div>
          </div>
        </div>
        <div class="tbody">
          <div class="tr" v-for="item in order" :key="item.tag">
            <div class="td">
              <div class="product_item">
                <img :src="imageUrl(item.imgUrl)" alt="" />
                <div>
                  {{ item.title }}
                  <div class="delivery">
                    <p>運送方式:</p>
                    <p>{{ item.deliver }}</p>
                  </div>
                  <div class="code">
                    <p>編號:</p>
                    <p>{{ item.tag }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="td"><btncalculate></btncalculate></div>
            <div class="td">{{ item.price }}元</div>
            <div class="td item_total">{{ item.total }}元</div>
            <div class="td">
              <a href="" class="delete">
                <span class="material-symbols-outlined"> delete </span>
                刪除
              </a>
            </div>
          </div>
          <div class="tr product_price">
            <div class="td">
              <div>
                <p>商品總金額</p>
                <p>活動折扣</p>
              </div>
            </div>
            <div class="td"></div>
            <div class="td"></div>
            <div class="td"></div>
            <div class="td">
              <div>
                <p>14,260元</p>
                <p>1,711元</p>
              </div>
            </div>
          </div>
          <div class="tr product_total">
            <div class="td">結帳總金額</div>
            <div class="td"></div>
            <div class="td"></div>
            <div class="td"></div>
            <div class="td">12,549元</div>
          </div>
        </div>
      </div>
      <div class="button_area">
        <RouterLink to="/shop_method-1" class="button">繼續購物</RouterLink>
        <RouterLink to="/visitorpay" class="button">訪客結帳</RouterLink>
        <RouterLink to="/memberpay" class="button">會員結帳</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btncalculate from "../components/btn_calculate.vue";
export default {
  data() {
    return {
      order: [
        {
          imgUrl: "product05.jpg",
          title: "[新品]肉鬆小脆餅",
          deliver: " 一般運送",
          tag: "10110",
          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "product06.jpg",
          title: "麻辣豬肉片",
          deliver: " 一般運送",
          tag: "10318",
          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "product07.jpg",
          title: "巴西嘉年華-咖啡豆",
          deliver: " 一般運送",
          tag: "11014",
          price: "1480",
          total: "1480",
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
  components: { btnBanner, btncalculate },
};
</script>
