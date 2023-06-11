/*
 * @Author: Mx
 * @Date: 2023-06-01 10:57:21
 * @Description:
 */
const user = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    locale: 'menu.list.cardList',
    requiresAuth: true,
    icon: 'Location',
    roles: ['*'],
  },
};

export default user;
