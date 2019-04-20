/**
 * Created by 54614 on 2018/11/1.
 */
import {
  REFRESH_MSG,
} from "../mutation-types"
const state = {
  data: {
    refreshMsgState:false
  }
  }
const mutations = {
  [REFRESH_MSG](state, data) {
    state.data.refreshMsgState= data
  }
}
export default {
  state,
  mutations
}
