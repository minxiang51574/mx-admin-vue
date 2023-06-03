import type { Router } from 'vue-router';
import setupUserLoginInfoGuard from './userLoginInfo';

/** 路由守卫 */
export default function createRouteGuard(router: Router) {
  setupUserLoginInfoGuard(router);
}
