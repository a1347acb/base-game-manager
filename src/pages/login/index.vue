<script setup lang="ts">
import LoginForm from "@/pages/login/components/loginForm.vue";
</script>

<template>
  <div class="login">
    <div class="bg-box">
      <!--      左侧的内容区域-->
      <div class="bg-svg left-svg">
        <svg height="100%" viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="left-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M1 0 L0 0 L0 1 L0.6923 1 C0.8769,0.8333 0.9846,0.3333 1,0 Z" fill="red"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <!--      右侧的内容区域-->
      <div class="bg-svg right-svg">
        <svg height="100%" viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="right-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0 1 L1 1 L1 0 L0.3077 0 C0.2923,0.3333 0.1846,0.8333 0,1 Z" fill="red"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="login-container">
      <LoginForm class="login-form"/>
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
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;

    .bg-svg {
      position: absolute;
      top: 0;
      height: 100%;
    }

    .left-svg {
      left: calc((-100vh * (1100 / 300) + 100vw) / 2);
      animation: left-trans .5s ease-in 0ms 1;
      background-image: url("../../assets/login-bg.jpg");
      background-repeat: repeat-x;
      clip-path: url("#left-clip-path");
      background-size: cover;
      filter: drop-shadow(10px 10px 10px #000);
      z-index: 1;
    }

    .right-svg {
      right: calc((-100vh * (1100 / 300) + 100vw) / 2);
      animation: right-trans .5s ease-in 0ms 1;
      background-color: #efefef;
      clip-path: url("#right-clip-path");
    }
  }

  .login-container{
    perspective: 600px;
    position: absolute;
    top: 50%;
    left: 85%;
  }
  .login-form{
    z-index: 1;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
    animation: loginFormAnim 1s .3s;
  }
}
@keyframes loginFormAnim {
  0%{
    transform: translate(-50%, -50%) rotateX(80deg);
  }
  100%{
    transform: translate(-50%, -50%) rotateX(0deg);
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