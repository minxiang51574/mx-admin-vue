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
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 300 * 1000, // 请求超时时间设置为300秒
});

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
export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}
/**
 * 响应拦截器
 */
request.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    // console.log('响应拦截器 =>', response);
    const userStore = useUserStore();
    const res = response.data;
    if (res.code !== 200) {
      if (res.code === 401) {
        userStore.logout().then(); // 退出
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。');
      } else if (res.code === 500) {
        ElMessage({
          message: res.msg,
          type: 'error',
        });
        return Promise.reject(new Error(res.msg));
      }
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    ElMessage.error({
      message: error.msg || 'Request Error',
      duration: 2 * 1000,
    });
    return Promise.reject(error);
  },
);

export default request;
