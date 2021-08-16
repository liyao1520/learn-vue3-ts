import { getItem } from '@/utils/storage'
import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import type { ILoginState, IUserInfo } from './type'
export const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: getItem('token') ?? '',
      userInfo: getItem('userInfo') ?? {
        name: '',
        id: 0
      }
    }
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, info: IUserInfo) {
      state.userInfo.name = info.name
      state.userInfo.id = info.id
    }
  }
}
