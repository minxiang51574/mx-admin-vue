/*
 * @Author: Mx
 * @Date: 2023-05-30 09:55:20
 * @Description:
 */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useUserStore } from '@/store';
import { getToken } from '@/utils/auth';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 300 * 1000, // 请求超时时间设置为300秒
});
export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // console.log('请求拦截器 =>', config);
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    const userStore = useUserStore();
    if (res.code !== 200) {
      if (res.code === 401) {
        userStore.logout().then();
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。');
      } else if (res.code === 500) {
        ElMessage({
          message: res.msg,
          type: 'error',
        });
      }
      ElMessage({
        message: res.msg,
        type: 'error',
      });
      return Promise.reject(res.msg || 'Error');
    }
    return res;
  },
  (error) => {
    ElMessage.error({
      message: error.msg || 'Request Error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default request;
