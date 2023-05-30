<template>
  <div class="route-nav">
    <p v-if="true" class="title">
      <!-- {{ lastName }} -->
    </p>

    <template v-else>
      <el-breadcrumb>
        <el-breadcrumb-item v-for="(item, index) in list" :key="index">{{
          item.meta?.label || item.name
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </div>
</template>
<script lang="ts" name="route-nav" setup>
import { computed } from 'vue';
// 数据列表
const list = computed(() => {
  function deep(item: any) {
    if (route.path === '/') {
      return false;
    }

    if (item.path == route.path) {
      return item;
    } else {
      if (item.children) {
        const ret = item.children.map(deep).find(Boolean);

        if (ret) {
          return [item, ret];
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return flattenDeep(menu.group.map(deep).filter(Boolean));
});
</script>
