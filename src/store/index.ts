import { request } from '@/service'
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { loginModule } from './login/index'
import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  modules: {
    loginModule
  },
  actions: {
    async getMenu(ctx, userId: number) {
      const { data } = await request({
        url: `/role/${userId}/menuIds`
      })
      ctx.commit('setMenu', data)
    }
  }
})
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
