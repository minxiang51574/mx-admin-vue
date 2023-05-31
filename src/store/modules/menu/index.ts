/*
 * @Author: Mx
 * @Date: 2023-05-31 17:42:25
 * @Description:
 */
import { defineStore } from 'pinia';
import { appRoutes } from '@/router/routes';
const useMenuStore = defineStore('menu', {
  state: () => ({
    menuList: appRoutes, // 左侧菜单列表
  }),
  actions: {
    setMenu(list) {
      this.menuList = list;
    },
  },
});
export default useMenuStore;
