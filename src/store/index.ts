/*
 * @Author: Mx
 * @Date: 2023-05-27 16:12:08
 * @Description:
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';

const store = createPinia();
store.use(piniaPluginPersistedstate); // 使用持久化插件

export { useUserStore, useAppStore, useTabBarStore };

export default store;
