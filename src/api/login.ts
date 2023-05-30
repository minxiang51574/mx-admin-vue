/*
 * @Author: Mx
 * @Date: 2023-05-30 09:55:20
 * @Description:
 */
import request from '@/utils/request';
// 获取suiteId
export function login(data: any) {
  return request({
    url: '/h5/login',
    method: 'POST',
    data,
  });
}
