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
      this.serverMenu = data;
    },
    toggleTheme(dark: boolean) {
      const htmlTag = document.getElementsByTagName('html')[0];
      if (dark) {
        this.theme = 'dark';
        htmlTag.classList.add('dark');
      } else {
        this.theme = 'light';
        htmlTag.classList.remove('dark');
      }
    },
  },
});

export default useAppStore;
