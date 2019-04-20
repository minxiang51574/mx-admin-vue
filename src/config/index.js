import Constant from './config.constant.js'
import Http from './config.http.js'
export default {
    install(Vue) {
        Vue.use(Constant)
        Http.init(Vue)

        // Vue.prototype.$http = Http
    }
}