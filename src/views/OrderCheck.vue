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
    <div class="container ordercheck">
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
      <h3>請確認以下明細無誤，並下滑點擊"確認送出"，訂單才算成立喔!</h3>
      <div class="table_xl">
        <div class="pay_table">
          <div class="thead">
            <div class="tr">
              <div class="th">訂購明細</div>
              <div class="th"></div>
            </div>
          </div>
          <div class="tbody">
            <div class="tr">
              <div class="td">
                <div class="pay_list">
                  <h4>訂購人</h4>
                  <p>XXX</p>
                </div>
                <div class="pay_list">
                  <h4>Email</h4>
                  <p>jimlai@e-giant.com.tw</p>
                </div>
                <div class="pay_list">
                  <h4>手機號碼</h4>
                  <p>09123456789</p>
                </div>
                <div class="pay_list">
                  <h4>市話</h4>
                  <p>0412345689</p>
                </div>
                <div class="pay_list">
                  <h4>聯絡地址</h4>
                  <p>408臺中市南屯區文心路一段378號1F</p>
                </div>
              </div>
              <div class="td">
                <div class="pay_list">
                  <h4>收件人</h4>
                  <p>XXX</p>
                </div>
                <div class="pay_list">
                  <h4>Email</h4>
                  <p>jimlai@e-giant.com.tw</p>
                </div>
                <div class="pay_list">
                  <h4>手機號碼</h4>
                  <p>09123456789</p>
                </div>
                <div class="pay_list">
                  <h4>市話</h4>
                  <p>0412345689</p>
                </div>
                <div class="pay_list">
                  <h4>聯絡地址</h4>
                  <p>408臺中市南屯區文心路一段378號1F</p>
                </div>
              </div>
            </div>
            <div class="tr">
              <div class="td">
                <div class="pay_list">
                  <h4>付款方式</h4>
                  <p class="text-danger">貨到付款</p>
                </div>
                <div class="pay_list">
                  <h4>配送方式</h4>
                  <p class="text-danger">宅配</p>
                </div>
                <div class="pay_list">
                  <h4>發票資料</h4>
                  <p>個人電子發票-寄送至訂購人電子信箱</p>
                </div>
                <div class="pay_list">
                  <h4>商品小計</h4>
                  <p>14,260 元</p>
                </div>
                <div class="pay_list">
                  <h4>運費</h4>
                  <p>120 元</p>
                </div>
                <div class="pay_list">
                  <h4>優惠折扣</h4>
                  <p>1,711 元</p>
                </div>
                <div class="pay_list">
                  <h4>訂單總金額</h4>
                  <p class="text-danger">12,549 元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="table_sm">
        <div class="pay_table">
          <div class="thead">
            <div class="tr">
              <div class="th">訂購明細</div>
            </div>
          </div>
          <div class="tbody">
            <div class="tr">
              <div class="td">
                <div class="pay_list">
                  <h4>訂購人</h4>
                  <p>XXX</p>
                </div>
                <div class="pay_list">
                  <h4>Email</h4>
                  <p>jimlai@e-giant.com.tw</p>
                </div>
                <div class="pay_list">
                  <h4>手機號碼</h4>
                  <p>09123456789</p>
                </div>
                <div class="pay_list">
                  <h4>市話</h4>
                  <p>0412345689</p>
                </div>
                <div class="pay_list">
                  <h4>聯絡地址</h4>
                  <p>408臺中市南屯區文心路一段378號1F</p>
                </div>
              </div>
            </div>
            <div class="tr">
              <div class="td">
                <div class="pay_list">
                  <h4>收件人</h4>
                  <p>XXX</p>
                </div>
                <div class="pay_list">
                  <h4>Email</h4>
                  <p>jimlai@e-giant.com.tw</p>
                </div>
                <div class="pay_list">
                  <h4>手機號碼</h4>
                  <p>09123456789</p>
                </div>
                <div class="pay_list">
                  <h4>市話</h4>
                  <p>0412345689</p>
                </div>
                <div class="pay_list">
                  <h4>聯絡地址</h4>
                  <p>408臺中市南屯區文心路一段378號1F</p>
                </div>
              </div>
            </div>
            <div class="tr">
              <div class="td">
                <div class="pay_list">
                  <h4>付款方式</h4>
                  <p class="text-danger">貨到付款</p>
                </div>
                <div class="pay_list">
                  <h4>配送方式</h4>
                  <p class="text-danger">宅配</p>
                </div>
                <div class="pay_list">
                  <h4>發票資料</h4>
                  <p>個人電子發票-寄送至訂購人電子信箱</p>
                </div>
                <div class="pay_list">
                  <h4>商品小計</h4>
                  <p>14,260 元</p>
                </div>
                <div class="pay_list">
                  <h4>運費</h4>
                  <p>120 元</p>
                </div>
                <div class="pay_list">
                  <h4>優惠折扣</h4>
                  <p>1,711 元</p>
                </div>
                <div class="pay_list">
                  <h4>訂單總金額</h4>
                  <p class="text-danger">12,549 元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="table_xl">
        <div class="table product_table">
          <div class="thead">
            <div class="tr">
              <div class="th">商品名稱</div>
              <div class="th">數量</div>
              <div class="th">單價</div>
              <div class="th">合計</div>
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
              <div class="td">1</div>
              <div class="td">{{ item.price }}元</div>
              <div class="td item_total">{{ item.total }}元</div>
            </div>
          </div>
        </div>
      </div>
      <div class="table_sm">
        <div class="table product_table">
          <div class="thead">
            <div class="tr">
              <div class="th">購物清單</div>
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
                <div>數量:1</div>
                <div>單價:{{ item.price }}元</div>
                <div class="item_total">合計:{{ item.total }}元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button_area">
        <RouterLink to="" class="button" @click="this.$router.back()"
          >回上一步</RouterLink
        >
        <RouterLink to="/orderdone" class="button">確認送出</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  data() {
    return {
      order: [
        {
          imgUrl: "product05.jpg",
          title: "[新品]肉鬆小脆餅",

          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "product06.jpg",
          title: "麻辣豬肉片",

          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "product07.jpg",
          title: "巴西嘉年華-咖啡豆",

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
  components: { btnBanner },
};
</script>
