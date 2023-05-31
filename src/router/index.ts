/*
 * @Author: Mx
 * @Date: 2023-05-27 15:34:42
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';
import { appRoutes } from './routes';

import createRouteGuard from './guard';

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'), //路由懒加载
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/not-found/index.vue'),
    },
    {
      path: '',
      component: () => import('@/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
          meta: { title: '首页', icon: 'dashboard' },
        },
      ],
    },
    ...appRoutes,
  ],
});

createRouteGuard(router);
export default router;
