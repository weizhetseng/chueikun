<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/img/banner/v1/banner-login.jpg"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container login">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/img/global/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員登入</li>
      </ul>
      <div class="row">
        <div class="col-lg-6">
          <div class="title">
            <h2>會員登入</h2>
            <p>Member &nbsp Login</p>
          </div>
          <form action="">
            <div class="form_style">
              <label for="">
                <span class="icon material-icons"> mail </span>
                <p>帳號</p>
              </label>
              <input type="text" placeholder="請輸入手機號碼或電子信箱" />
            </div>
            <div class="form_style">
              <label for="">
                <span class="icon material-icons-outlined"> key </span>
                <p>密碼</p>
              </label>
              <input type="text" placeholder="請輸入密碼" />
            </div>
            <div class="check">
              <label for="loginCheck">
                <input id="loginCheck" type="checkbox" />
                記住我
              </label>
              <RouterLink to="/forgot">忘記密碼</RouterLink>
            </div>
            <div class="button_area">
              <RouterLink to="/memberonly" class="button">登入</RouterLink>
            </div>
          </form>
          <div class="other">
            <p>其他方式登入</p>
            <div>
              <RouterLink to="">
                <img src="../assets/img/global/facebook.png" alt="" />
              </RouterLink>
              <RouterLink to="">
                <img src="../assets/img/global/line.png" alt="" />
              </RouterLink>
              <RouterLink to="">
                <img src="../assets/img/global/google.png" alt="" />
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-lg-6 membership">
          <div class="title">
            <h2>會員註冊</h2>
            <p>Sign &nbsp Up</p>
          </div>
          <div class="membership_terms">
            <h3>會員條款說明</h3>
            <h4>一、會員服務條款</h4>
            <ol>
              <li>
                1.本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
              </li>
              <li>
                2.當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
              </li>
              <li>
                3.本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
              </li>
              <li>
                4.本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
              </li>
            </ol>
            <h4>二、隱私權保護</h4>
            <p>
              尊重並依據本網站「隱私權保護聲明」保護您的隱私(請參閱「隱私權保護聲明」條款)。
            </p>
            <h4>三、會員</h4>
            <ol>
              <li>
                1.使用本站所提供之會員服務時，於加入會員時所登錄之帳號及密碼使用之。
              </li>
              <li>
                2.會員須善盡帳號及密碼的使用與管理之責任。對於使用該會員之帳號及密碼(無關於會員本身或其他人)
                利用本站服務所造成或衍生之所有行為及結果，會員須自行負擔全部責任。
              </li>
              <li>
                3.會員之帳號及密碼遺失，或發現無故遭第三者盜用時，應立即通知本站連絡掛失，因未即時通知，
                導致本站無法有效防止及修改時，所造成的所有損失，會員應自負全責。
              </li>
              <li>
                4.每次結束使用本服務，執行會員之登出並關閉視窗，以確保您的會員權益。
              </li>
            </ol>
            <h4>一、會員服務條款</h4>
            <ol>
              <li>
                1.本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
              </li>
              <li>
                2.當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
              </li>
              <li>
                3.本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
              </li>
              <li>
                4.本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
              </li>
            </ol>
            <h4>二、隱私權保護</h4>
            <p>
              尊重並依據本網站「隱私權保護聲明」保護您的隱私(請參閱「隱私權保護聲明」條款)。
            </p>
            <h4>三、會員</h4>
            <ol>
              <li>
                1.使用本站所提供之會員服務時，於加入會員時所登錄之帳號及密碼使用之。
              </li>
              <li>
                2.會員須善盡帳號及密碼的使用與管理之責任。對於使用該會員之帳號及密碼(無關於會員本身或其他人)
                利用本站服務所造成或衍生之所有行為及結果，會員須自行負擔全部責任。
              </li>
              <li>
                3.會員之帳號及密碼遺失，或發現無故遭第三者盜用時，應立即通知本站連絡掛失，因未即時通知，
                導致本站無法有效防止及修改時，所造成的所有損失，會員應自負全責。
              </li>
              <li>
                4.每次結束使用本服務，執行會員之登出並關閉視窗，以確保您的會員權益。
              </li>
            </ol>
          </div>
          <label for="termsCheck">
            <input
              id="termsCheck"
              type="checkbox"
            />我已閱讀並同意提供以上資料供垂坤連繫使用。
          </label>
          <div class="button_area">
            <RouterLink to="/register" class="button">下一步</RouterLink>
          </div>
        </div>
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
