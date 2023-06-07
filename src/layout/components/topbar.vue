<!--
 * @Author: Mx
 * @Date: 2023-05-30 22:17:06
 * @Description: 导航
-->
<template>
  <div class="app-topbar">
    <div class="app-topbar__left">
      <el-icon><Fold /></el-icon>
      <el-icon><Expand /></el-icon>
    </div>
    <ul class="app-topbar__right">
      <!-- 多语言 -->
      <li>
        <el-dropdown>
          语言
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="item in locales"
                :key="item.value"
                :value="item.value"
                @click="handleClick(item)"
              >
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
      <!-- 换肤 -->
      <li>
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="theme === 'light' ? $t('settings.navbar.theme.toDark') : $t('settings.navbar.theme.toLight')"
          placement="bottom"
        >
          <el-button :icon="theme === 'light' ? Sunny : Moon" circle @click="handleToggleTheme"></el-button>
        </el-tooltip>
      </li>
      <!-- 全屏 -->
      <li>
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="isFullscreen ? $t('settings.navbar.screen.toExit') : $t('settings.navbar.screen.toFull')"
          placement="bottom"
        >
          <el-button :icon="isFullscreen ? Notification : FullScreen" circle @click="toggleFullScreen"></el-button>
        </el-tooltip>
      </li>
      <!--设置-->
      <li>
        <el-dropdown>
          <el-avatar :size="32" :src="avatar" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-user">
                <el-icon><User /></el-icon> 用户中心</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-lock">修改密码</el-dropdown-item>
              <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" name="app-topbar" setup>
import { Moon, Sunny, FullScreen, Notification, Fold, Expand, User } from '@element-plus/icons-vue';
// import RouteNav from './route-nav.vue';
import useLocale from '@/hooks/locale';
import { LOCALE_OPTIONS } from '@/locale';
import { useAppStore, useUserStore } from '@/store';
import { computed } from 'vue';
import { useDark, useFullscreen, useToggle } from '@vueuse/core';

const appStore = useAppStore();
const userStore = useUserStore();
const avatar = computed(() => {
  return userStore.avatar;
});
const locales = [...LOCALE_OPTIONS];
const theme = computed(() => {
  return appStore.theme;
});
const isDark = useDark({
  selector: 'html',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    appStore.toggleTheme(dark);
  },
});
const toggleTheme = useToggle(isDark);
const handleToggleTheme = () => {
  toggleTheme();
};
const { changeLocale } = useLocale();
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
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
  margin-bottom: 10px;
  justify-content: space-between;

  &__left {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__right {
    display: flex;
    padding-right: 20px;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
  }
}
</style>
