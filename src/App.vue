<template>
  <btnHeader></btnHeader>
  <RouterView />
  <div
    class="modal fade"
    id="main_modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="liarLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="modal-title" id="Label">職缺請上1111人力銀行查閱</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <h4>在此聲明</h4>
          <p>本公司</p>
          <h4 class="company">垂坤食品有限公司</h4>
          <p></p>
          <p><span>沒有</span>在其他平台刊登網路小幫手及其他職缺</p>
          <p>
            請小心留意不實內容<br />
            本公司的職缺及詳細工作內容，<br />
            請上1111人力銀行查閱
          </p>
        </div>
      </div>
    </div>
  </div>
  <top></top>
  <btnFooter></btnFooter>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import btnHeader from "@/components/btn_Header.vue";
import btnFooter from "@/components/btn_Footer.vue";
import top from "./components/btn_goToTop.vue";
import { Modal } from "bootstrap";

export default {
  methods: {
    processLoad() {
      const myModal = new Modal(document.getElementById("main_modal"));

      myModal.show();
    },
  },
  mounted() {
    window.addEventListener("load", () => this.processLoad());
  },
  components: { RouterLink, RouterView, btnHeader, btnFooter, top },
};
</script>
