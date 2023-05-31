<!--
 * @Author: Mx
 * @Date: 2023-05-31 16:41:03
 * @Description: 
-->
<template>
  <div class="app-views">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>
<script lang="ts" name="app-views" setup></script>
<style lang="scss" scoped>
.app-views {
  flex: 1;
  overflow: hidden;
  margin: 0 10px 10px 10px;
  height: 100%;
  width: calc(100% - 20px);
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;

  :deep(.el-scrollbar__view) {
    height: 100%;
  }

  .slide-enter-active {
    position: absolute;
    top: 0;
    width: 100%;
    transition: all 0.4s ease-in-out 0.2s;
  }

  .slide-leave-active {
    position: absolute;
    top: 0;
    width: 100%;
    transition: all 0.4s ease-in-out;
  }

  .slide-enter-to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  .slide-enter-from {
    transform: translate3d(-5%, 0, 0);
    opacity: 0;
  }

  .slide-leave-to {
    transform: translate3d(5%, 0, 0);
    opacity: 0;
  }

  .slide-leave-from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
