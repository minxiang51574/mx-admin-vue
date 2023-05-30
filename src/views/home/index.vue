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

    <div>token：{{ token }}</div>
    <div>getter值：{{ newName }}</div>
    <el-button type="primary" @click="handleUser">更新用户</el-button>
    <el-button type="primary" @click="handleAge">更新年龄</el-button>
    <el-button type="primary" @click="handleToken">更新token</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store';
import { storeToRefs } from 'pinia';
import { login } from '@/api/login';
import useLoading from '@/hooks/loading';

const userStore = useUserStore();
const router = useRouter();
const { loading, setLoading } = useLoading(false);

// console.log(import.meta.env.VITE_APP_BASE_API);

//storeToRefs 会跳过所有的 action 属性
const { userInfo, token, newName } = storeToRefs(userStore);
//action 属性直接解构
const { updateUserInfo, updateAge, updateToken } = userStore;

const handleUser = () => {
  updateUserInfo({ name: 'lisi', age: 24 });
};

const handleAge = () => {
  //userInfo是一个ref响应式引用，需通过.value取值
  updateAge(userInfo.value.age + 1);
};

const handleToken = () => {
  updateToken('23234');
};

const handleManage = () => {
  router.push('/login');
};

const fetchData = async () => {
  setLoading(true);
  try {
    const { data } = await login({ key: 123 });
    console.log(data);
  } catch (err) {
    // you can report use errorHandler or other
  } finally {
    setLoading(false);
  }
};
</script>
<style lang="scss" scoped>
.container {
  color: $test-color;
}
</style>
