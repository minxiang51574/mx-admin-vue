/*
 * @Author: Mx
 * @Date: 2023-05-31 17:42:25
 * @Description:
 */
import type { RouteLocationNormalized } from 'vue-router';
import { defineStore } from 'pinia';
import { appRoutes } from '@/router/routes';
import { TabBarState, TagProps } from './types';
const formatTag = (route: RouteLocationNormalized): TagProps => {
  const { name, meta, fullPath, query } = route;
  console.log('route', route);
  return {
    title: meta.locale || '',
    name: String(name),
    fullPath,
    query,
    ignoreCache: meta.ignoreCache,
  };
};

const useAppStore = defineStore('tabBar', {
  state: (): TabBarState => ({
    tagList: [],
  }),
  getters: {
    getTabList(): TagProps[] {
      return this.tagList;
    },
  },
  actions: {
    updateTabList(route: RouteLocationNormalized) {
      this.tagList.push(formatTag(route));
    },
  },
});
export default useAppStore;
