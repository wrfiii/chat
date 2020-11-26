<template>
  <transition name="dialog">
    <div
      :class="['v-dialog-wraper']"
      v-if="show"
      ref="diaLog"
      @click="showLog"
      key="boxxx"
    >
      <div :class="['v-dialog-body',custom_class ? custom_class : ''] ">
        <slot> </slot>
      </div>
    </div>
  </transition>
</template>

<script>


import { setup, ref, reactive } from "vue";

export default {
  props: {
    show: {
      defalut: false,
      type: Boolean,
    },
    custom_class: {
      defalut: null,
      type: String,
    },
  },
  setup() {
    function showLog() {
      this.isShowDialog = false;
    }
    return {
      showLog,
    };
  },
  // mounted(){

  // }
};
</script>

<style lang='scss'>
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.5s;
}
.dialog-enter,
.dialog-leave-active {
  opacity: 0;
}

.dialog-leave-active,
.dialog-enter-active {
  transition: all 0.4s;
}
.v-dialog-wraper {
  position: fixed;
  z-index: 888;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: box-anmai 0.8s ease-in-out both;
  @keyframes box-anmai {
    to {
      opacity: 1;
    }
  }
  @keyframes box-body-anmai {
    50% {
      top: 40%;
    }
    100% {
      top: 20%;
    }
  }
  .v-dialog-body {
    position: absolute;
    top: -50%;
    width: 480px;
    min-height: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
    animation: box-body-anmai 0.8s ease-in-out both;
  }
}
</style>