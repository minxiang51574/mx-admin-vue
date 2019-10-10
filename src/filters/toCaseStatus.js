/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 15:28:45
 * @LastEditTime: 2019-09-03 15:28:45
 * @LastEditors: your name
 */
/**
 * 格式化案件状态
 *
 * @param      {<number>}  status       
 *     
 */

const statusArr = [
  "状态0",
  "状态1",
  "状态2",
  "状态3",
  "状态4",
  "状态5",
]
export default function toCaseStatus(status) {
  return statusArr[status] || "未知状态"
}
