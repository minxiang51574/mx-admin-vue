/*
 * @Author: Mx
 * @Date: 2023-06-01 10:57:21
 * @Description:
 */
import { DEFAULT_LAYOUT } from '@/router/constants';

import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/list',
  name: 'list',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table', // The midline path complies with SEO specifications
      name: 'SearchTable',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        locale: 'menu.server.dashboard',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'card',
      name: 'Card',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.server.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/list/workplace/index.vue'),
      meta: {
        locale: 'menu.server.monitor',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
