<template>
  <div class="chatContainer">
    <UserInfo />
    <Content />
    <SendBox />
  </div>
</template>

<script>
import UserInfo from "./userInfo/index";
import Content from "./content/index";
import SendBox from "./send/index";
import { inject, setup, onMounted } from "vue";
export default {
  // setup() {
  //   onMounted(() => {
     
  //   });
  //   return {
  //     // location,
  //     // geolocation,
  //   };
  // },
  components: {
    UserInfo,
    Content,
    SendBox,
  },
};
</script>

<style lang='scss'>
.chatContainer {
  position: relative;
  height: 100%;
  width: calc(100% - 20%);
  padding-bottom:  68px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0em 0em rgba(255, 255, 255, 0.2) inset;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>