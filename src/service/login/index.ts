import { request } from '../index'

export interface ILoginData {
  name: string
  password: string
}

export const reqLogin = (data: ILoginData) =>
  request({
    method: 'POST',
    url: '/login',
    data
  })
//查询角色菜单ids
export const reqGetMenusById = (userId: number) =>
  request({
    url: `/role/${userId}/menu`
  })
