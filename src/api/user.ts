/*
 * @Author       :
 * @Date         : 2023-06-01 11:33:51
 * @Description  :
 */
import request from '@/utils/request';
import { UserState } from '@/store/modules/user/types';
import { RouteRecordNormalized } from 'vue-router';

export interface LoginData {
  username: string;
  password: string;
}
export interface LoginRes {
  token: string;
}

export function login(data: LoginData) {
  return request.post<LoginRes>('/api/user/login', data);
}

export function getUserInfo() {
  return request.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return request.post<RouteRecordNormalized[]>('/api/user/menu');
}
