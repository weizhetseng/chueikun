<template>
  <div class="banner">
    <img
      class="banner_img"
      src="../assets/image/banner/banner_shopping-car.png"
      alt=""
    />
    <btnBanner></btnBanner>
  </div>
  <div class="container memberpay">
    <ul class="breadcrumb">
      <li>
        <RouterLink to="/">
          <img src="../assets/image/other/home.png" alt="" />
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
        </div>
      </div>
      <div class="tbody">
        <div class="tr" v-for="item in order" :key="item.tag">
          <div class="td">
            <div class="product_item">
              <img :src="item.imgUrl" alt="" />
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
        <div class="tr product_price">
          <div class="td">
            <div>
              <p>商品總金額</p>
              <p>活動折扣</p>
            </div>
          </div>
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
          <div class="td">
            <div>
              <p>運費</p>
              <p>結帳總金額</p>
            </div>
          </div>
          <div class="td"></div>
          <div class="td"></div>
          <div class="td">
            <div>
              <p>120元</p>
              <p>12,549元</p>
            </div>
          </div>
        </div>
        <div class="tr">
          <div class="warnings">
            <span class="material-icons-outlined"> error </span>
            <p>
              常溫商品滿1500元享免運費，如需裝到第二箱需滿3000元享免運費，以此類推。<br />倘若客服評估後需加收運費，會再與您聯繫。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="table customer_table">
      <div class="thead">
        <div class="tr">
          <div class="th">訂購人資料</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr">
          <div class="td">
            <div class="form_style">
              <label for="">姓名</label>
              <input type="text" placeholder="請輸入姓名" />
            </div>
            <div class="form_style">
              <label for="">E-mail</label>
              <input type="text" placeholder="請輸入E-mail" />
            </div>
            <div class="form_style">
              <label for="">手機號碼</label>
              <input type="text" placeholder="請輸入手機號碼" />
            </div>
            <div class="form_style">
              <label for="">市話</label>
              <input type="text" placeholder="請輸入市話" />
            </div>
            <div class="form_style">
              <label for="">聯絡地址</label>
              <div class="address_area">
                <div class="select_area">
                  <select name="" id="" class="city">
                    <option value="">縣市</option>
                  </select>
                  <select name="" id="" class="country">
                    <option value="">鄉鎮市</option>
                  </select>
                  <select name="" id="" class="street">
                    <option value="">街道</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="address"
                  placeholder="請輸入聯絡地址"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table customer_table">
      <div class="thead">
        <div class="tr">
          <div class="th">收件人資料</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr">
          <div class="td">
            <div class="check">
              <label for="">
                <input type="checkbox" />
                同訂購人
              </label>
            </div>
            <div class="form_style">
              <label for="">姓名</label>
              <input type="text" placeholder="請輸入姓名" />
            </div>
            <div class="form_style">
              <label for="">E-mail</label>
              <input type="text" placeholder="請輸入E-mail" />
            </div>
            <div class="form_style">
              <label for="">手機號碼</label>
              <input type="text" placeholder="請輸入手機號碼" />
            </div>
            <div class="form_style">
              <label for="">市話</label>
              <input type="text" placeholder="請輸入市話" />
            </div>
            <div class="form_style">
              <label for="">聯絡地址</label>
              <div class="address_area">
                <div class="select_area">
                  <select name="" id="" class="city">
                    <option value="">縣市</option>
                  </select>
                  <select name="" id="" class="country">
                    <option value="">鄉鎮市</option>
                  </select>
                  <select name="" id="" class="street">
                    <option value="">街道</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="address"
                  placeholder="請輸入聯絡地址"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table customer_table">
      <div class="thead">
        <div class="tr">
          <div class="th">付款方式</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr">
          <div class="td">
            <div class="pay_methods">
              <label for="">
                <input type="radio" />
                ATM帳號匯款
              </label>
              <label for="">
                <input type="radio" />
                貨到付款
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table customer_table">
      <div class="thead">
        <div class="tr">
          <div class="th">選擇配送方式</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr">
          <div class="td">
            <div class="delivery_methods">
              <label for="">
                <input type="radio" />
                宅配到府
              </label>
              <p>
                *配送時間為白天，請填寫白天可以簽收的中文地址，以利宅配人員辨識與聯繫
              </p>
              <p>
                *因商品配送方式採用宅配到府，需要專人簽收，寄送地址請勿填寫郵政信箱
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="table customer_table">
      <div class="thead">
        <div class="tr">
          <div class="th">
            發票資料<br />
            <div class="d-flex">
              <span class="material-icons-outlined"> error </span
              >本公司全面採用電子發票
            </div>
          </div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr">
          <div class="td">
            <div class="receipt_data">
              <div class="receipt_title">個人電子發票</div>
              <div>
                <label for="">
                  <input type="radio" />
                  寄送至訂購人電子信箱
                </label>
                <label for="">
                  <input type="radio" />
                  載具號碼
                  <input type="text" value="/" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="tr">
          <div class="td">
            <div class="receipt_data">
              <div class="receipt_title">公司統編發票</div>
              <div>
                <div>
                  <label for="">
                    <input type="radio" />
                    寄送至訂購人電子信箱
                    <div>
                      <label for="">
                        統編
                        <input type="text" placeholder="請輸入統一編號" />
                      </label>
                    </div>
                  </label>
                </div>
                <div>
                  發票品項
                  <label for="">
                    <input type="radio" />
                    禮盒
                  </label>
                  <label for="">
                    <input type="radio" />
                    休閒食品
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button_area">
      <RouterLink to="" class="button">繼續購物</RouterLink>
      <RouterLink to="/ordercheck" class="button">下一步</RouterLink>
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
          imgUrl: "src/assets/image/product/shopping_car01.png",
          title: "[新品]肉鬆小脆餅",
          deliver: " 一般運送",
          tag: "10110",
          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "src/assets/image/product/shopping_car02.png",
          title: "麻辣豬肉片",
          deliver: " 一般運送",
          tag: "10318",
          price: "1480",
          total: "1480",
        },
        {
          imgUrl: "src/assets/image/product/shopping_car03.png",
          title: "巴西嘉年華-咖啡豆",
          deliver: " 一般運送",
          tag: "11014",
          price: "1480",
          total: "1480",
        },
      ],
    };
  },
  components: { btnBanner },
};
</script>
