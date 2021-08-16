import { ILoginState } from './login/type'

export interface IRootState {
  menu: []
}
export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
