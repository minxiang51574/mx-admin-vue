import md5 from 'js-md5'

export default {
  install(Vue) {
    Vue.prototype.md5 = md5
  }
}
