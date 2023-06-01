<template>
  <div class="app-slider">
    <div class="app-slider__logo">
      <img src="/logo.png" />
      <!-- <span v-if="!app.isFold || browser.isMini">{{ app.info.name }}</span> -->
    </div>

    <div class="app-slider__container">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <Menu />
        <!-- <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu> -->
      </el-scrollbar>
    </div>
  </div>
</template>
<script lang="ts" name="app-slider" setup>
import Menu from './menu';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useMenuStore } from '@/store';

const router = useRouter();
const route = useRoute();
const isCollapse = computed(() => true);
const menuStore = useMenuStore();
const menuList = menuStore.menuList;
console.log(menuList);
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
    &.el-popper {
      &.is-light {
        border: 0;
      }
    }

    .el-menu {
      border-right: 0;
      background-color: transparent;

      &--popup {
        .cl-svg,
        span {
          color: #000;
        }
      }

      .el-sub-menu__title,
      &-item {
        &.is-active,
        &:hover {
          background-color: var(--color-primary) !important;

          .cl-svg,
          span {
            color: #fff;
          }
        }
      }

      .el-sub-menu__title,
      &-item,
      &__title {
        color: #eee;
        letter-spacing: 0.5px;
        height: 50px;
        line-height: 50px;

        .wrap {
          width: 100%;
        }

        .cl-svg {
          font-size: 16px;
        }

        span {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 1px;
          margin-left: 10px;
          user-select: none;
        }
      }

      &--collapse {
        .wrap {
          text-align: center;
        }

        .el-sub-menu__title {
          padding: 0;
        }
      }
    }
  }
}
</style>
