/*
 * @Author       :
 * @Date         : 2023-06-01 11:33:51
 * @Description  :
 */
import request from '@/utils/request';

export interface LoginData {
  username: string;
  password: string;
}
export function login(data: LoginData) {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data,
  });
}
