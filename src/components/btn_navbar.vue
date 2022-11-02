<template>
  <nav class="navbar navbar-expand-lg" :class="{ active: navbarstatus }">
    <div class="container-fluid">
      <h1>
        <RouterLink to="/">垂坤食品有限公司</RouterLink>
      </h1>

      <div class="ham_btn navbar-toggler" @click="openMenu">
        <div class="ham"></div>
        <div class="ham"></div>
        <div class="ham"></div>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/news" class="nav-link">最新消息</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">關於垂坤</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/product" class="nav-link">線上購物</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/location" class="nav-link">營業據點</RouterLink>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">訂單下載</a>
          </li>
        </ul>
        <div class="box">
          <div class="box_link link1">
            <RouterLink to="" data-bs-toggle="modal" data-bs-target="#liar">
              <img src="../assets/image/other/user01.png" alt="" />
              詐騙手法
            </RouterLink>
          </div>
          <div class="box_link link2">
            <RouterLink to="/shopping_cart">
              <span>0</span>
              <img src="../assets/image/other/cart.png" alt="" />
              購物車
            </RouterLink>
          </div>
          <div class="box_link link3">
            <RouterLink to="/login">
              <img src="../assets/image/other/user02.png" alt="" />
              會員專區
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- 詐騙手法彈出視窗 -->
  <div
    class="modal fade"
    id="liar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="liarLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div>
            <h5 class="modal-title" id="liarLabel">詐騙手法大公開</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <p>
            常見的詐騙話術：疏失設定成批發商、簽單簽錯<br />
            疏失升級為ＶＩＰ、疏失設定為分期付款將被連續扣款，<br />
            如不需要者，要去ＡＴＭ解除設定才不會被扣款。<br />
            本公司全面採「貨到付款」，<br />
            不會主動要求客人操作ＡＴＭ解除設定或匯款<br />
            近日詐騙案件盛行，詐騙集團會以任何名義要求您<br />
            去ATM進行匯款動作，提醒您接到開頭為+886國際電話<br />
            千萬不要上當，若有上列情事，請記下來電話號碼，<br />
            並撥打反詐騙電話專線165報案。<br />
            ～～～垂坤不會主動致電給客人要求匯款，<br />
            因垂坤貨品全面採貨到付款。<br />
            ～～～不會主動要求客人操作ＡＴＭ解除設定或匯款
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- 手機版側選單 -->
  <div id="menu" :class="{ active: menustatus }">
    <ul>
      <li class="nav-item">
        <label for="">
          <input type="text" placeholder="關鍵字商品搜尋" />
          <span class="material-icons-outlined"> search </span>
        </label>
      </li>
      <li class="nav-item">
        <RouterLink
          to="/news"
          class="nav-link down_link"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          最新消息
        </RouterLink>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">最新消息</a></li>
          <li><a class="dropdown-item" href="#">營業時間</a></li>
          <li><a class="dropdown-item" href="#">食品檢驗報告</a></li>
          <li><a class="dropdown-item" href="#">食品工廠登記字號</a></li>
          <li><a class="dropdown-item" href="#">食品業者登記字號</a></li>
          <li><a class="dropdown-item" href="#">食品責任保險單</a></li>
          <li><a class="dropdown-item" href="#">定型化契約</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link">關於垂坤</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
          to="/product"
          class="nav-link down_link"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          線上購物
        </RouterLink>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">呷卡鶴系列</a></li>
          <li><a class="dropdown-item" href="#">皇啡系列</a></li>
          <li><a class="dropdown-item" href="#">冷凍系列</a></li>
          <li><a class="dropdown-item" href="#">冷藏系列</a></li>
          <li><a class="dropdown-item" href="#">肉鬆系列</a></li>
          <li><a class="dropdown-item" href="#">豬肉系列</a></li>
          <li><a class="dropdown-item" href="#">牛肉系列</a></li>
          <li><a class="dropdown-item" href="#">堅果系列</a></li>
          <li><a class="dropdown-item" href="#">魚製品系列</a></li>
          <li><a class="dropdown-item" href="#">蜜餞系列</a></li>
          <li><a class="dropdown-item" href="#">休閒食品系列</a></li>
          <li><a class="dropdown-item" href="#">豆干系列(非基因改造</a></li>
          <li><a class="dropdown-item" href="#">穀物系列</a></li>
          <li><a class="dropdown-item" href="#">沖泡系列</a></li>
          <li><a class="dropdown-item" href="#">禮盒系列</a></li>
          <li><a class="dropdown-item" href="#">紙袋+塑膠袋加購</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <RouterLink to="/location" class="nav-link">營業據點</RouterLink>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">訂單下載</a>
      </li>
    </ul>
    <ul>
      <li class="nav-item">
        <RouterLink to="/login" class="nav-link other_link link3">
          會員專區
          <img src="../assets/image/other/user02.png" alt="" />
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/shopping_cart" class="nav-link other_link link2">
          購物車
          <img src="../assets/image/other/cart.png" alt="" />
          <span>0</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
          to=""
          data-bs-toggle="modal"
          data-bs-target="#liar"
          class="nav-link other_link link1"
        >
          詐騙手法
          <img src="../assets/image/other/user01.png" alt="" />
        </RouterLink>
      </li>
    </ul>
  </div>
  <div
    class="menu-mask"
    @click="openMenu"
    :class="{ active: menustatus }"
  ></div>
</template>
<script>
export default {
  data() {
    return {
      navbarstatus: false,
      menustatus: false,
    };
  },
  methods: {
    scrollTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        this.navbarstatus = true;
      } else {
        this.navbarstatus = false;
      }
    },
    openMenu() {
      this.menustatus = !this.menustatus;
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollTop);
  },
};
</script>
