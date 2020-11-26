<template>
  <div class="chat-content">
    <ul ref="chat" id="chat">
      <li v-for="(item, index) in chatList" :key="index">
        <div
          class="u-img"
          :style="{ backgroundImage: 'url(' + item.ava + ')', scollT }"
        ></div>
        <div class="r-ct">
          <p>
            <span class="name">{{ item.userName }}</span>
            <span class="time">{{ moment().format("HH:mm") }}</span>
          </p>
          <p class="text-box">
            {{ item.msg }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { setup, ref, reactive, inject, watch, onMounted, nextTick } from "vue";
import moment from "moment";
export default {
  setup() {
    let chatList = inject("msgArr");
    // watch(chatList, () => {
    //   this.$refs.chat.offsetTop = this.$refs.chat.offsetHeight;
    // });
    const chat = ref(null);
    onMounted(() => {
      watch(chatList, () => {
        let $chat = document.getElementById("chat");
        nextTick(() => {
          $chat.scrollTop = $chat.offsetHeight;
        });
      });
    });
    return {
      chatList,
      moment,
      chat,
    };
  },
};
</script>

<style lang="scss" scoped>
.chat-content {
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100% - 100px);
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 8px;
    background-color: skyblue;
    background-image: linear-gradient(
      to right,
      rgb(242, 112, 156),
      rgb(255, 148, 114)
    );
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 8px;
  }
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
        min-width: 50%;
        max-width: 600px;
        width: max-content;
        font-size: 14px;
        margin-top: 6px;
        background-color: rgba(155, 89, 182, 0.2);
        box-shadow: 0px 0px px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding: 6px;
        line-height: 1.2;
        margin-right: 20px;
        &::after {
          content: "";
          position: absolute;
          right: 100%;
          top: -6px;
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