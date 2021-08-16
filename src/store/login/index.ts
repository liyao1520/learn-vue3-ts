import { getItem, setItem } from '@/utils/storage'
import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import type { ILoginState, IUserInfo } from './type'
import { reqGetMenusById } from '@/service/login'
export const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: getItem('token') ?? '',
      userInfo: getItem('userInfo') ?? {
        name: '',
        id: 0
      },
      userMenu: getItem('userMenu') ?? []
    }
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, info: IUserInfo) {
      state.userInfo.name = info.name
      state.userInfo.id = info.id
    },
    async setUserMenu(state, userid) {
      const res = await reqGetMenusById(userid)
      state.userMenu = res.data.data
      setItem('userMenu', res.data.data)
    }
  }
}
