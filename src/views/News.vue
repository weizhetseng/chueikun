<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/image/banner/banner_news.png"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container news">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">最新消息</li>
      </ul>

      <div class="title">
        <h2>最新消息</h2>
        <p>HOT &nbsp NEWS</p>
      </div>
      <div class="row">
        <ul class="col-lg-10">
          <li class="row news_card" v-for="item in news" :key="item.title">
            <img class="col-lg-6" :src="item.imgUrl" alt="" />
            <div class="col-lg-6">
              <span>{{ item.date }}</span>
              <div class="card_title">
                <div>news</div>
                <h4>{{ item.title }}</h4>
              </div>
              <p>{{ item.content }}</p>
              <RouterLink to="/newsdetail">
                了解更多
                <img src="../assets/image/other/coderwall.png" alt="" />
              </RouterLink>
            </div>
          </li>
        </ul>
        <ul class="col-2 d-lg-block d-none aside_list">
          <li>
            <RouterLink to="/news"> 最新消息 </RouterLink>
          </li>
          <li>
            <a href="" class="submenu-item">營業時間 </a>
          </li>
          <li>
            <a href="" class="submenu-item">食品檢驗報告 </a>
          </li>
          <li>
            <a href="" class="submenu-item">食品工廠登記字號</a>
          </li>
          <li>
            <a href="" class="submenu-item">食品業者登記字號 </a>
          </li>
          <li>
            <a href="" class="submenu-item">食品責任保險單 </a>
          </li>
          <li>
            <a href="" class="submenu-item">定型化契約 </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
export default {
  data() {
    return {
      news: [
        {
          date: "2022-07-28",
          imgUrl: "src/assets/image/news/news01.png",
          title: "皇啡咖啡-最超值的精品咖啡",
          content:
            "面像六背羊首各春動拉來往校飽玉能打冬服九貝自女青往能媽,孝斤那蛋只何兒,孝香綠乾哭春們即肉福國清甲、再金愛不功久己立讀欠反目同,玩金方而息英說？可百道念麼掃.讀水且加經香旦爪？年後丁新林着裏干食至個掃植又裝,成再門過住錯做個讀跟訴跟？元壯學唱頭加晚又五几個足口別戶姊南尾.",
        },
        {
          date: "2022-04-28",
          imgUrl: "src/assets/image/news/news02.png",
          title: "好評熱銷再推一波!!!皇啡咖啡任兩包免運!!!",
          content:
            "斤那蛋只何兒,孝香綠乾哭春們即肉福國清甲、再金愛不功久己立讀欠反目同,玩金方而息英說？可百道念麼掃.讀水且加經香旦爪？年後丁新林着裏干食至個掃植又裝,成再門過住錯做個讀跟訴跟？元壯學唱頭加晚又五几個足口別戶姊南尾.",
        },
        {
          date: "2022-03-28",
          imgUrl: "src/assets/image/news/news04.png",
          title: "呷卡好鮮魚精！",
          content:
            "即肉福國清甲、再金愛不功久己立讀欠反目同,玩金方而息英說？可百道念麼掃.讀水且加經香旦爪？年後丁新林着裏干食至個掃植又裝,成再門過住錯做個讀跟訴跟？元壯學唱頭加晚又五几個足口別戶姊南尾.",
        },
        {
          date: "2022-01-28",
          imgUrl: "src/assets/image/news/news03.png",
          title: "本店使用國產豬肉",
          content:
            "面像六背羊首各春動拉來往校飽玉能打冬服九貝自女青不功久己立讀欠反目同,玩金方而息英說？可百道念麼掃.讀水且加經香旦爪？年後丁新林着裏干食至個掃植又裝,成再門過住錯做個讀跟訴跟？元壯學唱頭加晚又五几個足口別戶姊南尾.",
        },
      ],
    };
  },
  components: { btnBanner },
};
</script>
