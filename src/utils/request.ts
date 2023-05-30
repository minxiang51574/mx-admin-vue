/*
 * @Author: Mx
 * @Date: 2023-05-30 09:55:20
 * @Description:
 */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { errorCode } from '@/utils/errorCode';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { useUserStore } from '@/store';

import { ElMessage, ElNotification } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 300 * 1000, // 请求超时时间设置为300秒
});

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log('请求拦截器 =>', config);
    const userStore = useUserStore();
    // 验证 token
    if (userStore.token) {
      // 请求标识
      config.headers['Authorization'] = userStore.token;
    }
    Nprogress.start();
    return config;
  },
  (error: any) => {
    Nprogress.done();
    return Promise.reject(error);
  },
);
export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}
/**
 * 响应拦截器
 */
request.interceptors.response.use((res: AxiosResponse<HttpResponse>) => {
  console.log('响应拦截器 =>', res);
  const userStore = useUserStore();
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200;
  // 获取错误信息
  const msg = errorCode[code] || res.data.msg || errorCode['default'];

  Nprogress.done();
  if (code === 401) {
    userStore.logOut().then(); // 退出
    return Promise.reject('无效的会话，或者会话已过期，请重新登录。');
  } else if (code === 500) {
    ElMessage({
      message: msg,
      type: 'error',
    });
    return Promise.reject(new Error(msg));
  } else if (code !== 200) {
    ElNotification.error({
      title: msg,
    });
    return Promise.reject('error');
  } else {
    return Promise.resolve(res.data);
  }
});

export default request;
