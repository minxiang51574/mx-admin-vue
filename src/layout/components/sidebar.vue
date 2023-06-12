<!--
 * @Author       : Mx
 * @Date         : 2023-06-12 19:14:06
 * @Description  : 
-->
<template>
  <div class="app-slider">
    <div class="app-slider__logo">
      <img src="/logo.png" />
    </div>
    <div class="app-slider__container">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <Menu />
      </el-scrollbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Menu from './menu';
</script>
<style lang="scss">
.app-slider {
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: #2f3447;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    cursor: pointer;

    img {
      height: 30px;
      width: 30px;
    }

    span {
      color: #fff;
      font-weight: bold;
      font-size: 26px;
      margin-left: 10px;
      white-space: nowrap;
    }
  }

  &__container {
    height: calc(100% - 80px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__menu {
    .el-menu {
      border-right: 0;
      background-color: transparent;

      .el-sub-menu__title,
      &-item,
      &__title {
        color: #eee;
        letter-spacing: 0.5px;
        height: 50px;
        line-height: 50px;
      }

      .el-sub-menu__title,
      &-item {
        &.is-active {
          background-color: #4165d7 !important;
          span {
            // color: #fff;
          }
        }
        &:hover {
          span {
            // color: #fff;
          }
        }
      }
    }
  }
}
</style>
