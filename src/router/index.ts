/*
 * @Author: Mx
 * @Date: 2023-05-27 15:34:42
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

import createRouteGuard from './guard';

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes,
});

createRouteGuard(router);
export default router;
