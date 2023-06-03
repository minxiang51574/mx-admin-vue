/*
 * @Author       : Mx
 * @Date         : 2023-06-02 09:44:09
 * @Description  : 工具方法
 */
const TOKEN_KEY = 'token';

/** 是否登录 */
const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

/** 获取token */
const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/** 设置token */
const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

/** 清楚token */
const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
