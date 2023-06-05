/*
 * @Author       : Mx
 * @Date         : 2023-05-28 21:21:27
 * @Description  :
 */
import { createApp } from 'vue';
import './style.css';
import router from './router';
import store from './store';
import i18n from './locale';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './mock';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(ElementPlus);

app.mount('#app');
