<template>
  <div class="chatList">
    <ul ref="ulList" id="ulList">
      <li
        v-for="(item, index) in chatArr"
        :key="item.id"
        :class="item.id == id ? 'active' : ''"
        @click="changeChat(item, index)"
      >
        <div class="user-photo">
          <img alt="" :style="{ backgroundImage: 'url(' + item.photo + ')' }" />
        </div>
        <div class="user-info">
          <p class="name">
            <label for="">{{ item.name }}</label>
            <span>{{ handleDate(item.date) }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { handleDate } from "@/base/filter.js";
import { setup, ref, reactive } from "vue";
export default {
  setup() {
    let chatArr = reactive([
      {
        name: "公共",
        id: 1,
        date: new Date(),
        photo: require("@/assets/imgs/user.jpg"),
      }
    ]);
    let id = ref(1);
    function changeChat(item, index) {
      document
        .getElementById("ulList")
        .style.setProperty("--top", index * 112 + "px");
      this.id = item.id;
    }

    return {
      chatArr,
      handleDate,
      changeChat,
      id,
    };
  },
};
</script>

<style lang='scss'>
.chatList ul::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.chatList ul::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 8px;
  background-color: skyblue;
  background-image: linear-gradient(
    to right,
    rgb(242, 112, 156),
    rgb(255, 148, 114)
  );
}
.chatList ul::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 8px;
}
@mixin flex-center {
  display: flex;
  align-content: center;
}
.chatList {
  height: 84%;
  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    --top: 0px;
    overflow-y: auto;
    &::after {
      background-color: rgba(255, 255, 255, 0.6);
      content: "";
      width: 100%;
      height: 60px;
      padding: 20px 0;
      position: absolute;
      transition: all 0.3s;
      top: var(--top);
      z-index: 0;
      opacity: 0.2;
    }
    li {
      height: 60px;
      @include flex-center;
      padding: 20px 16px;
      border-radius: 8px;
      line-height: 1.6;
      margin-bottom: 12px;
      position: relative;
      z-index: 1;
      cursor: pointer;
      &:last-of-type {
        margin-bottom: 0;
      }
      &.active {
        .user-info {
          .name {
            color: #303133;
            font-size: 13px;
            span{
               text-shadow: none;
            }
          }
        }
      }
      // &:nth-of-type(1) {
      //   background-color: rgba(255, 255, 255, 0.5);
      //   .user-info {
      //     .name {
      //       color: #303133;
      //       font-size: 13px;
      //     }
      //   }
      // }
      .user-photo {
        height: 100%;
        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          background-size: cover;
          border-radius: 50%;
          filter: drop-shadow(2px 0px 2px rgba(0, 0, 0, 0.5));
        }
      }
      .user-info {
        @include flex-center;
        margin-left: 16px;
        padding-top: 12px;
        flex: 1;
        .name {
          @include flex-center;
          flex: 1;
          line-height: 1;
          justify-content: space-between;
          font-size: 12px;
          align-items: center;
          height: max-content;
          color: transparent;
          transition: all 0.3s;
          span{
              text-shadow: 0 1px 1px hsla(0, 0%, 100%, 1);
          }
        }
        label {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }
      }
    }
  }
}
</style>