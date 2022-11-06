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
        <div class="list d-lg-block d-none">
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

          <div>
            <div class="title_group">
              <h3>熱門系列</h3>
              <div class="sm_box_group">
                <div class="sm_box box1"></div>
                <div class="sm_box box2"></div>
                <div class="sm_box box3"></div>
              </div>
            </div>
            <p>Hot &nbsp series</p>
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
