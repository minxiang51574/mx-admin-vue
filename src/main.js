// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element
import elementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUI)

//fontAwesome字体
import "font-awesome/css/font-awesome.min.css"

//数据仓库
import store from './store'

/**
 * 配置
 */
import Config from "./config"
Vue.use(Config)

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'HlrBoaplG4pYn5bqMmf0uMwz8l8rp588'
})
import VCharts from 'v-charts'
Vue.use(VCharts)

import axios from "axios"
import VueAxios from "vue-axios"
/**
 * { 应用axios }
 */
Vue.use(VueAxios, axios)

import Utils from "./utils"
/**
 * { 工具类 }
 */
Vue.use(Utils)

import filters from "./filters"
Vue.use(filters)


import Plugins from "./plugins"
/**
 * { 工具类 }
 */
Vue.use(Plugins)
/**
 * 全屏组件
 */
import fullscreen from "vue-fullscreen"
Vue.use(fullscreen)

//引入公共样式
import "./assets/css/layout.less"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
