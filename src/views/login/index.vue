<!--
 * @Author: Mx
 * @Date: 2023-05-27 15:46:52
 * @Description: 
-->
<template>
  <div class="container">
    <el-button type="primary" @click="handleSubmit">login</el-button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const handleSubmit = async () => {
  await userStore.login();
  router.push({
    name: 'Workplace',
  });
};
</script>
<style lang="scss" scoped></style>
