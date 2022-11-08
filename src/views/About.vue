<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/image/banner/banner_about.png"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container about">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">關於垂坤</li>
      </ul>

      <div class="title">
        <h2>關於垂坤</h2>
        <p>ABOUT &nbsp US</p>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <h3>細火慢燉，精心烘培</h3>
          <p>
            垂坤食品位於苗栗苑裡市場旁，為在地深耕經營的肉乾肉鬆店，垂坤於民國74年成立，
            垂坤草創時期老闆和員工只有4人，老闆秉持著為完成幼時的夢想，垂坤食品從選自合
            格認證的上選豬肉，到遵循古法細火慢燉、精心烘焙，為的就是能把好的、最新鮮的產
            品讓更多人分享及滿意。
          </p>
          <p>
            專營各式伴手禮，肉乾、肉鬆、肉條、肉角、香腸、魷魚絲…等各式苑裡名產。
          </p>
          <p>
            <span>垂坤食品</span
            >創業以來秉持著誠信的經營理念，服務至上的態度，永續經營的信念，不僅在價位
            及品質上，都絕對能為您帶來最合乎實質的效益，加上垂坤肉鬆近幾年來累積的專業經驗，及
            因應目前市場上的需求，一直不斷的求新求變，就是為了滿足客戶的各式需求，讓垂坤肉鬆能
            提供客戶最優質的服務。
          </p>
        </div>
        <div class="col-xl-6 img_area">
          <img src="../assets/image/about/about01.jpg" alt="" />
          <img class="sm_img" src="../assets/image/about/about02.jpg" alt="" />
        </div>
      </div>
      <div class="button_area">
        <RouterLink to="/" class="button">返回上一頁</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  components: { btnBanner },
};
</script>
