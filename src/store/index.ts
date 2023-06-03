/*
 * @Author: Mx
 * @Date: 2023-05-27 16:12:08
 * @Description:
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useMenuStore from './modules/menu';

const store = createPinia();
store.use(piniaPluginPersistedstate); // 使用持久化插件

export { useUserStore, useAppStore, useMenuStore };

export default store;
