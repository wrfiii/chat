<template>
  <div class="title">
    <div>公共(1)</div>
    <div class="u-info">
      <div
        class="u-img"
        :style="{ backgroundImage:isLogin?'url(' + userFrom.imgSrc + ')':'' }"
      ></div>
      <div class="u-name">
        {{ isLogin ? userFrom.userName : "" }}
      </div>
    </div>
  </div>
</template>

<script>
import {
  setup,
  ref,
  reactive,
  onMounted,
  provide,
  computed,
  inject,
  watch,
} from "vue";

export default {
  setup() {
    let userFrom = inject("userFrom");
    let isLogin = inject("isLogin");

    return {
      userFrom,
      isLogin,
    };
  },
};
</script>

<style lang='scss'>
.title {
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-left: 20px;
  font-weight: bold;
  font-family: "微软雅黑";
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  .u-info {
    display: flex;
    align-items: center;
    .u-img {
      width: 28px;
      height: 28px;
      background-size: cover;
      border-radius: 50%;
    }
    .u-name {
      font-size: 16px;
      margin-left: 8px;
      color: #f56c6c;
    }
  }
}
</style>