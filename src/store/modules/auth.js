/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-09-24 11:59:19
 * @LastEditors: Please set LastEditors
 */
import md5 from "js-md5"
import Base64 from "js-base64"
import Cookies from "js-cookie"
import {
  SET_AUTH,
  GET_AUTH,
  SET_COUNT,
  SET_VERSION,
  SET_HEADIMAGE
} from "../mutation-types"

const COOKIE_ID = md5("ticket20181101")
const LOCAL_VERSION_ID =
  "VERSION_" + location.host.replace(/\./g, "_").toUpperCase()
// const ROLE_IDS = [1]
const HOST = md5(Base64.Base64.encode(window.location.host))
let localVersionCode = "0.0.0"
if (window.localStorage && window.localStorage.getItem) {
  localVersionCode =
    window.localStorage.getItem(LOCAL_VERSION_ID) || localVersionCode
}
const state = {
  data: {
    token: "", //登录令牌
    userId:"",
    userName: "", //用户名
    resourceIds: "", //权限
    privileges: {} //权限

  }
}
/**
 * { check role }
 *
 * @param      {<type>}  roleIds  The role identifiers
 */
// const checkRole = function(roleIds) {
//   let bool = true
//   roleIds.forEach(function(n) {
//     ROLE_IDS.forEach(function(m) {
//       if (n == m) {
//         bool = false
//       }
//     })
//   })
//   return bool
// }
/**
 * Gets the privileges.
 *
 * @param      {string}  resourceIds  The resource identifiers
 */
const getPrivileges = function(resourceIds = "") {
  let privileges = {}
  resourceIds.split(";").forEach(function(resourceId) {
    if (resourceId) {
      privileges[resourceId] = true
    }
  })
  return privileges
}
/**
 * Sets the cookie.
 *
 * @param      {<type>}  data        The data
 * @param      {number}  rememberMe  The remember me
 */
const setCookie = function(data = null, rememberMe = null) {
  if (data && data.token && data.userName) {
    Cookies.set(COOKIE_ID, Base64.Base64.encode(JSON.stringify(data)), {
      expires: 7,
      path: "/"
    })
    if (rememberMe === 1) {
      Cookies.set("DOOR_USER_NAME", data.userName, { expires: 7, path: "/" })
    } else if (rememberMe === 0) {
      Cookies.set("DOOR_USER_NAME", { expires: -1, path: "/" })
    }
  } else {
    Cookies.set(COOKIE_ID, "", { expires: -1, path: "/" })
  }
}

const mutations = {
  [SET_AUTH](state, data) {
    // if (data && data.userName && Array.isArray(data.roleIds) && checkRole(data.roleIds)) {
    if (data && data.userName) {
      data.nickName = data.fullName || data.userName
      state.data.token = data.token
      state.data.userId = data.userId
      state.data.userName = data.userName
      state.data.nickName = data.nickName
      state.data.phoneNumber = data.phoneNumber
      state.data.oldUserId = data.oldUserId
      state.data.resourceIds = data.resourceIds
      state.data.localUserName = data.userName
      state.data.headImage = data.headImage
      state.data.organization = data.organization
      state.data.positionName = data.positionName
        ? data.positionName.split(";")
        : []
      state.data.departmentName = data.departmentName
        ? data.departmentName.split(";")
        : []
      state.data.departmentIds = data.departmentIds
      state.data.roleIds = data.roleIds || []
      state.data.roleNames = data.roleNames || []
      state.data.privileges = getPrivileges(data.resourceIds)
      setCookie(state.data, data.rememberMe)
    } else {
      state.data.token = ""
      state.data.isSale = ""
      state.data.userId = ""
      state.data.userName = ""
      state.data.nickName = ""
      state.data.phoneNumber = ""
      state.data.oldUserId = ""
      state.data.resourceIds = ""
      state.data.headImage = ""
      state.data.organization = ""
      state.data.positionName = []
      state.data.departmentName = []
      state.data.departmentIds = ""
      state.data.roleIds = []
      state.data.roleNames = []
      state.data.privileges = {}
      setCookie()
    }
  },
  [GET_AUTH](state) {
    const ticket = Cookies.get(COOKIE_ID)
    let data = null
    try {
      data = JSON.parse(Base64.Base64.decode(ticket))
    } catch (e) {}
    // if (data && data.host === HOST && Array.isArray(data.roleIds) && checkRole(data.roleIds)) 
    if (data && Array.isArray(data.roleIds)) {
      state.data.token = data.token
      state.data.userId = data.userId
      state.data.userName = data.userName
      state.data.resourceIds = data.resourceIds
      state.data.privileges = data.privileges
    } else {
      state.data.token = ""
      state.data.isSale = ""
      state.data.userId = ""
      state.data.userName = ""
      state.data.nickName = ""
      state.data.phoneNumber = ""
      state.data.oldUserId = ""
      state.data.resourceIds = ""
      state.data.headImage = ""
      state.data.organization = ""
      state.data.positionName = []
      state.data.departmentName = []
      state.data.departmentIds = []
      state.data.roleIds = []
      state.data.roleNames = []
      state.data.privileges = {}
      setCookie()
    }
  },
  [SET_HEADIMAGE](state, data) {
    state.data.headImage = data
    setCookie(state.data, 0)
  },
  [SET_COUNT](state, data) {
    console.log(SET_COUNT)
  },
  [SET_VERSION](state, data) {
    console.log(SET_VERSION)
  }
}

export default {
  state,
  mutations
}
