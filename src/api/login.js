import request from '@/utils/request'
export function login(username, password) {
    return request({
        url:'user/login',
        methods:'post',
        data:{
            username,
            password        
        }
    })
}

export function getInfo(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: {
      id
    }
  })
}