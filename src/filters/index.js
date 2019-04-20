
import { billType } from "./billType"
import toCaseStatus from "./toCaseStatus"

export default {
  install(Vue) {
    Vue.filter("billType", billType)
    Vue.filter("toCaseStatus", toCaseStatus)
  }
}
