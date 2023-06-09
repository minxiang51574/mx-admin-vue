<!--
 * @Author: Mx
 * @Date: 2023-05-28 22:14:52
 * @Description: 
-->
<template>
  <el-container>
    <el-aside :width="sidebarWidth"><Slider /></el-aside>
    <el-container>
      <el-header><Topbar /></el-header>
      <Process />
      <el-main><Main /></el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" name="app-layout" setup>
import Slider from './components/slider.vue';
import Topbar from './components/topbar.vue';
import Process from './components/process.vue';
import Main from './components/main.vue';
import { computed } from 'vue';
import { useAppStore } from '@/store';

const appStore = useAppStore();
// 侧边栏宽度
const sidebarWidth = computed(() => {
  return appStore.menuCollapse ? '64px' : '200px';
});
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>
