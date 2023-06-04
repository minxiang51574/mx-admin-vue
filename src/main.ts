/*
 * @Author       : Mx
 * @Date         : 2023-05-28 21:21:27
 * @Description  :
 */
import { createApp } from 'vue';
import './style.css';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './mock';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
