/*
 * @Author       : mx
 * @Date         : 2023-05-30 09:55:20
 * @Description  :
 */
import { defineStore } from 'pinia';
import { login as userLogin, LoginData, getUserInfo } from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { UserState } from './types';

// defineStore 第一个参数是id，必需且值唯一
const useUserStore = defineStore('user', {
  // state返回一个函数，防止作用域污染
  state: (): UserState => ({
    role: '',
    name: '',
    avatar: undefined,
    phone: undefined,
  }),
  actions: {
    setInfo(partial: Partial<UserState>) {
      // Partial<T> 可以将类型 T 中的每个属性都转换为可选属性
      this.$patch(partial);
    },

    /** 获取用户信息 */
    async info() {
      const res = await getUserInfo();
      this.setInfo(res.data);
    },

    /** Logout */
    async logout() {
      try {
        // await userLogout();
      } finally {
        // this.logoutCallBack();
      }
    },

    /** Login */
    async login(loginForm: LoginData) {
      try {
        const res = await userLogin(loginForm);
        setToken(res.data.token);
      } catch (err) {
        clearToken();
        throw err;
      }
    },
  },

  // 开始数据持久化
  persist: true,
  // persist: {
  //   key: 'storekey', // 修改存储的键名，默认为当前 Store 的 id
  //   storage: window.sessionStorage, // 存储位置修改为 sessionStorage
  //   paths: ['userInfo.name', 'token'], // 存储userInfo的name
  // },
});
export default useUserStore;
