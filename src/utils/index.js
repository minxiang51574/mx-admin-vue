import * as tool from './tool'
import permission from './permission'
export default {
    install(Vue){
       Object.assign(Vue.prototype, tool, {
         permission
       })
    }
}