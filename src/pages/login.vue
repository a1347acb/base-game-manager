<script setup lang="ts">

import Default from "@/layouts/default.vue";
</script>

<template>
  <div class="login">
    <div class="bg-box">
      <!--      左侧的内容区域-->
      <div class="bg-svg left-svg">
        <svg height="100%" viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg">
          <path d="M650 0 L0 0 L0 300 L450 300 C570,250 640,100 650,0 Z" fill="green"/>
        </svg>
      </div>
      <!--      右侧的内容区域-->
      <div class="bg-svg right-svg">
        <svg height="100%" viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300 L650 300 L650 0 L200 0 C190,100 120,250 0,300 Z" fill="red"/>
        </svg>
      </div>
    </div>

  </div>
</template>
<route lang="yaml">
meta:
    layout: default
</route>
<style scoped>
.login {
  overflow: hidden;
  background-color: azure;
  height: 100vh;
  width: 100vw;

  .bg-box {
    position: relative;
    height: 100vh;
    //width: calc(100vh * (1100 / 300));
    width: 100vw;

    .bg-svg {
      position: absolute;
      top: 0;
      height: 100%;
    }

    .left-svg {
      left: calc((-100vh * (1100 / 300) + 100vw) / 2);
      animation: left-trans .5s ease-in 0ms 1;
      //background-image: url("../assets/login-bg.jpg");
      //-webkit-background-image: url("../assets/login-bg.jpg");
      //-webkit-mask: url(#left-svg);
      //mask: url(#left-svg);
    }

    .right-svg {
      right: calc((-100vh * (1100 / 300) + 100vw) / 2);
      animation: right-trans .5s ease-in 0ms 1;
    }
  }
}

@keyframes left-trans {
  0% {
    transform: translateX(calc(-100vh * (350 / 300)));
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes right-trans {
  0% {
    transform: translateX(calc(100vh * (350 / 300)));
  }
  100% {
    transform: translateX(0);
  }
}

</style>