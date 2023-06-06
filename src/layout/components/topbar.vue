<!--
 * @Author: Mx
 * @Date: 2023-05-30 22:17:06
 * @Description: 导航
-->
<template>
  <div class="app-topbar">
    <div class="app-topbar__collapse">
      <i class="cl-iconfont cl-icon-fold"></i>
    </div>
    <!-- 路由导航 -->
    <!-- <route-nav /> -->
    导航
    <div class="flex1">
      <el-dropdown>
        <span class="el-dropdown-link">语言切换</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in locales" :key="item.value" :value="item.value" @click="handleClick(item)">
              {{ item.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="theme === 'light' ? $t('settings.navbar.theme.toDark') : $t('settings.navbar.theme.toLight')"
        placement="bottom"
      >
        <el-button :icon="theme === 'light' ? Sunny : Moon" circle></el-button>
      </el-tooltip>
    </div>
  </div>
</template>
<script lang="ts" name="app-topbar" setup>
import { Moon, Sunny } from '@element-plus/icons-vue';
// import RouteNav from './route-nav.vue';
import useLocale from '@/hooks/locale';
import { LOCALE_OPTIONS } from '@/locale';
import { useAppStore } from '@/store';
import { computed } from 'vue';

const appStore = useAppStore();

const locales = [...LOCALE_OPTIONS];
const theme = computed(() => {
  return appStore.theme;
});

const { changeLocale } = useLocale();
const handleClick = (item: { value: string }) => {
  changeLocale(item.value);
};
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
