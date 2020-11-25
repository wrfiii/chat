<template>
  <div class="container">
    <div class="wraper" id="wraper">
      <Left />
      <Main />
      <Dialog>1232</Dialog>
    </div>
  </div>
</template>

<script>
import { setup, ref, reactive } from "vue";

import Left from "./left/index";

import Main from "./container/index";
import io from "socket.io-client";
import Dialog from '../../components/dialog/index'

import axios from "axios";

import "./index.scss";
export default {
  name: "App",
  setup() {
    return {};
  },
  components: {
    Left,
    Main,
    Dialog
  },
  mounted() {
    var options = {
      rememberUpgrade: true,
      transports: ["websocket"],
      secure: true,
      rejectUnauthorized: false,
    };
    var ws = io("http://localhost:3000", options);
   
    ws.on("connect", (socket) => {
      console.log("连接socket成功");
      ws.send("你好嘛");
    });
    ws.on("sb", (data) => {
      console.log(data + "/n sb");
    });
    ws.on("open", (socket) => {});
    ws.on("close", (socket) => {});
    ws.on("error", (socket) => {});
    ws.on("event", () => {});
    ws.on("message", () => {});
  },
};
</script>

<style lang="scss">
@import "./index.scss";
.container {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
  position: relative;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  .wraper {
    width: 80%;
    height: 80%;
    z-index: 1;
    position: fixed;
    border-radius: 8px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
      0 2px 2px rgba(0, 0, 0, 0.6);
    background: #ffffff40 border-box;
    display: flex;
    z-index: 10;
  }
}
</style>
