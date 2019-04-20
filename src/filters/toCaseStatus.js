/**
 * 格式化案件状态
 *
 * @param      {<number>}  status       
 *     
 */

const statusArr = [
  "状态1",
  "状态2",
  "状态3",
  "状态4",
  "状态5",
]
export default function toCaseStatus(status) {
  return statusArr[status] || "未知状态"
}
