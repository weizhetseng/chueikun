<template>
  <div class="btn_calculate">
    <div class="calculate">
      <div class="calculate_btn" @click="subtract()">
        <i class="fa-solid fa-minus"></i>
      </div>
      <p class="calculate_num">{{ count }}</p>
      <div class="calculate_btn" @click="add()">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    subtract() {
      this.count -= 1;
      if (this.count < 0) {
        this.count = 0;
        alert("數量不可小於1");
      }
    },
    add() {
      this.count += 1;
    },
  },
};
</script>
