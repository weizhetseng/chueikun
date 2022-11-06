<template>
  <div class="page">
    <div class="banner">
      <img
        class="banner_img"
        src="../assets/image/banner/banner_member.png"
        alt=""
      />
      <btnBanner></btnBanner>
    </div>
    <div class="container memberorder">
      <ul class="breadcrumb">
        <li>
          <RouterLink to="/">
            <img src="../assets/image/other/home.png" alt="" />
          </RouterLink>
        </li>
        <li class="active">會員專區</li>
        <li class="active">查詢訂單資料</li>
      </ul>

      <div class="title">
        <h2>會員專區</h2>
        <p>Members &nbsp Only</p>
      </div>
      <div class="row">
        <div class="list d-lg-block d-none">
          <btnMemberList></btnMemberList>
        </div>
        <div class="main">
          <table>
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>訂購日期</th>
                <th>訂單金額</th>
                <th>訂單狀態</th>
              </tr>
            </thead>
            <tbody v-for="item in order_data" :key="item.code">
              <tr>
                <td>{{ item.code }}</td>
                <td>{{ item.date }}</td>
                <td>${{ item.price }}</td>
                <td>
                  <RouterLink to="/MemberOrderDetail">{{
                    item.status
                  }}</RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnBanner from "@/components/btn_Banner.vue";
import btnMemberList from "@/components/btn_MemberList.vue";
export default {
  data() {
    return {
      order_data: [
        {
          code: "L20220812003",
          date: "2022/08/31 12:00",
          price: "1000",
          status: "未付款",
        },
        {
          code: "L20220812003",
          date: "2022/08/31 12:00",
          price: "1000",
          status: "未付款",
        },
        {
          code: "L20220812003",
          date: "2022/08/31 12:00",
          price: "1000",
          status: "未付款",
        },
        {
          code: "L20220812003",
          date: "2022/08/31 12:00",
          price: "1000",
          status: "未付款",
        },
        {
          code: "L20220812003",
          date: "2022/08/31 12:00",
          price: "1000",
          status: "已付款",
        },
      ],
    };
  },
  components: { btnBanner, btnMemberList },
};
</script>
