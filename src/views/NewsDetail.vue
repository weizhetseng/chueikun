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
      <div class="news_card detail">
        <div>
          <span> 2022-07-28</span>
          <div class="card_title">
            <div>news</div>
            <h4>皇啡咖啡-最超值的精品咖啡</h4>
          </div>
          <p>
            面像六背羊首各春動拉來往校飽玉能打冬服九：貝自女青往能媽，孝斤那蛋只何兒，孝香綠乾哭春們即肉福國清甲、再金愛不功久己立讀欠反目同，玩金方而
            息英說？可百道念麼掃。讀水且加經香旦爪？年後丁新林着裏干食至個掃植又裝，成再門過住錯做個讀跟訴跟？元壯學唱頭加晚又五几個足口別戶姊南尾。首
            几中牠干香掃兆筆多成杯雪書日師氣：鳥但已大毛即信害子「用信」放吉主孝民連拍步孝因長字家問。或爪功金欠會裝品，昌根常貝回！見明鴨。民西下圓還
            比竹去飽。母根共七夕真手國房何抄金每和刃躲，常草背士着位視娘示幼波貝工貓乍乞禾現更、面游千才呢丟松兒帶旁具早四？几央回路人各，走定冬火走片
            室。說斤您春服門月犬重那學河乍冒。
          </p>
          <div class="img_area">
            <img src="../assets/image/news/news05.png" alt="" />
            <img src="../assets/image/news/news06.png" alt="" />
          </div>
        </div>
      </div>
      <div class="button_area">
        <RouterLink to="" class="button" @click="this.$router.back()">
          返回列表
        </RouterLink>
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
