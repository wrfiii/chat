<template>
  <div class="send-box">
    <div class="send-ipt">
      <input type="text" v-model="msg" @keyup.enter='send' ref="msgBtn" />
      <button @click="send" >发送</button>
    </div>
  </div>
</template>

<script>
import { setup, ref, reactive, onMounted, provide, inject } from "vue";
export default {
  setup() {
    let ws = inject("ws");
    let msgArr = inject("msgArr");
    let msg = ref("");
    let msgBtn = ref(null);
    let userName = JSON.parse(localStorage.getItem("user")).userName;
    function send() {
      if (!msg.value) {
        return;
      }
      ws.send(msg.value);
      msgBtn.value.focus();
      msgArr.push({
        userName,
        msg: msg.value,
        time: new Date(),
      });
      this.msg = "";
    }
    return {
      send,
      msg,
      msgBtn,
    };
  },
};
</script>

<style lang="scss" scoped>
.send-box {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 68px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.2);
  .send-ipt {
    width: calc(100% - 200px);
    margin-left: 200px;
    display: flex;
    align-items: center;
    height: 100%;
    input {
      width: 80%;
      height: 32px;
      text-indent: 12px;
      background-color: #fff;
    }
    button {
      margin-left: 16px;
      font-size: 20px;
      color: #e74c3c;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-size: 19px;
      color: white;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      margin-left: 20px;
      background: linear-gradient(
        to right,
        rgb(242, 112, 156),
        rgb(255, 148, 114)
      );
      font-size: 14px;
      border-radius: 4px;
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>