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
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },

    // Change theme color
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
    async fetchServerMenuConfig() {
      console.log('fetchServerMenuConfig');
      const { data } = await getMenuList();
      this.serverMenu = data;
    },
    clearServerMenu() {
      this.serverMenu = [];
    },
  },
});

export default useAppStore;
