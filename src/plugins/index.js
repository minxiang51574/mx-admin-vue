import md5 from './md5'
import date from './date'
export default {
    install(Vue){
        Vue.use(md5)
        Vue.use(date)
    }
}