/*
 * @Author: Mx
 * @Date: 2023-05-27 15:42:17
 * @Description:
 */
const routes = [
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
];

export default routes;
