<template>
  <div class="chat-content">
    <ul>
      <li v-for="(item, index) in chatList" :key="index">
        <div
          class="u-img"
          :style="{ backgroundImage: 'url(' + item.ava + ')' }"
        ></div>
        <div class="r-ct">
          <p>
            <span class="name">{{ item.name }}</span>
            <span class="time">{{ moment().format("HH:mm") }}</span>
          </p>
          <p class="text-box">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            perspiciatis saepe accusantium quod eos esse nesciunt quos, magni
            libero harum maiores officiis iste consectetur doloribus temporibus
            facilis dolor eaque sapiente?
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { setup, ref, reactive } from "vue";
import moment from "moment";
export default {
  setup() {
    let chatList = reactive([
      {
        name: "张三",
        ava: require("@/assets/imgs/user.jpg"),
      },
    ]);
    return {
      chatList,
      moment,
    };
  },
};
</script>

<style lang="scss" scoped>
.chat-content {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 28px;
  li {
    display: flex;
    padding-left: 16px;
    .u-img {
      width: 50px;
      height: 50px;
      background-size: cover;
      border-radius: 50%;
    }
    .r-ct {
      padding-left: 16px;
      flex: 1;
      .name {
        font-size: 12px;
        margin-right: 6px;
        color: #303133;
      }
      .time {
        font-size: 13px;
        color: #606266;
      }
      .text-box {
        color: white;
        position: relative;
        font-size: 14px;
        margin-top: 6px;
        background-color: rgba(155, 89, 182, 0.2);
        border-radius: 10px;
        padding: 6px;
        line-height: 1.2;
        margin-right: 20px;
        &::after {
          content: "";
          position: absolute;
          right: 100%;
          top: 0px;
          width: 16px;
          height: 16px;
          border-width: 0;
          border-style: solid;
          border-color: transparent;
          border-bottom-width: 10px;
          border-bottom-color: currentColor;
          border-radius: 0 0 0 32px;
          color: rgba(155, 89, 182, 0.2);
        }
      }
    }
  }
}
</style>