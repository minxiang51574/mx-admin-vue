<!--
 * @Author       : mx
 * @Date         : 2023-05-30 09:55:20
 * @Description  : 
-->
<template>
  <div class="container">
    <el-button type="primary" @click="handleSubmit">login</el-button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
import type { LoginData } from '@/api/user';

const userStore = useUserStore();
const router = useRouter();

const handleSubmit = async () => {
  let values = { username: '1', password: '2' };
  await userStore.login(values as LoginData);
  router.push({
    name: 'Workplace',
  });
};
</script>
<style lang="scss" scoped></style>
