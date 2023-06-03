/*
 * @Author       : Mx
 * @Date         : 2023-05-30 09:55:20
 * @Description  :
 */
export type RoleType = '' | '*' | 'admin' | 'user';

export interface UserState {
  name?: string;
  avatar?: string;
  job?: string;
  location?: string;
  email?: string;
  locationName?: string;
  phone?: string;
  role: RoleType;
}
