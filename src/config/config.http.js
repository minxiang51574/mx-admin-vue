/**
 * { axios 配置 }
 */
import axios from "axios"
import store from "../store"
import {
  GET_AUTH,
  SET_AUTH
} from "../store/mutation-types"

export default {
  init(Vue) {
    const globalResponse = (res, success, fail) => {
      let data = res.data || {}
      if (data.resultCode == 1000) {
        success(data.resultData)
      } else if (data.resultCode == 1003) {
        //没有登录或登录超时，请重新登录
        Vue.prototype.$message.warning("您的登录过期了，即将跳转至登录页面")
        store.commit(SET_AUTH)
        setTimeout(() => {
          window.location.reload()
        }, 800)
      } else {
        fail(data)
      }
    }

    let auth = store.state.auth.data
    axios.defaults.baseURL = Vue.prototype.API
    axios.defaults.withCredentials = false
    axios.defaults.headers.common["Accept"] = "application/json"
    //请求拦截
    axios.interceptors.request.use(
      function (request) {
        const that = Vue.prototype
        // 获取认证
        store.commit(GET_AUTH)
        const token = auth.token || ""
        //在请求发出之前进行一些操作
        if (token) {
          request.headers.common["Authorization"] = that.sha1(token)
          request.headers.common["X-Auth-Token"] = token
        }
     
        if (request.params) {
        
          request.params = that.filterParams(
            request.params,
            request.method.toUpperCase() === "GET"
          )
        }
        return request
      },
      function (err) {

        const that = Vue.prototype
        that.$message.error(that.MSG.unknown)
        return Promise.reject(err)
      }
    )

    //响应拦截
    axios.interceptors.response.use(
      function (response) {
        const that = Vue.prototype
        //在这里对返回的数据进行处理
        globalResponse(response,function (data) {
            response.succeed = true
            response.body = data
          },
          function (data) {
            response.body = data
          }
        )
        return response
      },
      function (err) {
        //Do something with response error
        const that = Vue.prototype
        that.$message.error(
          err.response && err.response.status === 500 ?
          "服务器繁忙，请稍后访问！" :
          that.MSG.unknown
        )
        return Promise.reject(err)
      }
    )
  }
}
