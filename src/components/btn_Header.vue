<template>
  <nav class="navbar navbar-expand-lg" :class="{ active: headerStatus }">
    <div class="container-fluid">
      <h1>
        <RouterLink to="/">垂坤食品有限公司</RouterLink>
      </h1>
      <!-- 漢堡選單 -->
      <div class="ham_btn navbar-toggler" @click="openMenu()">
        <div class="ham"></div>
        <div class="ham"></div>
        <div class="ham"></div>
      </div>
      <!-- pc版導覽列 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="page_link">
          <li class="nav-item" v-for="item in link" :key="item.title">
            <RouterLink :to="item.url" class="nav-link">
              <p>{{ item.title }}</p>
            </RouterLink>
          </li>
        </ul>
        <ul class="box_link">
          <li class="box1">
            <RouterLink to="" data-bs-toggle="modal" data-bs-target="#liar">
              <img src="../assets/image/header/user01.png" alt="" />
              <div>
                <p>詐騙手法</p>
                <p>大公開</p>
              </div>
            </RouterLink>
          </li>
          <li class="box2">
            <RouterLink to="/shopping_cart">
              <span>2</span>
              <img src="../assets/image/header/cart.png" alt="" />
              <p>購物車</p>
            </RouterLink>
          </li>
          <li class="box3">
            <RouterLink to="/login">
              <img src="../assets/image/header/user02.png" alt="" />
              <p>會員專區</p>
            </RouterLink>
          </li>
        </ul>
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
          <h5 class="modal-title" id="liarLabel">詐騙手法大公開</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
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
  <!-- 小畫面側選單 -->
  <div class="mobile" :class="{ active: mobileStatus }">
    <div>
      <label for="">
        <input type="text" placeholder="關鍵字商品搜尋" />
        <span class="material-icons-outlined"> search </span>
      </label>
      <ul>
        <li class="page_link">
          <RouterLink
            to="/news"
            class="nav-link drop_link"
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
        <li class="page_link">
          <RouterLink to="/about" class="nav-link">關於垂坤</RouterLink>
        </li>
        <li class="page_link">
          <RouterLink
            to="/product"
            class="nav-link drop_link"
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
        <li class="page_link">
          <RouterLink to="/location" class="nav-link">營業據點</RouterLink>
        </li>
        <li class="page_link">
          <a href="#" class="nav-link">訂單下載</a>
        </li>
      </ul>
    </div>

    <ul>
      <li>
        <RouterLink to="/login" class="down_link link1">
          會員專區
          <img src="../assets/image/header/user02.png" alt="" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/shopping_cart" class="down_link link2">
          購物車
          <img src="../assets/image/header/cart.png" alt="" />
          <span>0</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to=""
          data-bs-toggle="modal"
          data-bs-target="#liar"
          class="down_link link3"
        >
          詐騙手法大公開
          <img src="../assets/image/header/user01.png" alt="" />
        </RouterLink>
      </li>
    </ul>
  </div>
  <!-- 小畫面遮罩 -->
  <div
    class="mobile_mask"
    :class="{ active: mobileStatus }"
    @click="openMenu()"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      headerStatus: false,
      mobileStatus: false,
      link: [
        {
          url: "/news",
          title: "最新消息",
        },
        {
          url: "/about",
          title: "關於垂坤",
        },
        {
          url: "/product",
          title: "線上購物",
        },
        {
          url: "/location",
          title: "營業據點",
        },
        {
          url: "",
          title: "訂單下載",
        },
      ],
    };
  },
  methods: {
    scrollTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 100) {
        this.headerStatus = true;
      } else {
        this.headerStatus = false;
      }
    },
    openMenu() {
      this.mobileStatus = !this.mobileStatus;
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollTop);
  },
};
</script>
