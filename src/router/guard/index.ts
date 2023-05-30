/*
 * @Author: Mx
 * @Date: 2023-05-30 18:07:48
 * @Description:
 */
import type { Router } from 'vue-router';
import NProgress from 'nprogress';
import { useUserStore } from '@/store';
/**
 * @description 路由守卫
 */
export default function createRouteGuard(router: Router) {
  setupPermissionGuard(router);
}

const setupPermissionGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    // 有token
    if (userStore.token) {
      if (to.path === '/login') {
        next();
      } else {
        next();
      }
    } else {
      // 没有token
      next(`/login`); // 否则全部重定向到登录页
    }
    NProgress.done();
  });
  router.afterEach(() => {
    NProgress.done();
  });
};
