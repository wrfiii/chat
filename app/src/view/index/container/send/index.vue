<template>
  <div class="send-box">
    <div class="send-ipt">
      <input type="text" />
      <button>发送</button>
    </div>
  </div>
</template>

<script>
export default {};
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
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>