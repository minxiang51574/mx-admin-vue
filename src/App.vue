<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import zh from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';
import useLocale from '@/hooks/locale';

const { currentLocale } = useLocale();
const locale = computed(() => {
  switch (currentLocale.value) {
    case 'zh':
      return zh;
    case 'en':
      return en;
    default:
      return zh;
  }
});
console.log(locale);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
