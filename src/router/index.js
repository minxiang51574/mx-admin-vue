/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-09-24 10:58:04
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import lazyLoading from './lazyLoading'
import menu from './menu';
import {
  isSupport
} from '../utils/tool'



Vue.use(Router)

const router = new Router({
//   mode: "history",
  routes: [
    {
      path: '/',
      component: lazyLoading("Index"),
      children:[...menu.state.items]
    },
     {
       path: "/nonsupport",
       name: "nonsupport",
       component: lazyLoading('Nonsupport'),
       meta: {
         title: "温馨提示"
       }
     },
     {
       name: "404",
       path: "*",
       component: lazyLoading('NotFound')
     },
    {
        path:'/login',
        name: 'login',
        component: lazyLoading("login", true)
    }
  ]
})
router.beforeEach((to, from, next) => {
  const meta = to.meta || {}
  const that = Vue.prototype
  //设置标题
  if (meta.title) {
    document.title = `vue管理系统-${to.meta.title}`
  }
  //处理低版本浏览器
  if (!isSupport(window, document) && to.name !== "nonsupport") {
    next({
      name: "nonsupport"
    })
  } else {
      //如果没有登陆 并且去的页面不是login 跳转到登陆
    if (!store.getters.auth && to.name !== "login") {
       next({ name: "login"})
    } else{
        //正常跳转
        if (that.permission(meta.auth) || !meta.auth) {
          next()
        } else if (to.name !== "404") {
          next({
            name: "404"
          })
        }
    
    }
  }
})
 export default router;