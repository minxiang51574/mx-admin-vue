<!--
 * @Author: Mx
 * @Date: 2023-05-28 22:14:52
 * @Description: 
-->
<template>
  <el-container>
    <el-aside :width="sidebarWidth">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <TabBar />
      <el-main><Main /></el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" name="app-layout" setup>
import Sidebar from './components/sidebar.vue';
import Navbar from './components/navbar.vue';
import TabBar from './components/tabBar.vue';
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
  // background-color: #f7f7f7;
}
.el-aside {
  transition: all 0.3s ease-in-out;
}
</style>
