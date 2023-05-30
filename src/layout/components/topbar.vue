<!--
 * @Author: Mx
 * @Date: 2023-05-30 22:17:06
 * @Description: 
-->
<template>
  <div class="app-topbar">
    <div class="app-topbar__collapse">
      <i class="cl-iconfont cl-icon-fold"></i>
    </div>
    <!-- 路由导航 -->
    <!-- <route-nav /> -->
    导航
    <div class="flex1"></div>
  </div>
</template>
<script lang="ts" name="app-topbar" setup>
// import RouteNav from './route-nav.vue';
</script>
<style lang="scss" scoped>
.app-topbar {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  background-color: #fff;
  margin-bottom: 10px;

  &__collapse {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    cursor: pointer;
    transform: rotateY(180deg);

    &.unfold {
      transform: rotateY(0);
    }

    i {
      font-size: 20px;
    }
  }

  .flex1 {
    flex: 1;
  }

  &__tools {
    display: flex;
    margin-right: 20px;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      height: 45px;
      min-width: 45px;
      border-radius: 3px;
      cursor: pointer;
      margin-left: 10px;
    }
  }

  &__user {
    margin-right: 10px;
    cursor: pointer;

    .el-dropdown-link {
      display: flex;
      align-items: center;
    }

    .name {
      white-space: nowrap;
      margin-right: 15px;
    }

    .el-icon-arrow-down {
      margin-left: 10px;
    }
  }
}
</style>
