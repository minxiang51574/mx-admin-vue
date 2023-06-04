/*
 * @Author       : Mx
 * @Date         : 2023-06-02 14:54:01
 * @Description  :
 */
import type { LocationQueryRaw, Router } from 'vue-router';
import NProgress from 'nprogress';

import { useUserStore, useAppStore } from '@/store';
import { isLogin } from '@/utils/auth';

/** 登录获取用户信息和菜单 */
export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, _from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    const appStore = useAppStore();
    if (isLogin()) {
      if (userStore.role) {
        next();
      } else {
        try {
          await userStore.info();
          await appStore.fetchServerMenuConfig();
          next();
        } catch {
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          });
        }
      }
    } else {
      if (to.name === 'login') {
        next();
        return;
      }
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
