<template>
  <div class="banner">
    <img
      class="banner_img"
      src="../assets/image/banner/banner_location.png   "
      alt=""
    />
    <btnBanner></btnBanner>
  </div>
  <div class="container location">
    <ul class="breadcrumb">
      <li>
        <RouterLink to="/">
          <img src="../assets/image/other/home.png" alt="" />
        </RouterLink>
      </li>
      <li class="active">營業據點</li>
    </ul>

    <div class="title">
      <h2>營業據點</h2>
      <p>Business &nbsp base</p>
    </div>
    <div class="row">
      <div class="col-lg-10">
        <div class="contact">
          <h3>全年無休，全台宅配</h3>
          <p>訂購專線：<span>037-867840</span></p>
          <p>傳真專線：<span>037-866407</span></p>
        </div>
        <table>
          <thead>
            <tr>
              <th>營業門市</th>
              <th>營業時間</th>
              <th>分店地址</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>垂坤食品-總店</td>
              <td>
                <div class="time">
                  <span class="material-icons"> watch_later </span>
                  07:00am ~ 22:00pm
                </div>
              </td>

              <td>
                <div class="address">
                  <span class="material-icons"> location_on </span>
                  地址:
                  <p>苗栗縣苑裡鎮大同88號(苑裡市場內)</p>
                </div>
              </td>
            </tr>
            <tr class="dash_bottom">
              <td colspan="3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.221899143101!2d120.65157221537125!3d24.443085467877143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346909682e30bbd5%3A0xd90bb85860e49db1!2z5Z6C5Z2k6aOf5ZOBIOiLkeijoee4veW6lw!5e0!3m2!1szh-TW!2stw!4v1665472149865!5m2!1szh-TW!2stw"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </td>
            </tr>
            <tr>
              <td>垂坤食品-旗艦店</td>
              <td>
                <div class="time">
                  <span class="material-icons"> watch_later </span>
                  08:00am ~ 21:00pm
                </div>
              </td>
              <td>
                <div class="address">
                  <span class="material-icons"> location_on </span>
                  地址:
                  <div>
                    <p>苗栗縣苑裡鎮山柑里8鄰77-16號</p>
                    <p>(國道三號苑裡交流道下100公尺)</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="dash_bottom">
              <td colspan="3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.495524964324!2d120.66542241537066!3d24.398846869610725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34690f1fb574de61%3A0x322265bd5fb0c738!2z5Z6C5Z2k6aOf5ZOBIOaXl-iJpuW6lw!5e0!3m2!1szh-TW!2stw!4v1665472196240!5m2!1szh-TW!2stw"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </td>
            </tr>
          </tbody>
        </table>
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
