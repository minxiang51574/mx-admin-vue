/*
 * @Author: Mx
 * @Date: 2023-05-27 16:24:56
 * @Description:
 */
import { defineStore } from 'pinia';
import { getMenuList } from '@/api/user';
import defaultSettings from '@/config/settings.json';
import { AppState } from './types';

const useAppStore = defineStore('app', {
  state: (): AppState => ({ ...defaultSettings }),
  actions: {
    async fetchServerMenuConfig() {
      console.log('fetchServerMenuConfig');
      const { data } = await getMenuList();
      console.log(data);
      this.serverMenu = data;
    },
  },
});

export default useAppStore;
