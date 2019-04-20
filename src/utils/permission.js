import store from '../store'
/**
 * { 权限验证 }
 *
 * @param      {<array>}  support  支持的权限
 * @param      {<array>}  limit    仅限支持的权限
 * @param      {<array>}  have     具备的权限
 */
export default function (support, limit, have) {
  let supportPrivilege = false
  let limitObj = {}
  if (limit) {
    limit.forEach(function (resourceId) {
      limitObj[resourceId] = true
    })
  }
  if (support) {
    if (!Array.isArray(support)) {
      support = [support]
    }
    const auth = store.state.auth.data
    if (auth && auth.privileges) {
      support.forEach(function (privilege) {
        supportPrivilege = supportPrivilege || (!!auth.privileges[privilege])
      })
    }
    if (supportPrivilege && limit) {
      supportPrivilege = false
      support.forEach(function (privilege) {
        supportPrivilege = supportPrivilege || (!!limitObj[privilege])
      })
    }
  }
  return supportPrivilege
}
