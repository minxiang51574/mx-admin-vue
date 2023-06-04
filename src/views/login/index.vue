<!--
 * @Author       : mx
 * @Date         : 2023-05-30 09:55:20
 * @Description  : 
-->
<template>
  <div class="login">
    <div class="login-form-wrapper">
      <div class="login-form-title">登录</div>
      <div class="login-form-sub-title">一款快速开发后台权限管理系统</div>
      <el-form ref="ruleFormRef" :rules="rules" :model="userInfo" class="login-form" layout="vertical">
        <el-form-item label="账号" prop="username">
          <el-input v-model="userInfo.username" :prefix-icon="User" placeholder="用户名: admin" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="userInfo.password"
            type="password"
            show-password
            :prefix-icon="Lock"
            placeholder="用户名: 123456"
          />
        </el-form-item>
        <el-space :size="12" direction="vertical" fill style="width: 100%">
          <div class="login-form-password-actions">
            <el-checkbox v-model="loginConfig.rememberPassword">记住密码</el-checkbox>
          </div>
          <el-button type="primary" :loading="loading" @click="handleSubmit(ruleFormRef)">登录</el-button>
        </el-space>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core';
import { reactive, ref } from 'vue';
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import useLoading from '@/hooks/loading';
import { User, Lock } from '@element-plus/icons-vue';

const userStore = useUserStore();
const router = useRouter();
const { loading, setLoading } = useLoading();
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
});

const loginConfig = useStorage('login-config', {
  rememberPassword: true,
  username: 'admin', // 演示默认值
  password: '123456', // demo default value
});

const userInfo = reactive({
  username: loginConfig.value.username,
  password: loginConfig.value.password,
});

const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      setLoading(true);
      try {
        await userStore.login(userInfo);
        router.push({
          name: 'workplace',
        });
      } catch {
        ElMessage.error('this is a error message.');
      } finally {
        setLoading(false);
      }
    } else {
      console.log('error submit!', fields);
    }
  });
};

// const handleSubmit2 = async () => {
//   let values = { username: '1', password: '2' };
//   await userStore.login(values as LoginData);
//   router.push({
//     name: 'Workplace',
//   });
// };
</script>
<style lang="scss" scoped>
.login {
  background-color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  .login-form {
    &-wrapper {
      width: 320px;
    }

    &-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #333;
    }

    &-sub-title {
      font-size: 16px;
      line-height: 24px;
      color: #313231;
    }

    &-password-actions {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
