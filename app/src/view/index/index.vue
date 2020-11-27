<template>
  <div class="container">
    <div class="wraper" id="wraper">
      <Left />
     <Main />
      <Dialog :show="!isLogin" custom_class="dialog-from">
        <div class="title">
          <ul>
            <li>登录</li>
            <li>注册</li>
            <div class="chek-img">
              <div
                @click="chekImg(item.imgId, item.imgSrc)"
                :class="['img', userFrom.imgId === item.imgId ? 'active' : '']"
                v-for="item in imgArr"
                :key="item.id"
                :style="{ backgroundImage: 'url(' + item.imgSrc + ')' }"
              ></div>
            </div>
          </ul>
        </div>
        <div class="ipt">
          <p>用户名</p>
          <input type="text" v-model="userFrom.userName" />
          <p>密码</p>
          <input type="text" v-model="userFrom.userPwd" />
        </div>
        <div class="submit" @click="sbumit">登录</div>
      </Dialog>
    </div>
  </div>
</template>

<script>
import { setup, ref, reactive, onMounted, provide } from "vue";
import "./index.scss";
import Left from "./left/index";
import Main from "./container/index";
import Dialog from "../../components/dialog/index";
import requset from "@/base/axios.js";
import Ws from "@/base/ws.ts";

function createWs() {
  return new Ws();
}
function sbumit() {
  requset.post("/login", this.userFrom).then((res) => {
    if (res == "ok") {
      this.isLogin = true;
      this.msgArr.push({
        msgType: 2,
        data: this.userFrom.userName,
      });
      this.Ws.emit("newUser", {
        msgType: 2,
        data: this.userFrom.userName,
      });8
    }
  });
}
function chekImg(id, imgSrc) {
  this.userFrom.imgId = id;
  this.userFrom.imgSrc = imgSrc;
}
let userFrom = reactive({
  userName: "",
  userPwd: "",
  imgId: 0,
  imgSrc: require("@/assets/imgs/user.jpg"),
});
let imgArr = [
  {
    imgId: 0,
    imgSrc: require("@/assets/imgs/user.jpg"),
  },
  {
    imgId: 1,
    imgSrc: require("@/assets/imgs/user1.jpg"),
  },
  {
    imgId: 2,
    imgSrc: require("@/assets/imgs/user2.jpg"),
  },
  {
    imgId: 3,
    imgSrc: require("@/assets/imgs/user3.jpg"),
  },
];

export default {
  setup() {
    let msgArr = reactive([]);
    provide("msgArr", msgArr);
    provide("userFrom", userFrom);
    let isLogin = ref(false);
    provide("isLogin", isLogin);
    provide("imgArr", imgArr);
    let Ws = reactive(createWs());
    provide("ws", Ws);
    return {
      sbumit,
      Ws,
      userFrom,
      isLogin,
      imgArr,
      chekImg,
      msgArr,
    };
  },
  components: {
    Left,
    // Main,
    Dialog,
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
    .dialog-from {
      display: flex;
      flex-direction: column;
      padding: 50px 40px 40px 40px;
      box-sizing: border-box;
      .title {
        padding-bottom: 16px;
        border-bottom: 1px solid #ccc;
        .chek-img {
          display: flex;
          .img {
            width: 36px;
            height: 36px;
            background-size: cover;
            border-radius: 50%;
            margin-right: 16px;
            cursor: pointer;
            &:nth-of-type(1) {
              margin-left: 12px;
            }
          }
          .img.active {
            border: 1px solid red;
            filter: drop-shadow(0px, 0px, 2px, rgba(0, 0, 0, 0.2));
          }
        }
        ul {
          display: flex;
          li {
            width: 50px;
            font-size: 24px;
          }
        }
      }
      .ipt {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        p {
          font-size: 12px;
          color: #444;
          margin-bottom: 4px;
        }
        input {
          line-height: 48px;
          text-indent: 12px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          transition: border-color 0.3s;
          &:focus {
            border-color: blueviolet;
          }
          &:nth-of-type(1) {
            margin-bottom: 18px;
          }
        }
      }
      .submit {
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        color: white;
        margin-top: 36px;
        border-radius: 6px;
        font-size: 22px;
        user-select: none;
        cursor: pointer;
        &:active {
          background: #dd6161;
          border-color: #dd6161;
        }
        font-weight: 500;
        border-color: #f56c6c;
        background: #f56c6c;
      }
    }
  }
}
</style>
