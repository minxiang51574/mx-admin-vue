import request from '@/utils/request';

export function login() {
  return request({
    url: '/api/user/login',
    method: 'POST',
  });
}
