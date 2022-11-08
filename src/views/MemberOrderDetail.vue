<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/image/banner/banner_member.png"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container memberorder">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
        <li class="active">查詢訂單資料</li>
      </ul>

      <div class="title">
        <h2>會員專區</h2>
        <p>Members &nbsp Only</p>
      </div>
      <div class="row">
        <div class="list">
          <btnMemberList></btnMemberList>
        </div>
        <div class="main">
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
                    <h4>訂購日期</h4>
                    <p>2022/8/25 12:00</p>
                  </div>
                  <div class="pay_list">
                    <h4>訂購編號</h4>
                    <p class="text-danger">L20220812003</p>
                  </div>
                </div>
                <div class="td">
                  <div class="pay_list">
                    <h4>訂單狀態</h4>
                    <p>訂單處理中</p>
                    <a href="" class="cancel">取消訂單</a>
                  </div>
                  <a href="" class="customer">客服聊聊</a>
                </div>
              </div>
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
                    <div>
                      <p>個人電子發票-寄送至訂購人電子信箱</p>
                      <span class="text-danger">發票將會於出貨後7天開立</span>
                    </div>
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
                    <img :src="item.imgUrl" alt="" />
                    <div>
                      {{ item.title }}
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
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btnMemberList from "@/components/btn_MemberList.vue";
export default {
  data() {
    return {
      order: [
        {
          imgUrl: "src/assets/image/product/shopping_car01.png",
          title: "[新品]肉鬆小脆餅",

          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "src/assets/image/product/shopping_car02.png",
          title: "麻辣豬肉片",

          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "src/assets/image/product/shopping_car03.png",
          title: "巴西嘉年華-咖啡豆",

          price: "1480",
          total: "1480",
        },
      ],
    };
  },
  components: { btnBanner, btnMemberList },
};
</script>
