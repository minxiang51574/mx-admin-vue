import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import { ElMessage } from 'element-plus';

const http = axios.create({
  baseURL: '',
  timeout: 300 * 1000, // 请求超时时间设置为300秒
});
const NETWORK_ERROR = '网络错误，请联系开发人员';
/**
 * 请求拦截器
 */
http.interceptors.request.use(
  (config) => {
    console.log('请求拦截器 =>', config);
    Nprogress.start();
    return config;
  },
  (error) => {
    Nprogress.done();
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
http.interceptors.response.use(function (res) {
  console.log('响应拦截器 =>', res);
  Nprogress.done();
  if (res.status == 200) {
    return res.data;
  } else {
    ElMessage.error(NETWORK_ERROR);
    return Promise.reject(NETWORK_ERROR);
  }
});

export default http;
