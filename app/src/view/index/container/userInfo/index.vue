<template>
  <div class="title">
    <div>公共(1)</div>
    <div class="u-info" v-if="isLogin">
      {{ userName }}
    </div>
  </div>
</template>

<script>
import { setup, ref, reactive, onMounted, provide, computed } from "vue";

export default {
  setup() {
    let isLogin = computed(() => {
      return localStorage.getItem("isLogin");
    });
    let userName = computed(() => {
      try {
        return JSON.parse(localStorage.getItem("user")).userName;
      } catch {
        return null;
      }
    });
    return {
      isLogin,
      userName,
    };
  },
};
</script>

<style lang='scss'>
.title {
  height: 16%;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-left: 20px;
  font-weight: bold;
  font-family: "微软雅黑";
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  .u-info{
    color: blueviolet;
  }
}
</style>