<template>
  <ul id="chat" ref="chat">
    <li v-for="(item, index) in msgArr" :key="index">
      <div v-if="item.msgType === 1">
        <div v-if="!item.isMyMsg" class="o-Msg">
          <div
            class="u-img"
            :style="{ backgroundImage: 'url(' + item.imgSrc + ')' }"
          ></div>
          <div class="r-ct">
            <p class="u-name">
              <span class="name">{{ item.userName }}</span>
              <span class="time">{{ moment(item.time).format("HH:mm") }}</span>
            </p>
            <p class="u-text">
              {{ item.msg }}
            </p>
          </div>
        </div>
        <div v-else class="myMsg">
          <div class="r-ct">
            <p class="u-name">
              <span class="name">{{ item.userName }}</span>
              <span class="time">{{ moment(item.time).format("HH:mm") }}</span>
            </p>
            <p class="u-text">
              {{ item.msg }}
            </p>
          </div>
          <div
            class="u-img"
            :style="{ backgroundImage: 'url(' + item.imgSrc + ')' }"
          ></div>
        </div>
      </div>
      <div v-else-if="item.msgType === 2" class="init">
        <label for="">{{ item.data }}</label>
        <span>加入了房间</span>
      </div>
      <div v-else-if="item.msgType === 3" class="init">
        <label for="">{{ item.data }}</label>
        <span>离开了房间</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { setup, ref, reactive, inject, watch, onMounted, nextTick } from "vue";
import moment from "moment";

export default {
  setup() {
    let msgArr = inject("msgArr");
    let ws = inject("ws");
    ws.on("msg", (data) => {
      msgArr.push({
        msgType: 1,
        msg: data.data.msg,
        imgSrc: data.data.user.imgSrc,
        userName: data.data.user.userName,
        time: data.data.time,
        isMyMsg: false,
      });
    });
    const chat = ref(null);
    watch(msgArr, () => {
      nextTick(() => {
        let $ul = chat.value;
        $ul.scrollTop = msgArr.length * 60;
      });
    });
    ws.on("disconnectUser", (data) => {
      msgArr.push(data);
    });

    ws.on("newUser", (data) => {
      msgArr.push(data);
    });
    return {
      msgArr,
      moment,
      chat,
    };
  },
};
</script>

<style lang="scss" scoped>
#chat {
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100% - 100px);
  box-sizing: border-box;
  width: 100%;
  overflow-y: sc;
  padding-bottom: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow-y: scroll;
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
    padding-bottom: 12px;
    height: 60px;
    .init {
      display: flex;
      justify-content: center;
      display: flex;
      align-items: center;
      label {
        color: #f56c6c;
        font-size: 14px;
      }
      span {
        font-size: 12px;
        color: #909399;
      }
    }
    .o-Msg,
    .myMsg {
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
        margin-top: -4px;
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
        .u-text {
          color: white;
          position: relative;
          min-width: 500px;
          max-width: 80%;
          font-size: 14px;
          margin-top: 6px;
          background-color: rgba(155, 89, 182, 0.2);
          box-shadow: 0px 0px px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          padding: 6px;
          padding-left: 10px;
          line-height: 1.4;
          margin-right: 20px;
          word-break: break-word;
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

      .myMsg {
        display: flex;
        justify-content: flex-end;
      }
    }
    .myMsg {
      display: flex;
      flex: 1;
      padding-right: 16px;
      justify-content: flex-end;
      .r-ct {
        .u-name {
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
        flex: 0;
        .u-text {
          margin: 0;
          margin-right: 20px;
          &::after {
            content: "";
            position: absolute;
            left: 100%;
            // top: 0px;
            width: 16px;
            height: 16px;
            border-width: 0;
            border-style: solid;
            border-color: transparent;
            border-bottom-width: 10px;
            border-bottom-color: currentColor;
            border-radius: 0 0 32px 0;
          }
        }
      }
    }
  }
}
</style>