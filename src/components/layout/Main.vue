<template>
  <el-main>
    <div class="contain">
      <transition name="fade">
        <router-view :key="'main'+$route.name"></router-view>
      </transition>
    </div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
        
    };
  }
};
</script>
<style lang="less" scoped>
main {
  min-width: 1200px;
  height: 100%;
  box-sizing: border-box;
  .contain {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>


