<!--
 * @Author: Mx
 * @Date: 2023-05-27 15:46:52
 * @Description: 
-->
<template>
  <div class="container">
    home
    <el-button @click="handleManage">跳转</el-button>
    <el-button :loading="loading" @click="fetchData">接口请求</el-button>
    <div>name{{ userInfo.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store';
import useLoading from '@/hooks/loading';

const userInfo = useUserStore();
const router = useRouter();
const { loading, setLoading } = useLoading(false);

const handleManage = () => {
  router.push('/login');
};

const fetchData = async () => {
  setLoading(true);
  try {
    // const { data } = await login({ key: 123 });
    // console.log(data);
  } catch (err) {
    // you can report use errorHandler or other
  } finally {
    setLoading(false);
  }
};
</script>
<style lang="scss" scoped></style>
