<template>
  <div class="banner">
    <img
      class="banner_img"
      src="../assets/image/banner/banner_member.png"
      alt=""
    />
    <btnBanner></btnBanner>
  </div>
  <div class="container register">
    <ul class="breadcrumb">
      <li>
        <RouterLink to="/">
          <img src="../assets/image/other/home.png" alt="" />
        </RouterLink>
      </li>
      <li class="active">會員註冊</li>
    </ul>

    <div class="title">
      <h2>會員註冊</h2>
      <p>Sign &nbsp Up</p>
    </div>
    <form action="">
      <div class="form_style">
        <p class="text-danger">*為必填項目</p>
        <div class="space"></div>
      </div>
      <div class="form_style">
        <label for=""> <span class="text-danger">*</span>手機號碼 </label>
        <div class="captcha_input">
          <input type="text" placeholder="請輸入手機號碼" />
          <a href="" class="captcha">發送驗證碼</a>
        </div>
      </div>
      <div class="form_style">
        <label for=""><span class="text-danger">*</span> 驗證碼 </label>
        <div class="captcha_input">
          <input type="text" placeholder="請輸入手機驗證碼" />
          <a href="" class="captcha">重發驗證碼(59)</a>
        </div>
      </div>
      <div class="form_style">
        <label for=""> <span class="text-danger">*</span>E-mail </label>
        <div class="captcha_input">
          <input type="text" placeholder="請輸入E-mail" />
          <a href="" class="captcha">發送驗證碼</a>
        </div>
      </div>
      <div class="form_style">
        <label for=""><span class="text-danger">*</span> 驗證碼 </label>
        <div class="captcha_input">
          <input type="text" placeholder="請輸入E-mail信驗證碼" />
          <a href="" class="captcha">重發驗證碼(59)</a>
        </div>
      </div>
      <div class="form_style">
        <label for=""> <span class="text-danger">*</span>密碼 </label>
        <input
          type="text"
          placeholder="請輸入4~12 個字元，請勿使用空白或「＠ 」等特殊符號"
        />
      </div>
      <div class="form_style">
        <label for=""> <span class="text-danger">*</span>確認密碼 </label>
        <input type="text" placeholder="請再輸入一次密碼" />
      </div>
      <div class="form_style">
        <label for=""> <span class="text-danger">*</span>姓名 </label>
        <input type="text" placeholder="請輸入姓名" />
      </div>
      <div class="form_style sex">
        <label for="">性別 </label>
        <div class="sex_option">
          <input type="radio" />男 <input type="radio" />女
        </div>
      </div>
      <div class="form_style date">
        <label for="">生日 </label>
        <div class="date_area">
          <input type="date" />
        </div>
      </div>
      <div class="form_style">
        <label for="">電子郵件 </label>
        <input type="text" placeholder="請輸入電子信箱" />
      </div>
      <div class="form_style">
        <label for="">市話 </label>
        <input type="text" placeholder="請輸入市話號碼" />
      </div>
      <div class="form_style">
        <label for="">聯絡地址 </label>
        <div class="address_area">
          <div class="select_area">
            <select name="" id="" class="city">
              <option value="">縣市</option>
            </select>
            <select name="" id="" class="country">
              <option value="">鄉鎮市區</option>
            </select>
            <select name="" id="" class="street">
              <option value="">街道名稱</option>
            </select>
          </div>
          <input type="text" class="address" placeholder="請輸入詳細地址" />
        </div>
      </div>
      <div class="button_area">
        <RouterLink to="" class="button">清除</RouterLink>
        <RouterLink to="" class="button">送出</RouterLink>
      </div>
    </form>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  components: { btnBanner },
};
</script>
