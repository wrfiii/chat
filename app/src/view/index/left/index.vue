<template>
  <div class="l-wraper">
    <Topbar />
    <ChatList />
  </div>
</template>

<script>
import Topbar from "./topbar/index";
import ChatList from "./chatList/index";

export default {
  components: {
    Topbar,
    ChatList,
  },
};
</script>

<style>
.l-wraper {
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  background-image: radial-gradient(
    circle at -1.7% -2.7%,
    rgb(250, 138, 138) 0%,
    rgb(198, 124, 204) 90%
  );
  box-shadow: 0 0 0 1px rgb(198, 124, 204) inset, 0 0em 0.5em rgba(0, 0, 0, 0.6);
}
</style>