<script setup lang="ts">

</script>

<template>
  <div class="main-layout">
    <MainLayoutHeader class="header">这是头部</MainLayoutHeader>
    <MainLayoutAside class="aside">这是侧边栏</MainLayoutAside>
    <main class="main">
      <div class="main-content">
        <router-view />
      </div>
    </main>
    <MainLayoutFooter class="footer">这是页脚</MainLayoutFooter>
  </div>
</template>

<style>
.main-layout{
  --aside-width: 300px;
  --header-height: 60px;
  --footer-height: 40px;
  display: grid;
  grid-template-areas: "header header" "aside main" "aside footer";
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  grid-template-columns: var(--aside-width) 1fr;
  height: 100dvh;
  .header{
    grid-area: header;
  }
  .aside{
    grid-area: aside;
  }
  .main{
    grid-area: main;
    overflow: hidden;
    position: relative;
    .main-content{
      overflow: auto;
      height: 100%;
      width: 100%;
    }
  }
  .footer {
    grid-area: footer;
  }
}
</style>