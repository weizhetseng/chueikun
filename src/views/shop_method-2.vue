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
            <RouterLink to="/shop_method-1">訂購方式</RouterLink>
            <RouterLink to="/shop_method-2" class="active">付款方式</RouterLink>
            <RouterLink to="/shop_method-3">訂購須知</RouterLink>
          </div>
          <div class="shop_content">
            <h4>付款方式</h4>
            <p>貨到付款 <span class="text-danger">(免手續費)</span></p>
            <p>匯款 (須於到貨日前2-3天的15點前完成)，(不含例假日)</p>
            <p>銀行代碼: OOO</p>
            <p>銀行帳號: OOOOOOOOOOOOO</p>
            <p>收款人: XXX</p>
          </div>
          <div class="button_area">
            <RouterLink to="" class="button" @click="this.$router.back()"
              >返回上一頁</RouterLink
            >
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
    return {};
  },
  components: { btnBanner, btnProductList },
};
</script>
