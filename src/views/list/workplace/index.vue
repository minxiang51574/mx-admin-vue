<!--
 * @Author: Mx
 * @Date: 2023-06-01 11:23:56
 * @Description: 
-->
<template>
  <div class="container">
    wrokspace
    {{ userInfo }}
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
const userInfo = useUserStore();
</script>
<style lang="scss" scoped></style>
